import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
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
import { widgets } from "../config/WidgetConfig";
import store from "../store/store";

const onViewStationary = () => {
  updateLayerListInScale(view.scale);
};

const highlightGLayer = new GraphicsLayer({
  id: "highlight",
});

const drawGLayer = new GraphicsLayer({
  id: "draw",
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

const addMapWidgets = () => {
  widgets.forEach(({ component, position }) => {
    const node = document.createElement("div");
    view.ui.add(node, position);
    ReactDOM.render(<Provider store={store}>{component}</Provider>, node);
  });
};

export const initialize = async (container) => {
  await addAllServices(map);
  watchOrthoVisibility();
  addMapWidgets();
  map.addMany([highlightGLayer, drawGLayer]);
  view.container = container;

  return view;
};
