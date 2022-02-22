import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import settings from "../config/Settings";
import store from "../store/store";
import { addLayer } from "../store/actions/layerActions";

export const map = new ArcGISMap();

export let view = new MapView({ map, extent: settings.startingExtent });

view.on("layerview-create", ({ layer }) => {
  layer.allSublayers.forEach((sublayer) => {
    store.dispatch(addLayer(sublayer));
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
  const allSublayers = map.layers.items[0].allSublayers;
  allSublayers.forEach((sublayer) => {
    console.log(sublayer);
  });
});
export const initialize = (container) => {
  view.container = container;
  return view;
};
