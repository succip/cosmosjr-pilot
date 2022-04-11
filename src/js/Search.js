import * as find from "@arcgis/core/rest/find";
import FindParameters from "@arcgis/core/rest/support/FindParameters";
import store from "../store/store";
import { getMapLayerByTitle } from "./Layers";

export const findFeature = async ({ LayerName, FieldName, FieldValue }) => {
  const { layers, app } = store.getState();
  const outSpatialReference = app.view.spatialReference;
  let layer;

  if (LayerName === "Address Search") {
    layer = layers.addressLayer;
  } else {
    layer = getMapLayerByTitle(LayerName);
  }
  let findParameters = new FindParameters({
    returnGeometry: true,
    contains: false,
    layerIds: [layer.id],
    searchFields: [FieldName],
    searchText: FieldValue,
    outSpatialReference,
  });

  const { results } = await find.find(layer.serviceUrl, findParameters);
  zoomToFeature(results[0].feature);
};

const zoomToFeature = (feature) => {
  const { app } = store.getState();
  app.view.goTo(feature.geometry);
};
