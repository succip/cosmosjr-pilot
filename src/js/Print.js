import store from "../store/store";
const axios = require("axios");
const printDpi = 192;
const printUrl =
  "https://gisservices.surrey.ca/arcgis/rest/services/PrintWebMap/GPServer/Export%20Web%20Map/execute?";

export const exportMap = () => {
  const { view } = store.getState().app;
  const { mapLayers } = store.getState().layers;
  const { spatialReference, extent, scale } = view;
  const { xmin, xmax, ymin, ymax } = extent;
  const mapScale = view.scale.toFixed(3);

  console.log("mapLayers", mapLayers);

  const exportOptions = {
    mapOptions: {
      showAttribution: true,
      extent: {
        xmin,
        xmax,
        ymin,
        ymax,
        spatialReference: {
          wkid: spatialReference.wkid,
        },
      },
      scale,
    },
  };

  console.log("object", exportOptions);
  const jsoned = JSON.stringify(exportOptions);
  console.log("jsonObject", jsoned);
};
