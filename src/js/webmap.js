import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import settings from "../config/Settings";
import store from "../store/store";
import { addOrthoServices, addMapServices, updateLayerListInScale } from "./Layers";
import { addLayer } from "../store/actions/layerActions";
import { customAlphabet } from "nanoid";
import LayerStore from "../config/LayerStore";

const map = new ArcGISMap();

export let view = new MapView({ map, extent: settings.startingExtent });

const onViewStationary = () => {
  updateLayerListInScale(view.scale);
};

let curLayers = [];

view.on("layerview-create", ({ layer }) => {
  layer.allSublayers.forEach((sublayer) => {
    const nanoid = customAlphabet("1234567890abcdef", 6);
    curLayers.push({
      layer: sublayer,
      inScale: false,
      title: sublayer.title,
      ulid: nanoid(),
    });
    // store.dispatch(
    //   addLayer({
    //     layer: sublayer,
    //     title: sublayer.title,
    //     inScale: false,
    //     ulid: nanoid(),
    //   })
  });
});

view.on("click", () => {
  const iterate = (obj) => {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === "object") {
        if (obj[key].leaf) {
          const matchedLayer = curLayers.find((layer) => layer.layer.title === obj[key].name);
          if (matchedLayer) store.dispatch(addLayer(matchedLayer));
        }
        iterate(obj[key]);
      }
    });
  };
  iterate(LayerStore);
});

addOrthoServices(map);
addMapServices(map);
view.watch("stationary", onViewStationary);

export const initialize = (container) => {
  view.container = container;
  return view;
};
