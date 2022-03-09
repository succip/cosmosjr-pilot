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

const getMapServiceUrls = () => {};

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

  const identifyParameters = new IdentifyParameters({
    tolerance: 5,
    layerOption: "visible",
    returnGeometry: true,
    spatialReference: view.spatialReference,
    width: view.width,
    height: view.height,
    mapExtent: view.extent,
    geometry: mapPoint,
  });
});

export const initialize = (container) => {
  view.container = container;
  return view;
};
