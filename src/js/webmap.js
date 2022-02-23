import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import settings from "../config/Settings";
import store from "../store/store";
import { addLayer, updateLayerInscale } from "../store/actions/layerActions";
import { customAlphabet } from "nanoid";

export const map = new ArcGISMap();

export let view = new MapView({ map, extent: settings.startingExtent });

view.on("layerview-create", ({ layer }) => {
  layer.allSublayers.forEach((sublayer) => {
    const { minScale, maxScale } = sublayer;
    const nanoid = customAlphabet("1234567890abcdef", 6);
    store.dispatch(
      addLayer({
        layer: sublayer,
        inScale: false,
        ulid: nanoid(),
      })
    );
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
      console.log(`Sublayer added: ${id}`);
    }
  });
};

addMapServices();

view.on("click", () => {
  const mapScale = view.scale;
  console.log("-------");
  const { layers } = store.getState();
  layers.allLayers.forEach((mapLayer) => {
    const maxScale = mapLayer.layer.maxScale;
    const minScale = mapLayer.layer.minScale;
    let inScale;

    if ((mapScale < minScale && mapScale > maxScale) || (minScale === 0 && maxScale === 0)) {
      inScale = false;
    } else {
      inScale = true;
    }
    console.log(mapLayer.layer.title, mapScale, mapLayer.layer.maxScale, mapLayer.layer.minScale, inScale);
    // console.log(`${mapLayer.layer.title}: ${mapLayer.inScale} - ${inScale}`);
    // updateLayerInscale({ ulid: mapLayer.ulid, inScale });
  });
});

const onViewStationary = () => {
  // const mapScale = view.scale;
  // const { layers } = store.getState();
  // layers.allLayers.forEach((mapLayer) => {
  //   const inScale = mapScale < mapLayer.layer.maxScale && mapScale > mapLayer.layer.minScale;
  //   console.log(mapLayer.layer.title, inScale);
  //   updateLayerInscale({ ulid: mapLayer.ulid, inScale });
  // });
};

view.watch("stationary", onViewStationary);

export const initialize = (container) => {
  view.container = container;
  return view;
};
