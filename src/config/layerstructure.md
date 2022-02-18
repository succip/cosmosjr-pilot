temporary research for finding out what attributes belong to what layer lists

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

- getNodeIds() combs the UI tree to push all child nodes to nodeIdList[]
- nodeIdList[] is used in getNodeByIdX()