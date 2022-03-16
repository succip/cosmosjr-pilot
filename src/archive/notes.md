1. How does the basemap show past 25k if all the map services have a minScale of 25k.
    a. How does the basemap show beyond 25k? 

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

- getNodeIds() combs the UI tree to push all child node ids to nodeIdList[], things like "Lots (Yellow),Lots"
- nodeIdList[] is used in getNodeByIdX()

export const buildMapLayers = (layerStore) => {
  const { layers } = store.getState();
  Object.keys(layerStore).forEach((key) => {
    if (typeof layerStore[key] === "object") {
      if (layerStore[key].leaf) {
        const matchedLayer = layers.allLayers.find((mapLayer) => mapLayer.title === layerStore[key].name);
        if (matchedLayer) store.dispatch(addMapLayer(matchedLayer));
      }
      buildMapLayers(layerStore[key]);
    }
  });
};

https://stackoverflow.com/questions/61067142/how-to-map-an-array-with-unknown-nesting-levels/61067404#61067404

{mapLayers.map((mapLayer) => {
  return <LayerListItem key={mapLayer.ulid} mapLayer={mapLayer} />;
})}

https://js.arcgis.com/4.22/@arcgis/core/assets/esri/themes/light/main.css

https://cosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetPropertyDataAll/5327;
https://cosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetAddressData/5327;