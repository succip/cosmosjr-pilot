import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import settings from "../config/Settings";
import {
  updateLayerListInScale,
  setMapThemeLayers,
  addAllServices,
  watchOrthoVisibility,
} from "./Layers";
import { identifyMapPoint } from "./Identify";

const onViewStationary = () => {
  updateLayerListInScale(view.scale);
};

const csGraphicsLayer = new GraphicsLayer({
  id: "CosGraphicsLayer",
});

const map = new ArcGISMap();

export let view = new MapView({ map, extent: settings.startingExtent });

view.watch("stationary", onViewStationary);

view.when(() => {
  setMapThemeLayers("City");
});

view.on("click", ({ mapPoint }) => {
  identifyMapPoint({ mapPoint });
});

export const initialize = async (container) => {
  await addAllServices(map);
  watchOrthoVisibility();
  map.add(csGraphicsLayer);
  view.container = container;
  return view;
};
