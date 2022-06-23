import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import { snappingLayers } from "../config/DrawConfig";
import store from "../store/store";

export const openDrawTool = () => {
  const { view } = store.getState().app;
  const layer = view.map.findLayerById("draw");

  let sketchVM = new SketchViewModel({
    layer,
    view,
    updateOnGraphicClick: false,
    defaultCreateOptions: {},
    snappingOptions: {
      enabled: true,
      distance: 5,
      selfEnabled: false,
      featureEnabled: true,
    },
  });

  sketchVM.create("polygon", { mode: "freehand" });
};

const setSnappingLayers = () => {};
