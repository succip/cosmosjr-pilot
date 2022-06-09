import settings from "../config/Settings";
import MapThemes from "../config/MapThemes";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import { watch, whenTrue, whenFalse } from "@arcgis/core/core/watchUtils";
import store from "../store/store";
import LayerTree from "../config/LayerTree";
import { generateId } from "./Utilities";
import {
  addCustomLayer,
  addLayerToGroup,
  addLayer,
  addMapLayer,
  setLayerVisible,
  updateLayerInscale,
} from "../store/actions/layerActions";
import { setMapViewMode } from "../store/actions/appActions";

const onAddServiceLayer = (layer) => {
  layer.allSublayers.items.forEach((sublayer) => {
    if (layer.id === "BaseMap") {
      sublayer.legendEnabled = false;
    } else {
      sublayer.legendEnabled = !settings.legendDisabledLayers.includes(sublayer.title);
    }
    if (layer.id === "BaseMap") sublayer.legendEnabled = false;
    const newLayer = {
      layer: sublayer,
      inScale: false,
      title: sublayer.title,
      id: sublayer.id,
      serviceUrl: layer.url,
      ulid: generateId(),
    };

    filterLayer(newLayer);

    store.dispatch(addLayer(newLayer));
    checkMapLayers(LayerTree, newLayer);
  });
};

const filterLayer = (layer) => {
  if (layer.title === "Address Search")
    store.dispatch(addCustomLayer({ layer, title: "addressLayer" }));
  if (layer.title === "Intersection Search")
    store.dispatch(addCustomLayer({ layer, title: "intersectionLayer" }));
  if (layer.title === "Lots") store.dispatch(addCustomLayer({ layer, title: "lotsLayer" }));
  if (layer.title.includes("Aerial") || layer.title.includes("Satellite")) {
    watchLayerVisibility(layer);
    store.dispatch(addLayerToGroup(layer, "orthoLayers"));
  }
};

const watchLayerVisibility = ({ layer, title }) => {
  whenTrue(layer, "visible", (e) => {
    store.dispatch(setMapViewMode("ortho"));
  });

  whenFalse(layer, "visible", (e) => {
    checkOrthoLayersVisibility();
  });
};

const checkOrthoLayersVisibility = () => {
  const { orthoLayers } = store.getState().layers;
  orthoLayers.forEach((orthoLayer) => {
    if (orthoLayer.layer.visible) {
      console.log(`One layer found visible: ${orthoLayer.title}`);
    }
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
  const { mapLayers } = store.getState().layers;
  const { themeLayers } = MapThemes.find((mapTheme) => mapTheme.themeTitle === mapThemeName);

  themeLayers.forEach((themeLayer) => {
    const mapLayer = mapLayers.find((mapLayer) => mapLayer.title === themeLayer.title);
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
  const { mapLayers } = store.getState().layers;
  return mapLayers.find((mapLayer) => mapLayer.title === mapLayerTitle);
};

export const getAllLayerByTitle = (allLayerTitle) => {
  const { allLayers } = store.getState().layers;
  return allLayers.find((allLayer) => allLayer.title === allLayerTitle);
};

export const clearVisibleMapLayers = () => {
  const { mapLayers } = store.getState().layers;
  mapLayers.forEach((mapLayer) => store.dispatch(setLayerVisible(mapLayer, false)));
};
