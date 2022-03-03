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
  const { mapView } = store.getState();
  const map = mapView.mapView.map;
  const allLayers = map.allLayers.items;

  allLayers.forEach((layer) => {
    layer.visible = false;
  });
});

export const initialize = (container) => {
  view.container = container;
  return view;
};
