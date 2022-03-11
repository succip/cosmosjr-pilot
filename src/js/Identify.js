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
      if (!settings.ignoreIdentifyLayers.includes(layer.layer.id)) {
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

export const identifyMapPoint = ({ mapPoint, view }) => {
  let idResults = [];

  const g = new Graphic({
    geometry: mapPoint,
    symbol: settings.searchMarkerSymbol,
    attributes: { name: "select" },
    spatialReference: view.spatialReference,
  });
  view.map.findLayerById("CosGraphicsLayer").add(g);

  const mapServiceUrlList = getMapServiceList();
  mapServiceUrlList.forEach(({ url, layerIds }) => {
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
    identify.identify(url, params).then(({ results }) => {
      if (results.length > 0) {
        console.log(results);
        results.forEach((result) => {
          const { displayFieldName, layerName, feature } = result;
          const idValue = feature.attributes[displayFieldName];
          console.log(idValue);
          const idResult = { displayFieldName, layerName, feature, idValue };
          idResults.push(idResult);
          store.dispatch(setActivePanel(null));
          store.dispatch(setActivePanel(3));
        });
      }
    });
  });
  store.dispatch(setIdentifyResults(idResults));
};
