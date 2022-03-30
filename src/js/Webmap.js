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
            [510647.0676250007, 5446488.776812499],
            [510665.347625, 5446489.076625001],
            [510665.9472500004, 5446452.516687499],
            [510647.66725000006, 5446452.216875],
            [510647.0676250007, 5446488.776812499],
          ],
        ],
        type: "polygon",
      },
      symbol: null,
      attributes: {
        LOT_TYPE2: "Standard Lot",
        MSLINK: 3337,
        LOT_NO: "262",
        REM_FLAG: "N",
        BLOCK_NO: null,
        OWNER_TYPE: "Private",
        IN_PLAN: "55288",
        CANC_PLAN_NO: null,
        PLAN_TYPE: "Subdivision",
        PLAN_YR: 1978,
        PID: "004-119-843",
        DESCRIPTION: null,
        NAME: null,
        OBJECTID: 81297,
        PLANIMAGEID: 16120,
        AMANDARSN: 81208,
        SHAPE: "Polygon",
        SHAPE_Area: 668.4954325872233,
      },
      popupTemplate: null,
    },
    displayValue: 3337,
    attributes: [
      {
        field: "LOT TYPE2",
        value: "Standard Lot",
      },
      {
        field: "MSLINK",
        value: "3337.0000",
      },
      {
        field: "LOT NO",
        value: "262",
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
        value: "55288",
      },
      {
        field: "PLAN TYPE",
        value: "Subdivision",
      },
      {
        field: "PLAN YR",
        value: "1978.0000",
      },
      {
        field: "PID",
        value: "004-119-843",
      },
      {
        field: "PLANIMAGEID",
        value: "16120.000",
      },
      {
        field: "AMANDARSN",
        value: "81208.000",
      },
      {
        field: "AREA (m²)",
        value: "668.49543",
      },
    ],
    isLotLayer: true,
  },
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
            [510628.7876250002, 5446488.477],
            [510647.0676250007, 5446488.776812499],
            [510647.66725000006, 5446452.216875],
            [510642.59724999935, 5446452.136937502],
            [510628.5872500003, 5446451.907062501],
            [510628.7876250002, 5446488.477],
          ],
        ],
        type: "polygon",
      },
      symbol: null,
      attributes: {
        LOT_TYPE2: "Standard Lot",
        MSLINK: 3338,
        LOT_NO: "263",
        REM_FLAG: "N",
        BLOCK_NO: null,
        OWNER_TYPE: "Private",
        IN_PLAN: "55288",
        CANC_PLAN_NO: null,
        PLAN_TYPE: "Subdivision",
        PLAN_YR: 1978,
        PID: "003-131-092",
        DESCRIPTION: null,
        NAME: null,
        OBJECTID: 85782,
        PLANIMAGEID: 16120,
        AMANDARSN: 81209,
        SHAPE: "Polygon",
        SHAPE_Area: 683.071109744242,
      },
      popupTemplate: null,
    },
    displayValue: 3338,
    attributes: [
      {
        field: "LOT TYPE2",
        value: "Standard Lot",
      },
      {
        field: "MSLINK",
        value: "3338.0000",
      },
      {
        field: "LOT NO",
        value: "263",
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
        value: "55288",
      },
      {
        field: "PLAN TYPE",
        value: "Subdivision",
      },
      {
        field: "PLAN YR",
        value: "1978.0000",
      },
      {
        field: "PID",
        value: "003-131-092",
      },
      {
        field: "PLANIMAGEID",
        value: "16120.000",
      },
      {
        field: "AMANDARSN",
        value: "81209.000",
      },
      {
        field: "AREA (m²)",
        value: "683.07111",
      },
    ],
    isLotLayer: true,
  },
  {
    displayFieldName: "NAME",
    layerName: "Building",
    feature: {
      geometry: {
        spatialReference: {
          latestWkid: 26910,
          wkid: 26910,
        },
        rings: [
          [
            [510652.1843749999, 5446455.834921874],
            [510648.59632812487, 5446455.813984375],
            [510648.56632812525, 5446461.057968751],
            [510652.1534375004, 5446461.078906249],
            [510652.1843749999, 5446455.834921874],
          ],
        ],
        type: "polygon",
      },
      symbol: null,
      attributes: {
        OBJECTID: 269063,
        POINT_OF_INTEREST: null,
        FACILITY_TYPE: null,
        FACILITY_SUBTYPE: null,
        CIVIC_FACILITY: "No",
        SHAPE: "Polygon",
        FACILITYID: "1001237667",
        WEBLINK: null,
        LOCATION: null,
        WARRANTYDATE: null,
        USE: null,
        FLOOR_LEVELS: null,
        PARKING_LEVELS: null,
        SQ_FOOTAGE: null,
        ACCESSIBILITY: null,
        ACCESSIBILITY_DETAILS: null,
        COMMENTS: null,
        STATUS: "In Service",
        STATUS_DATE: null,
        MAINTENANCE_RESPONSIBILITY: null,
        OPERATIONAL_RESPONSIBILITY: null,
        NO_OF_PARKING_SPACES: null,
        LEGAL_LOT_DESCRIPTION: null,
        ARCHITECT: null,
        GENERAL_CONTRACTOR: null,
        MECHANICAL_CONTRACTOR: null,
        ELECTRICAL_CONTRACTOR: null,
        HANDICAPPED_ACCESSIBLE: null,
        BCH_METER_NUMBER: null,
        FACILITY_SERVICE_CLASS: null,
        CARETAKER_NAME: null,
        MODEL: null,
        OPERATING_LOCATION_TYPE: null,
        DESCRIPTION: null,
        OPERATING_HOURS: null,
        INSERVICE_DATE: null,
        CONTACT_PERSON_PHONE_NO: null,
        BARCODE: null,
        BUILDING_INSERVICE_COST: null,
        VENDOR: null,
        BUILDING_ADDITION: null,
        YRS_LIFE_EXPECTANCY: null,
        PARK_OWNERSHIP: null,
        WARRANTY_PROVIDER: null,
        OPERATING_LOCATION: null,
        SERIAL_NO: null,
        MAKE: null,
        CONTACT_PERSON: null,
        GROUND_ELEVATION: 72.23,
        BUILDING_HEIGHT: 2.77,
        SHAPE_Length: 17.663424263280582,
        SHAPE_Area: 18.81384157066541,
      },
      popupTemplate: null,
    },
    displayValue: 269063,
    attributes: [
      {
        Field: "CIVIC FACILITY",
        Value: "No",
      },
      {
        Field: "FACILITYID",
        Value: "1001237667",
      },
      {
        Field: "STATUS",
        Value: "In Service",
      },
      {
        Field: "GROUND ELEVATION",
        Value: "72.230000",
      },
      {
        Field: "BUILDING HEIGHT",
        Value: "2.7700000",
      },
      {
        Field: "LENGTH (m)",
        Value: "17.663424",
      },
      {
        Field: "AREA (m²)",
        Value: "18.813842",
      },
    ],
    isLotLayer: false,
  },
  {
    displayFieldName: "NAME",
    layerName: "Building",
    feature: {
      geometry: {
        spatialReference: {
          latestWkid: 26910,
          wkid: 26910,
        },
        rings: [
          [
            [510646.79351562564, 5446476.824921874],
            [510647.0214843755, 5446466.343984375],
            [510643.5314062507, 5446466.26796875],
            [510643.45242187544, 5446469.863906249],
            [510640.44351562404, 5446469.7990625],
            [510640.5324218751, 5446465.7090625],
            [510637.27953124925, 5446465.637968751],
            [510637.35945312586, 5446461.955937499],
            [510632.414453125, 5446461.849140625],
            [510632.33343749976, 5446465.573125],
            [510630.93539062527, 5446465.542109376],
            [510630.7665625008, 5446473.341093751],
            [510630.14460937475, 5446473.328125],
            [510629.94156249985, 5446482.6860937495],
            [510639.06765624933, 5446482.883984376],
            [510639.1885937491, 5446477.3510156255],
            [510644.0296093751, 5446477.456953125],
            [510644.04460937553, 5446476.765000001],
            [510646.79351562564, 5446476.824921874],
          ],
        ],
        type: "polygon",
      },
      symbol: null,
      attributes: {
        OBJECTID: 269064,
        POINT_OF_INTEREST: null,
        FACILITY_TYPE: null,
        FACILITY_SUBTYPE: null,
        CIVIC_FACILITY: "No",
        SHAPE: "Polygon",
        FACILITYID: "1001237668",
        WEBLINK: null,
        LOCATION: null,
        WARRANTYDATE: null,
        USE: null,
        FLOOR_LEVELS: null,
        PARKING_LEVELS: null,
        SQ_FOOTAGE: null,
        ACCESSIBILITY: null,
        ACCESSIBILITY_DETAILS: null,
        COMMENTS: null,
        STATUS: "In Service",
        STATUS_DATE: null,
        MAINTENANCE_RESPONSIBILITY: null,
        OPERATIONAL_RESPONSIBILITY: null,
        NO_OF_PARKING_SPACES: null,
        LEGAL_LOT_DESCRIPTION: null,
        ARCHITECT: null,
        GENERAL_CONTRACTOR: null,
        MECHANICAL_CONTRACTOR: null,
        ELECTRICAL_CONTRACTOR: null,
        HANDICAPPED_ACCESSIBLE: null,
        BCH_METER_NUMBER: null,
        FACILITY_SERVICE_CLASS: null,
        CARETAKER_NAME: null,
        MODEL: null,
        OPERATING_LOCATION_TYPE: null,
        DESCRIPTION: null,
        OPERATING_HOURS: null,
        INSERVICE_DATE: null,
        CONTACT_PERSON_PHONE_NO: null,
        BARCODE: null,
        BUILDING_INSERVICE_COST: null,
        VENDOR: null,
        BUILDING_ADDITION: null,
        YRS_LIFE_EXPECTANCY: null,
        PARK_OWNERSHIP: null,
        WARRANTY_PROVIDER: null,
        OPERATING_LOCATION: null,
        SERIAL_NO: null,
        MAKE: null,
        CONTACT_PERSON: null,
        GROUND_ELEVATION: 72.54,
        BUILDING_HEIGHT: 9.46,
        SHAPE_Length: 82.40712374290689,
        SHAPE_Area: 242.97740195371384,
      },
      popupTemplate: null,
    },
    displayValue: 269064,
    attributes: [
      {
        Field: "CIVIC FACILITY",
        Value: "No",
      },
      {
        Field: "FACILITYID",
        Value: "1001237668",
      },
      {
        Field: "STATUS",
        Value: "In Service",
      },
      {
        Field: "GROUND ELEVATION",
        Value: "72.540000",
      },
      {
        Field: "BUILDING HEIGHT",
        Value: "9.4600000",
      },
      {
        Field: "LENGTH (m)",
        Value: "82.407124",
      },
      {
        Field: "AREA (m²)",
        Value: "242.97740",
      },
    ],
    isLotLayer: false,
  },
];

view.when(() => {
  setMapThemeLayers("City");
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
