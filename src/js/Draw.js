import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { getAllLayerByTitle } from "../js/Layers";
import { snappingLayers, pointSymbol, polylineSymbol, polygonSymbol } from "../config/DrawConfig";
import store from "../store/store";
import { setActiveTool, setSketchVM } from "../store/actions/appActions";

const getSnappingLayers = () => {
  let snapLayers = [];
  snappingLayers.forEach((title) => {
    const { layer } = getAllLayerByTitle(title);
    const featureLayer = new FeatureLayer({ url: layer.url });
    snapLayers.push({ layer: featureLayer });
  });

  return snapLayers;
};

export const initializeSketchVM = (view) => {
  const layer = view.map.findLayerById("draw");

  let sketchVM = new SketchViewModel({
    layer,
    view,
    pointSymbol,
    polylineSymbol,
    polygonSymbol,
    defaultCreateOptions: {},
    defaultUpdateOptions: {
      enableRotation: false,
      enableScaling: false,
    },
    snappingOptions: {
      enabled: false,
      distance: 5,
      selfEnabled: false,
      featureEnabled: true,
      featureSources: getSnappingLayers(),
    },
  });

  sketchVM.on("create", ({ state }) => {
    if (state === "start") store.dispatch(setActiveTool("draw"));
    if (state === "complete") store.dispatch(setActiveTool("identify"));
  });

  store.dispatch(setSketchVM(sketchVM));
};
