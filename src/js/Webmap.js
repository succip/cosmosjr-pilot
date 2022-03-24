import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import settings from "../config/Settings";
import {
  addOrthoServices,
  addMapServices,
  updateLayerListInScale,
  setMapThemeLayers,
} from "./Layers";
import { identifyMapPoint } from "./Identify";
import store from "../store/store";
import { setActivePanel, setIdentifyResults } from "../store/actions/appActions";

const onViewStationary = () => {
  updateLayerListInScale(view.scale);
};

const csGraphicsLayer = new GraphicsLayer({
  id: "CosGraphicsLayer",
});

const map = new ArcGISMap();

export let view = new MapView({ map, extent: settings.startingExtent });

addOrthoServices(map);
addMapServices(map);
map.add(csGraphicsLayer);

view.watch("stationary", onViewStationary);

const testObject = [
  {
    displayFieldName: "MSLINK",
    layerName: "Lots",
    feature: {
      geometry: {
        spatialReference: {
          latestWkid: 26910,
          wkid: 26910,
        },
        rings: [
          [
            [510845.48531250044, 5446226.375250001],
            [510917.8154999987, 5446227.804625001],
            [510917.9054375001, 5446209.5446875],
            [510907.5653750006, 5446209.34475],
            [510886.8953125003, 5446208.934937499],
            [510866.2252500008, 5446208.525125001],
            [510845.5451874996, 5446208.115312501],
            [510845.48531250044, 5446226.375250001],
          ],
        ],
        type: "polygon",
      },
      symbol: null,
      attributes: {
        LOT_TYPE2: "Standard Lot",
        MSLINK: 3963,
        LOT_NO: "8",
        REM_FLAG: "N",
        BLOCK_NO: null,
        OWNER_TYPE: "Private",
        IN_PLAN: "14741",
        CANC_PLAN_NO: null,
        PLAN_TYPE: "Subdivision",
        PLAN_YR: 1954,
        PID: "004-439-147",
        DESCRIPTION: null,
        NAME: null,
        OBJECTID: 79995,
        PLANIMAGEID: 12453,
        AMANDARSN: 79336,
        SHAPE: "Polygon",
        SHAPE_Area: 1320.9741904072255,
      },
      popupTemplate: null,
    },
    displayValue: 3963,
    attributes: [
      {
        field: "LOT TYPE2",
        value: "Standard Lot",
      },
      {
        field: "MSLINK",
        value: "3963.0000",
      },
      {
        field: "LOT NO",
        value: "8",
      },
      {
        field: "REM FLAG",
        value: "N",
      },
      {
        field: "OWNER TYPE",
        value: "Private",
      },
      {
        field: "IN PLAN",
        value: "14741",
      },
      {
        field: "PLAN TYPE",
        value: "Subdivision",
      },
      {
        field: "PLAN YR",
        value: "1954.0000",
      },
      {
        field: "PID",
        value: "004-439-147",
      },
      {
        field: "PLANIMAGEID",
        value: "12453.000",
      },
      {
        field: "AMANDARSN",
        value: "79336.000",
      },
      {
        field: "AREA (m²)",
        value: "1320.9742",
      },
    ],
    isLotLayer: true,
  },
];

view.when(() => {
  setMapThemeLayers("City Map");
  store.dispatch(setIdentifyResults(testObject));
  store.dispatch(setActivePanel(3));
});

view.on("click", ({ mapPoint }) => {
  identifyMapPoint({ mapPoint, view });
});

export const initialize = (container) => {
  view.container = container;
  return view;
};
