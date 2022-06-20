export const defaultOrthoImage = "Aerial Photo April 2021";

export const legendDisabledLayers = [
  "Building Shadow",
  "Address Search",
  "Road Names",
  "Intersection Search",
];

export const basemapModeLayers = [
  { title: "Lots", visible: true },
  { title: "Buildings", visible: true },
  { title: "Park Specimen Trees", visible: true },
  { title: "Lots (Outline)", visible: false },
];

export const orthoModeLayers = [
  { title: "Lots", visible: false },
  { title: "Buildings", visible: false },
  { title: "Park Specimen Trees", visible: false },
  { title: "Lots (Outline)", visible: true },
];

export const mapServices = [
  {
    id: "BaseMap",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Base_Map/MapServer/",
    type: "Dynamic",
    baseMapService: true,
  },
  {
    id: "AerialImages",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/AerialImages/MapServer/",
    type: "Dynamic",
    baseMapService: true,
  },
  {
    id: "Lots",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Lots/MapServer/",
    VisibleLayers: "",
    type: "Dynamic",
    baseMapService: true,
  },
  {
    id: "Buildings",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Public/Buildings/MapServer/",
    LegendHideLayers: "Building Shadow",
    type: "Dynamic",
  },
  {
    id: "SecondaryPlans",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Public/SecondaryPlans/MapServer/",
    LegendHideLayers: "",
    type: "Dynamic",
  },
  {
    id: "Planning",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Public/Planning/MapServer/",
    LegendHideLayers: "",
    type: "Dynamic",
  },
  {
    id: "Elevation",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Public/Elevation/MapServer/",
    LegendHideLayers: "",
    type: "Dynamic",
  },
  {
    id: "Miscellaneous",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Public/Miscellaneous/MapServer/",
    VisibleLayers: "",
    LegendHideLayers: "",
    type: "Dynamic",
  },
  {
    id: "Legal",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Public/Legal/MapServer/",
    LegendHideLayers: "Address Search",
    type: "Dynamic",
  },
  {
    id: "Transportation",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Public/Transportation/MapServer/",
    LegendHideLayers: "Road Names,Intersection Search",
    type: "Dynamic",
  },
  {
    id: "Parks",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Public/Parks/MapServer/",
    LegendHideLayers: "",
    type: "Dynamic",
  },
  {
    id: "Infrastructure",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Public/Infrastructure/MapServer/",
    LegendHideLayers: "",
    type: "Dynamic",
  },
  {
    id: "Sanitary",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Public/Sanitary/MapServer/",
    LegendHideLayers: "",
    type: "Dynamic",
  },
  {
    id: "Drainage",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Public/Drainage/MapServer/",
    LegendHideLayers: "",
    type: "Dynamic",
  },
  {
    id: "Water",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Public/Water/MapServer/",
    LegendHideLayers: "",
    type: "Dynamic",
  },
  {
    id: "DistrictEnergy",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Public/DistrictEnergy/MapServer/",
    LegendHideLayers: "",
    type: "Dynamic",
  },
  {
    id: "Safety",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Public/Safety/MapServer/",
    LegendHideLayers: "",
    type: "Dynamic",
  },
  {
    id: "Annotation_Dimensions",
    url: "https://gisservices.surrey.ca/arcgis/rest/services/Annotation_Dimensions/MapServer/",
    type: "Dynamic",
  },
];
