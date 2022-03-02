import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import settings from "../config/Settings";
import store from "../store/store";
import { addOrthoServices, addMapServices, updateLayerListInScale } from "./Layers";

const map = new ArcGISMap();

export let view = new MapView({ map, extent: settings.startingExtent });

const onViewStationary = () => {
  updateLayerListInScale(view.scale);
};

addOrthoServices(map);
addMapServices(map);

view.watch("stationary", onViewStationary);

view.on("click", () => {
  const { layers } = store.getState();
  console.log(layers.mapLayers);
});

export const initialize = (container) => {
  view.container = container;
  return view;
};
