import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import store from "../store/store";
import Graphic from "@arcgis/core/Graphic";
import * as identify from "@arcgis/core/rest/identify";
import IdentifyParameters from "@arcgis/core/rest/support/IdentifyParameters";
import settings from "../config/Settings";
import {
  addOrthoServices,
  addMapServices,
  updateLayerListInScale,
  setMapThemeLayers,
} from "./Layers";

const onViewStationary = () => {
  updateLayerListInScale(view.scale);
};

const csGraphicsLayer = new GraphicsLayer({
  id: "CosGraphicsLayer",
});

const map = new ArcGISMap();

export let view = new MapView({ map, extent: settings.startingExtent });

addOrthoServices(map);
addMapServices(map);
map.add(csGraphicsLayer);

view.watch("stationary", onViewStationary);

view.when(() => {
  setMapThemeLayers("City Map");
});

// REFACTOR INTO SEPARATE IDENTIFY MODULE
const getMapServiceUrls = () => {
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

view.on("click", ({ mapPoint }) => {
  if (mapPoint) {
    const g = new Graphic({
      geometry: mapPoint,
      symbol: settings.searchMarkerSymbol,
      attributes: { name: "select" },
      spatialReference: view.spatialReference,
    });
    csGraphicsLayer.add(g);
  }

  const mapServiceUrlList = getMapServiceUrls();

  let params = new IdentifyParameters({
    tolerance: 5,
    layerOption: "all",
    returnGeometry: true,
    spatialReference: view.spatialReference,
    geometry: mapPoint,
    width: view.width,
    height: view.height,
    mapExtent: view.extent,
  });

  mapServiceUrlList.forEach(({ url, layerIds }) => {
    console.log(url);
    console.log(`Service layerids: ${layerIds}`);
    params.layerIds = layerIds;
    // params.layerIds = [7];
    console.log(`Param layerids: ${params.layerIds}`);
    // params.sublayers = [{ id: params.layerIds[0] }];
    identify.identify(url, params).then(({ results }) => {
      if (results.length > 0) console.log(results);
    });
    console.log("----");
  });
});

export const initialize = (container) => {
  view.container = container;
  return view;
};
