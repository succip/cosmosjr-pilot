mapServiceLayerIds = [
    {
        serviceName: "Drainage"
        layerName: "Drainage Mains"
        url: "https:isservices.surrey.ca/arcgis/rest/services/Public/Drainage/MapServer"
        layerId: 14
        minScale: 0
        maxScale: 25001
    },
];

legendLayers = [
    {
        layer: {layer},
        title: "Drainage"
    }
]

-Comes from config/Settings.js
mapServiceSettings = [
    {
        id: "Drainage"
        url : "https:isservices.surrey.ca/arcgis/rest/services/Public/Drainage/MapServer"
        type: "Dynamic"
    }
]

- getNodeIds() combs the UI tree to push all child node ids to nodeIdList[], things like "Lots (Yellow),Lots"
- nodeIdList[] is used in getNodeByIdX()


GROUP:
{
  name: '',
  id: nanoid(),
  children: []
},

LEAF:
{
  name: '',
  id: nanoid(),
  leaf: true
},

findResult:
{
    displayFieldName: "LATERAL TYPE",
    feature: {..., attributes: [...]}
    foundFieldName: "FACILITYID"
    layerName: "Drainage Laterals"
    value: "100064986"
}

identifyResults:
{
    "attributes": [...]
    "displayFieldName": "MSLINK",
    "layerName": "Lots",
    "feature": {...},
    "isLotLayer": true
}

_Identify Lot Hierarchy_
IdentifyPanel
  ResultTree
    LotTree
      AddressTree
        AddressTreeItem
          AddressDetailsTree

Web_Map_as_JSON={"mapOptions": {"showAttribution": true,"extent":{"xmin": 505444.1,"ymin": 5425000.0,"xmax": 523555.9,"ymax": 5455000.0,"spatialReference": {"wkid": 26910}},"spatialReference": {"wkid": 26910},"scale":132151.049},"operationalLayers": [{"id":"BaseMap","url":"https://gisservices.surrey.ca/arcgis/rest/services/Base_Map/MapServer","title":"BaseMap","visibility":"true","minScale":0,"maxScale":25000.1,"visibleLayers":[]},{"id":"Lots","url":"https://gisservices.surrey.ca/arcgis/rest/services/Lots/MapServer","title":"Lots","visibility":"true","minScale":25000,"maxScale":0,"visibleLayers":[7]},{"id":"Buildings","url":"https://gisservices.surrey.ca/arcgis/rest/services/Public/Buildings/MapServer","title":"Buildings","visibility":"true","minScale":35001,"maxScale":0,"visibleLayers":[4,7,6,5,3]},{"id":"Transportation","url":"https://gisservices.surrey.ca/arcgis/rest/services/Public/Transportation/MapServer","title":"Transportation","visibility":"true","minScale":0,"maxScale":0,"visibleLayers":[33,19,23,22,21,20]},{"id":"Parks","url":"https://gisservices.surrey.ca/arcgis/rest/services/Public/Parks/MapServer","title":"Parks","visibility":"true","minScale":0,"maxScale":0,"visibleLayers":[43,42,41,40,37,26,29,28,27,0,4,3,2]},{"id":"Annotation_Dimensions","url":"https://gisservices.surrey.ca/arcgis/rest/services/Annotation_Dimensions/MapServer","title":"Annotation_Dimensions","visibility":"true","minScale":5001,"maxScale":0,"visibleLayers":[0,1]}],"exportOptions":{"outputSize": [ 1772,1814], "dpi": 192},"layoutOptions": {"titleText":"City of Surrey Mapping Online System","authorText":"Enter Map Description","scaleBarOptions": {"metricUnit": "esriKilometers","metricLabel": "km","nonMetricUnit": "esriKilometers","nonMetricLabel": "km"},"legendOptions": {"operationalLayers": []}}}

&Format=PDF

&Layout_Template=8.5x11 Landscape&f=json