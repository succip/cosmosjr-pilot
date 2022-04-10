import * as find from "@arcgis/core/rest/find";
import FindParameters from "@arcgis/core/rest/support/FindParameters";
import { getMapLayerByTitle } from "./Layers";
import store from "../store/store";

export const findFeature = ({ ListValue, LayerName }) => {
  const { app } = store.getState();
  const outSpatialReference = app.view.spatialReference;

  const layer = getAllLayerByMapTitle(LayerName);
  console.log("Layer Found: ", layer);
};

const getAllLayerByMapTitle = (allLayerTitle) => {
  const { layers } = store.getState();
  const { allLayers } = layers;
  return allLayers.find((allLayer) => allLayer.title === allLayerTitle);
};
