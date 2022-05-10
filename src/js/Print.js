import store from "../store/store";
const printDpi = 192;
const printUrl =
  "https://gisservices.surrey.ca/arcgis/rest/services/PrintWebMap/GPServer/Export%20Web%20Map/execute?";

export const exportMap = () => {
  const { view } = store.getState().app;
  const { spatialReference, extent } = view;
  const mapScale = view.scale.toFixed(3);
};
