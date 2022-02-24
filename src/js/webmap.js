import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import settings from "../config/Settings";
import store from "../store/store";
import { addLayer, updateLayerInscale } from "../store/actions/layerActions";
import { customAlphabet } from "nanoid";
import LayerStore from "../config/LayerStore";

export const map = new ArcGISMap();

export let view = new MapView({ map, extent: settings.startingExtent });

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
    //     inScale: false,
    //     ulid: nanoid(),
    //   })
  });
});

const addOrthoServices = () => {
  settings.mapServices.forEach((mapService) => {
    const { id, url, baseMapService } = mapService;
    if (baseMapService) {
      const addMapService = new MapImageLayer({
        id,
        url,
        visible: true,
      });
      map.add(addMapService);
      console.log(`Basemap added: ${id}`);
    }
  });
};

const addMapServices = () => {
  settings.mapServices.forEach((mapService) => {
    const { id, url, baseMapService } = mapService;
    if (!baseMapService) {
      const addMapService = new MapImageLayer({
        id,
        url,
        visible: true,
      });
      map.add(addMapService);
      console.log(`Map service added: ${id}`);
    }
  });
};

addMapServices();

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

const onViewStationary = () => {
  const mapScale = view.scale;
  const { layers } = store.getState();
  layers.allLayers.forEach((mapLayer) => {
    const maxScale = mapLayer.layer.maxScale;
    const minScale = mapLayer.layer.minScale;
    let inScale;

    if ((mapScale < minScale && mapScale > maxScale) || (minScale === 0 && maxScale === 0)) {
      inScale = true;
    } else {
      inScale = false;
    }

    if (inScale !== mapLayer.inScale) {
      console.log("Layer updated");
      store.dispatch(updateLayerInscale({ ulid: mapLayer.ulid, inScale }));
    }
  });
};

view.watch("stationary", onViewStationary);

export const initialize = (container) => {
  view.container = container;
  return view;
};
