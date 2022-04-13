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

      {idResults.map((result, key) => {
        return result.isLotLayer ? (
          <LotResultTitle result={result} key={key} />
        ) : (
          <ResultTitle result={result} key={key} />
        );
      })}


example output from searchBar: 
{
    "FieldName": "ADDRESSID",
    "FieldValue": "28742",
    "LayerName": "Address Search",
    "ListValue": "2949 KING GEORGE BLVD - Address",
    "key": "197400"
}

example results output object: 
{
    "displayFieldName": "MSLINK",
    "layerName": "Lots",
    "feature": {
        "geometry": {
            "spatialReference": {
                "latestWkid": 26910,
                "wkid": 26910
            },
            "rings": [
                [
                    [
                        511987.87968749966,
                        5448744.158625001
                    ],
                    [
                        511996.9246250005,
                        5448740.3421875
                    ],
                    [
                        512073.0824375005,
                        5448738.9994375
                    ],
                    [
                        512072.7829374997,
                        5448548.216187499
                    ],
                    [
                        511971.836312499,
                        5448549.429375001
                    ],
                    [
                        511972.16606250015,
                        5448573.868125001
                    ],
                    [
                        511973.44481250027,
                        5448668.2212499995
                    ],
                    [
                        511974.4763125013,
                        5448744.3949375
                    ],
                    [
                        511987.87968749966,
                        5448744.158625001
                    ]
                ]
            ]
        },
        "symbol": null,
        "attributes": {
            "LOT_TYPE2": "Standard Lot",
            "MSLINK": 34842,
            "LOT_NO": "1",
            "REM_FLAG": "Y",
            "BLOCK_NO": null,
            "OWNER_TYPE": "Private",
            "IN_PLAN": "5210",
            "CANC_PLAN_NO": null,
            "PLAN_TYPE": "Subdivision",
            "PLAN_YR": 1932,
            "PID": "011-126-345",
            "DESCRIPTION": null,
            "NAME": null,
            "OBJECTID": 18452,
            "PLANIMAGEID": 15837,
            "AMANDARSN": 20955,
            "SHAPE": "Polygon",
            "SHAPE_Area": 19134.493724859632
        },
        "popupTemplate": null
    },
    "displayValue": 34842,
    "attributes": [
        {
            "Field": "LOT TYPE2",
            "Value": "Standard Lot"
        },
        {
            "Field": "MSLINK",
            "Value": 34842
        },
        {
            "Field": "LOT NO",
            "Value": "1"
        },
        {
            "Field": "REM FLAG",
            "Value": "Y"
        },
        {
            "Field": "OWNER TYPE",
            "Value": "Private"
        },
        {
            "Field": "IN PLAN",
            "Value": "5210"
        },
        {
            "Field": "PLAN TYPE",
            "Value": "Subdivision"
        },
        {
            "Field": "PLAN YR",
            "Value": 1932
        },
        {
            "Field": "PID",
            "Value": "011-126-345"
        },
        {
            "Field": "PLANIMAGEID",
            "Value": 15837
        },
        {
            "Field": "AMANDARSN",
            "Value": 20955
        },
        {
            "Field": "AREA (m²)",
            "Value": 19134.493724859632
        }
    ],
    "isLotLayer": true
}