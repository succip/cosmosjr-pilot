import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { getAllLayerByTitle } from "../js/Layers";
import { snappingLayers } from "../config/DrawConfig";
import store from "../store/store";
import { setSketchVM } from "../store/actions/appActions";

const getSnappingLayers = () => {
  let snapLayers = [];
  snappingLayers.forEach(({ title }) => {
    const { layer } = getAllLayerByTitle(title);
    const featureLayer = new FeatureLayer({ url: layer.url });
    snapLayers.push({ layer: featureLayer });
  });

  return snapLayers;
};

export const openDrawTool = ({ shape, snappingEnabled }) => {
  const { view } = store.getState().app;
  const layer = view.map.findLayerById("draw");

  let sketchVM = new SketchViewModel({
    layer,
    view,
    updateOnGraphicClick: false,
    defaultCreateOptions: {},
    snappingOptions: {
      enabled: snappingEnabled,
      distance: 5,
      selfEnabled: false,
      featureEnabled: true,
      featureSources: getSnappingLayers(),
    },
  });

  sketchVM.create(shape, { mode: "click" });
};

export const initializeSketchVM = ({ shape, snappingEnabled }) => {
  const { view } = store.getState().app;
  const layer = view.map.findLayerById("draw");

  let sketchVM = new SketchViewModel({
    layer,
    view,
    updateOnGraphicClick: false,
    defaultCreateOptions: {},
    snappingOptions: {
      enabled: snappingEnabled,
      distance: 5,
      selfEnabled: false,
      featureEnabled: true,
      featureSources: getSnappingLayers(),
    },
  });

  store.dispatch(setSketchVM());
};
