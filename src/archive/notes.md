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
    LotTreeItem (e.g. "Lots - 86250")
      AddressTree
        AddressTreeItem (e.g. "10168 University Dr")
          AddressDetailsTree (e.g. "Property Details")
    ResultTreeItem (e.g. "Water Mains - 450")