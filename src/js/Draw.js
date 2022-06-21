import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import store from "../store/store";

export const openDrawTool = () => {
  const { view } = store.getState().app;
  const layer = view.map.findLayerById("CosGraphicsLayer");

  let sketchVM = new SketchViewModel({
    layer,
    view,
  });

  sketchVM.create("polygon", { mode: "click" });
};
