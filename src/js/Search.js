import * as find from "@arcgis/core/rest/find";
import FindParameters from "@arcgis/core/rest/support/FindParameters";
import store from "../store/store";
import { getMapLayerByTitle } from "./Layers";
import { highlightFeature, parseResult } from "./Identify";
import { setIdentifyResults } from "../store/actions/appActions";
import { setLayerVisible } from "../store/actions/layerActions";

export const findFeature = async ({ LayerName, FieldName, FieldValue }) => {
  const { layers, app } = store.getState();
  const outSpatialReference = app.view.spatialReference;
  let mapLayer, addressRequested;

  if (LayerName === "Address Search") {
    mapLayer = layers.addressLayer;
  } else if (LayerName === "Intersection Search") {
    mapLayer = layers.intersectionLayer;
  } else {
    mapLayer = getMapLayerByTitle(LayerName);
  }

  let findParameters = new FindParameters({
    returnGeometry: true,
    contains: false,
    layerIds: [mapLayer.id],
    searchFields: [FieldName],
    searchText: FieldValue,
    outSpatialReference,
  });

  const { results } = await find.find(mapLayer.serviceUrl, findParameters);

  if (results.length) {
    showResults(results);
    if (!mapLayer.layer.visible) store.dispatch(setLayerVisible(mapLayer, true));
  }
};

const getAddressLot = async (lotLink) => {
  const { layers, app } = store.getState();
  const outSpatialReference = app.view.spatialReference;

  const lotsLayer = layers.lotsLayer;

  const findParameters = new FindParameters({
    returnGeometry: true,
    contains: false,
    layerIds: [lotsLayer.id],
    searchFields: ["MSLINK"],
    searchText: lotLink,
    outSpatialReference,
  });

  const { results } = await find.find(lotsLayer.serviceUrl, findParameters);
  return parseResult(results[0]);
};

export const findLayer = ({ LayerName }) => {
  const layer = getMapLayerByTitle(LayerName);
  console.log("Layer title found: ", layer.title);
};

const zoomToFeature = (feature) => {
  const { view } = store.getState().app;
  view.goTo(feature.geometry);
  if (feature.geometry.type === "point") view.scale = 550;
};

const showResults = async (results) => {
  const parsedResult = parseResult(results[0]);
  console.log("parsedAddress", parsedResult);

  if (parsedResult.layerName === "Address Search") {
    const { Value: lotLink } = parsedResult.attributes.find(
      (attribute) => attribute.Field === "LOT LINK"
    );
    const addressLot = await getAddressLot(lotLink);
    store.dispatch(setIdentifyResults([{ ...addressLot, open: true }]));
  } else {
    store.dispatch(setIdentifyResults([parsedResult]));
  }
  zoomToFeature(results[0].feature);
  highlightFeature(results[0].feature);
};
