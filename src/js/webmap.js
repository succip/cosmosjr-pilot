import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import settings from "../config/Settings";
import LayerStore from "../config/LayerStore";
import { addOrthoServices, addMapServices, updateLayerListInScale } from "./Layers";

const map = new ArcGISMap();

export let view = new MapView({ map, extent: settings.startingExtent });

const onViewStationary = () => {
  updateLayerListInScale(view.scale);
};

addOrthoServices(map);
addMapServices(map);

view.watch("stationary", onViewStationary);

const buildLayerList = (layerStore) => {
  console.log("---------");
  Object.keys(layerStore).forEach((key) => {
    if (layerStore[key].children) {
      console.log(`Group found: ${layerStore[key].name}`);
      return buildLayerList(layerStore[key].children);
    }
    if (layerStore[key].leaf) {
      console.log(`Node found: ${layerStore[key].name}`);
    }
  });
};

view.on("click", () => {
  buildLayerList(LayerStore);
});

export const initialize = (container) => {
  view.container = container;
  return view;
};
