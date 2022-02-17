import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export const statesService = new FeatureLayer({
  url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2",
  name: "States",
});
export const highwayService = new FeatureLayer({
  url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/1",
  name: "highways",
});
export const countyService = new FeatureLayer({
  url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/3",
  name: "counties",
});
