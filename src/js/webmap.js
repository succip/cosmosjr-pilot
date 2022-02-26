import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import settings from "../config/Settings";
import store from "../store/store";
import { addOrthoServices, addMapServices, updateLayerListInScale, buildMapLayers } from "./Layers";
import { addLayer } from "../store/actions/layerActions";
import { customAlphabet } from "nanoid";
import LayerStore from "../config/LayerStore";

const map = new ArcGISMap();

export let view = new MapView({ map, extent: settings.startingExtent });

const onViewStationary = () => {
  updateLayerListInScale(view.scale);
};

view.on("layerview-create", ({ layer }) => {
  layer.allSublayers.forEach((sublayer) => {
    const nanoid = customAlphabet("1234567890abcdef", 6);
    store.dispatch(
      addLayer({
        layer: sublayer,
        inScale: false,
        title: sublayer.title,
        ulid: nanoid(),
      })
    );
  });
});

view.on("click", () => {
  buildMapLayers(LayerStore);
});

addOrthoServices(map);
addMapServices(map).then(() => {
  console.log("mapservicesadded");
});
view.watch("stationary", onViewStationary);

export const initialize = (container) => {
  view.container = container;
  return view;
};
