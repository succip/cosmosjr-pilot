import { setIdentifyLoading, setIdentifyResults } from "../store/actions/appActions";
import Graphic from "@arcgis/core/Graphic";
import IdentifyParameters from "@arcgis/core/rest/support/IdentifyParameters";
import * as identify from "@arcgis/core/rest/identify";
import settings from "../config/Settings";
import store from "../store/store";
import Link from "@mui/material/Link";
import { generateId } from "./Utilities";
import { toast } from "../js/Utilities";
const _ = require("lodash");

const createAttributeLink = (value) => {
  value = value.trim();
  let el = document.createElement("html");
  el.innerHTML = value;
  const { href, innerHTML } = el.getElementsByTagName("a")[0];
  return (
    <Link target="_blank" href={href}>
      {innerHTML}
    </Link>
  );
};

const getMapServiceList = () => {
  const { mapLayers } = store.getState().layers;
  let mapLayerUrlList = [];

  mapLayers.forEach(({ layer }) => {
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

  const groups = _.groupBy(mapLayerUrlList, "url");
  let mapServiceUrlList = [];

  Object.keys(groups).forEach((group) => {
    let layerIds = [];
    groups[group].forEach((item) => {
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
  const id = generateId();
  displayValue =
    !displayValue || displayValue === "Null" ? feature.attributes.OBJECTID : displayValue;
  return { displayFieldName, layerName, feature, displayValue, attributes, isLotLayer, id };
};

export const formatAttributes = (attributes) => {
  const formattedAttributes = [];

  Object.keys(attributes).forEach((key) => {
    let Field = key;
    let Value = attributes[key];

    if (Value !== null && Value !== "Null" && Field !== "OBJECTID" && Field !== "SHAPE") {
      if (Field === "SHAPE_Area") Field = "AREA (m²)";
      if (Field === "SHAPE_Length") Field = "LENGTH (m)";
      if (Field === "LATERAL_TYPE2") Field = "LATERAL TYPE";

      Field = Field.replace(/_/g, " ");

      formattedAttributes.push({ Field, Value });
    }
  });
  return formattedAttributes;
};

export const formatPropertyAttributes = (attributes) => {
  const formattedAttributes = [];

  attributes.forEach((attribute) => {
    let { Field, Value } = attribute;

    if (Field.includes("<a href=")) Field = createAttributeLink(Field);

    formattedAttributes.push({ Field, Value });
  });

  return formattedAttributes;
};

export const highlightFeature = ({ geometry }) => {
  const { map } = store.getState().app.view;
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

export const clearIdentifyResults = () => store.dispatch(setIdentifyResults([]));

export const identifyMapPoint = async ({ mapPoint }) => {
  const { view } = store.getState().app;
  clearIdentifyResults();
  store.dispatch(setIdentifyLoading(true));
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

  const uniqueIdResults = _.uniqWith(
    idResults,
    (resultA, resultB) =>
      resultA.layerName === resultB.layerName && resultA.displayValue === resultB.displayValue
  );

  if (!uniqueIdResults.length)
    toast({ text: "Nothing found at location clicked. Try zooming in or another location." });
  await store.dispatch(setIdentifyResults(uniqueIdResults));
  store.dispatch(setIdentifyLoading(false));
};
