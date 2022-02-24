import settings from "../config/Settings";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import store from "../store/store";
import { updateLayerInscale } from "../store/actions/layerActions";

export const addOrthoServices = (map) => {
  settings.mapServices.forEach((mapService) => {
    const { id, url, baseMapService } = mapService;
    if (baseMapService) {
      const addMapService = new MapImageLayer({
        id,
        url,
        visible: true,
      });
      map.add(addMapService);
      console.log(`Ortho service added: ${id}`);
    }
  });
};

export const addMapServices = (map) => {
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

export const updateLayerListInScale = (mapScale) => {
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
      store.dispatch(updateLayerInscale({ ulid: mapLayer.ulid, inScale }));
    }
  });
};

export const buildLayerList = () => {};
