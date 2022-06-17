import settings, { defaultOrthoImage } from "../config/Settings";
import { basemapModeLayers, orthoModeLayers } from "../config/LayerConfig";
import MapThemes from "../config/MapThemes";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import { whenTrue, whenFalse } from "@arcgis/core/core/watchUtils";
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
  for (const sublayer of layer.allSublayers.items) {
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
  }
};

const checkMapLayers = (layerStore = LayerTree, queryLayer = {}) => {
  Object.keys(layerStore).forEach((key) => {
    if (typeof layerStore[key] === "object") {
      if (layerStore[key].leaf) {
        if (queryLayer.title === layerStore[key].name) {
          store.dispatch(addMapLayer(queryLayer));
          if (layerStore[key].customGroup) {
            store.dispatch(addLayerToGroup(queryLayer, layerStore[key].customGroup));
          }
        }
      }
      checkMapLayers(layerStore[key], queryLayer);
    }
  });
};

const filterLayer = (layer) => {
  if (layer.title === "Address Search")
    store.dispatch(addCustomLayer({ layer, title: "addressLayer" }));
  if (layer.title === "Intersection Search")
    store.dispatch(addCustomLayer({ layer, title: "intersectionLayer" }));

  if (layer.title === "Lots") store.dispatch(addCustomLayer({ layer, title: "lotsLayer" }));
};

const isMultipleOrthos = () => {
  const { orthoLayers } = store.getState().layers;
  return orthoLayers.some(({ layer }) => layer.visible);
};

export const watchOrthoVisibility = () => {
  const { orthoLayers } = store.getState().layers;

  orthoLayers.forEach(({ layer }) => {
    whenTrue(layer, "visible", (e) => {
      if (store.getState().app.mapViewMode === "basemap") {
        console.log("true:", layer.title);
        store.dispatch(setMapViewMode("ortho"));
        activateOrthoMode();
      }
    });

    whenFalse(layer, "visible", (e) => {
      if (!isMultipleOrthos()) {
        console.log("no other orthos on");
        store.dispatch(setMapViewMode("basemap"));
        activateBasemapMode();
      }
    });
  });
};

export const activateBasemapMode = () => {
  console.log("basemap called");
  const { orthoLayers } = store.getState().layers;

  basemapModeLayers.forEach(({ title, visible }) => {
    const mapLayer = getMapLayerByTitle(title);
    store.dispatch(setLayerVisible(mapLayer, visible));
  });

  orthoLayers.forEach((orthoLayer) => store.dispatch(setLayerVisible(orthoLayer, false)));
};

export const activateOrthoMode = () => {
  console.log("ortho called");

  orthoModeLayers.forEach(({ title, visible }) => {
    const mapLayer = getMapLayerByTitle(title);
    store.dispatch(setLayerVisible(mapLayer, visible));
  });

  if (isMultipleOrthos()) activateDefaultOrthoLayer();
};

export const activateDefaultOrthoLayer = () => {
  const defaultOrthoLayer = getMapLayerByTitle(defaultOrthoImage);
  store.dispatch(setLayerVisible(defaultOrthoLayer, true));
};

export const addAllServices = async (map) => {
  for (const mapService of settings.mapServices) {
    const { id, url } = mapService;

    const serviceLayer = new MapImageLayer({
      id,
      url,
      visible: true,
    });
    map.add(serviceLayer);
    await serviceLayer.when(onAddServiceLayer);
  }
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
