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

view.when(() => {
  setMapThemeLayers("City Map");
});

view.on("click", ({ mapPoint }) => {
  identifyMapPoint({ mapPoint, view });
});

const makeTestResults = (results) => {
  store.dispatch(setIdentifyResults(results));
  store.dispatch(setActivePanel(null));
  store.dispatch(setActivePanel(3));
};

const testObject = {
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
          [510909.8834375008, 5448645.831328126],
          [510909.46023437515, 5448632.265],
          [510905.75117187435, 5448632.381171875],
          [510905.9423437493, 5448638.481249999],
          [510903.2313281249, 5448638.566328125],
          [510903.298359375, 5448640.704375001],
          [510894.2442968741, 5448640.896484375],
          [510894.4234375003, 5448650.487656251],
          [510900.90343750024, 5448650.3794531245],
          [510900.8944531256, 5448650.0825781245],
          [510907.1864843758, 5448649.88640625],
          [510907.06249999965, 5448645.919453125],
          [510909.8834375008, 5448645.831328126],
        ],
      ],
    },
    symbol: null,
    attributes: {
      OBJECTID: 284623,
      POINT_OF_INTEREST: null,
      FACILITY_TYPE: null,
      FACILITY_SUBTYPE: null,
      CIVIC_FACILITY: "No",
      SHAPE: "Polygon",
      FACILITYID: "1001256101",
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
      GROUND_ELEVATION: 83.8,
      BUILDING_HEIGHT: 18.2,
      SHAPE_Length: 66.75148121103763,
      SHAPE_Area: 171.68820062310448,
    },
    popupTemplate: null,
  },
  displayValue: 284623,
  attributes: [
    {
      Field: "OBJECTID",
      Value: 284623,
    },
    {
      Field: "CIVIC FACILITY",
      Value: "No",
    },
    {
      Field: "SHAPE",
      Value: "Polygon",
    },
    {
      Field: "FACILITYID",
      Value: "1001256101",
    },
    {
      Field: "STATUS",
      Value: "In Service",
    },
    {
      Field: "GROUND ELEVATION",
      Value: 83.8,
    },
    {
      Field: "BUILDING HEIGHT",
      Value: 18.2,
    },
    {
      Field: "SHAPE Length",
      Value: 66.75148121103763,
    },
    {
      Field: "SHAPE Area",
      Value: 171.68820062310448,
    },
  ],
  isLotLayer: false,
};
export const initialize = (container) => {
  view.container = container;
  // makeTestResults([testObject]);
  return view;
};
