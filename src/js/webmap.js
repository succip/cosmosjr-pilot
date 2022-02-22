import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import settings from "../config/Settings";
import store from "../store/store";
import { addLayer } from "../store/actions/layerActions";
import { useSelector } from "react-redux";

export const map = new ArcGISMap();

export let view = new MapView({ map, extent: settings.startingExtent });

view.on("layerview-create", ({ layer }) => {
  layer.allSublayers.forEach((sublayer) => {
    const { minScale, maxScale } = sublayer;
    store.dispatch(
      addLayer({
        layer: sublayer,
        inScale: false,
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
  console.log(view.scale);
  const { layers } = store.getState();
  console.log(view.scale);
  layers.allLayers.forEach((mapLayer) => {
    console.log(mapLayer.layer.title, mapLayer.inScale);
  });
});

const onViewStationary = () => {
  const mapScale = view.scale;
  const { layers } = store.getState();
  layers.allLayers.forEach((mapLayer) => {
    mapLayer.inScale = mapScale < mapLayer.maxScale && mapScale > mapLayer.minScale;
  });
};

view.watch("stationary", onViewStationary);

export const initialize = (container) => {
  view.container = container;
  return view;
};
