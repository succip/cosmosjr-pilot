import settings from "../config/Settings";
import MapThemes from "../config/MapThemes";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import store from "../store/store";
import LayerTree from "../config/LayerTree";
import { customAlphabet } from "nanoid";
import {
  addLayer,
  addMapLayer,
  setLayerVisible,
  updateLayerInscale,
} from "../store/actions/layerActions";

const onAddServiceLayer = (layer) => {
  layer.allSublayers.items.forEach((sublayer) => {
    if (layer.id === "BaseMap") {
      sublayer.legendEnabled = false;
    } else {
      sublayer.legendEnabled = !settings.legendDisabledLayers.includes(sublayer.title);
    }
    if (layer.id === "BaseMap") sublayer.legendEnabled = false;
    const nanoid = customAlphabet("1234567890abcdef", 6);
    const newLayer = {
      layer: sublayer,
      inScale: false,
      title: sublayer.title,
      ulid: nanoid(),
    };
    store.dispatch(addLayer(newLayer));
    checkMapLayers(LayerTree, newLayer);
  });
};

export const addOrthoServices = (map) => {
  settings.mapServices.forEach((mapService) => {
    const { id, url, baseMapService } = mapService;
    if (baseMapService) {
      const serviceLayer = new MapImageLayer({
        id,
        url,
        visible: true,
      });
      serviceLayer.when(onAddServiceLayer);

      map.add(serviceLayer);
    }
  });
};

export const addMapServices = (map) => {
  settings.mapServices.forEach((mapService) => {
    const { id, url, baseMapService } = mapService;
    if (!baseMapService) {
      const serviceLayer = new MapImageLayer({
        id,
        url,
        visible: true,
      });
      serviceLayer.when(onAddServiceLayer);

      map.add(serviceLayer);
    }
  });
};

export const setMapThemeLayers = (mapThemeName) => {
  clearVisibleMapLayers();
  const { layers } = store.getState();
  const { themeLayers } = MapThemes.find((mapTheme) => mapTheme.themeTitle === mapThemeName);

  themeLayers.forEach((themeLayer) => {
    const mapLayer = layers.mapLayers.find((mapLayer) => mapLayer.title === themeLayer.title);
    if (mapLayer) {
      store.dispatch(setLayerVisible(mapLayer, true));
    }
  });
};

export const updateLayerListInScale = (mapScale) => {
  const { layers } = store.getState();
  layers.mapLayers.forEach((mapLayer) => {
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

export const checkMapLayers = (layerStore = LayerTree, queryLayer = {}) => {
  Object.keys(layerStore).forEach((key) => {
    if (typeof layerStore[key] === "object") {
      if (layerStore[key].leaf) {
        if (queryLayer.title === layerStore[key].name) store.dispatch(addMapLayer(queryLayer));
      }
      checkMapLayers(layerStore[key], queryLayer);
    }
  });
};

export const getMapLayerByTitle = (mapLayerTitle) => {
  const { layers } = store.getState();
  const { mapLayers } = layers;
  return mapLayers.find((mapLayer) => mapLayer.title === mapLayerTitle);
};

export const clearVisibleMapLayers = () => {
  const { layers } = store.getState();
  layers.mapLayers.forEach((mapLayer) => store.dispatch(setLayerVisible(mapLayer, false)));
};
