import { setActivePanel, setIdentifyResults } from "../store/actions/appActions";
import Graphic from "@arcgis/core/Graphic";
import IdentifyParameters from "@arcgis/core/rest/support/IdentifyParameters";
import * as identify from "@arcgis/core/rest/identify";
import settings from "../config/Settings";
import store from "../store/store";

const getMapServiceList = () => {
  const { layers } = store.getState();
  let mapLayerUrlList = [];

  layers.mapLayers.forEach(({ layer }) => {
    if (layer.visible === true) {
      if (
        !settings.ignoreIdentifyServices.includes(layer.layer.id) &&
        !settings.ignoreIdentifyLayers.includes(layer.title)
      ) {
        if (layer.layer.capabilities && layer.layer.capabilities.operations.supportsQuery) {
          mapLayerUrlList.push({
            url: layer.layer.url,
            layerId: layer.id,
          });
        }
      }
    }
  });

  const reduced = mapLayerUrlList.reduce((r, a) => {
    r[a.url] = r[a.url] || [];
    r[a.url].push(a);
    return r;
  }, Object.create(null));

  let mapServiceUrlList = [];

  Object.keys(reduced).forEach((group) => {
    let layerIds = [];
    reduced[group].forEach((item) => {
      layerIds.push(item.layerId);
    });
    mapServiceUrlList.push({ url: group, layerIds });
  });

  return mapServiceUrlList;
};

export const parseResult = (result) => {
  const { displayFieldName, feature } = result;
  const attributes = formatAttributes(feature.attributes);
  const layerName = settings.lotLayerGroup.includes(result.layerName) ? "Lots" : result.layerName;
  const isLotLayer = layerName === "Lots";
  let displayValue = feature.attributes[displayFieldName];
  displayValue =
    !displayValue || displayValue === "Null" ? feature.attributes.OBJECTID : displayValue;
  return { displayFieldName, layerName, feature, displayValue, attributes, isLotLayer };
};

const formatAttributes = (attributes) => {
  const formattedAttributes = [];
  Object.keys(attributes).forEach((key) => {
    let Field = key;
    let Value = attributes[key];

    if (Value !== null && Field !== "OBJECTID" && Field !== "SHAPE") {
      if (Field === "SHAPE_Area") Field = "AREA (m²)";
      if (Field === "SHAPE_Length") Field = "LENGTH (m)";
      Field = Field.replace(/_/g, " ");

      formattedAttributes.push({ Field, Value });
    }
  });
  return formattedAttributes;
};

export const highlightFeature = ({ geometry }) => {
  const { app } = store.getState();
  const map = app.view.map;
  const csGraphicsLayer = map.findLayerById("CosGraphicsLayer");

  const existingGraphic = csGraphicsLayer.graphics.find((g) => g.attributes.id === "hg");
  if (existingGraphic) csGraphicsLayer.graphics.remove(existingGraphic);

  const highlightGraphic = new Graphic({
    geometry,
    attributes: { id: "hg" },
    symbol: settings.searchMarkerSymbols[geometry.type],
  });
  csGraphicsLayer.add(highlightGraphic);
};

export const identifyMapPoint = async ({ mapPoint, view }) => {
  let idResults = [];

  const g = new Graphic({
    geometry: mapPoint,
    symbol: settings.searchMarkerSymbols.point,
    attributes: { name: "select" },
    spatialReference: view.spatialReference,
  });
  view.map.findLayerById("CosGraphicsLayer").add(g);

  for (const { url, layerIds } of getMapServiceList()) {
    let params = new IdentifyParameters({
      tolerance: 5,
      layerOption: "visible",
      returnGeometry: true,
      spatialReference: view.spatialReference,
      geometry: mapPoint,
      width: view.width,
      height: view.height,
      mapExtent: view.extent,
      layerIds,
    });
    params.sublayers = [{ id: params.layerIds[0] }];
    await identify.identify(url, params).then(({ results }) => {
      if (results.length > 0) {
        results.forEach((result) => {
          idResults.push(parseResult(result));
        });
      }
    });
  }
  const uniqueIdResults = idResults.filter(function (result) {
    var key = result.layerName + "|" + result.displayValue;
    if (!this[key]) {
      this[key] = true;
      return true;
    }
  }, Object.create(null));
  store.dispatch(setIdentifyResults(uniqueIdResults));
  store.dispatch(setActivePanel(null));
  store.dispatch(setActivePanel(3));
};
