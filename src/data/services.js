import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export const statesService = new FeatureLayer({
  url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0",
});
