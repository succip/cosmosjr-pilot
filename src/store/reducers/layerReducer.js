const initialState = {
  allLayers: [],
  legendLayers: [],
  mapLayers: [],
};

const layerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_LAYER":
      return { ...state, allLayers: [...state.allLayers, payload] };
    case "ADD_MAP_LAYER":
      return { ...state, mapLayers: [...state.mapLayers, payload] };
    case "ADD_CUSTOM_LAYER":
      return { ...state, [payload.title]: payload.layer };
    case "SET_LAYER_VISIBLE": {
      let { layer } = payload;
      layer.visible = payload.visible;
      return {
        ...state,
        mapLayers: state.mapLayers.map((mapLayer) =>
          mapLayer.ulid === payload.ulid ? { ...mapLayer, layer } : mapLayer
        ),
      };
    }
    case "TOGGLE_LAYER_VISIBLE": {
      let { layer } = payload;
      layer.visible = !layer.visible;
      return {
        ...state,
        mapLayers: state.mapLayers.map((mapLayer) =>
          mapLayer.ulid === payload.ulid ? { ...mapLayer, layer } : mapLayer
        ),
      };
    }
    case "UPDATE_LAYER_INSCALE":
      return {
        ...state,
        mapLayers: state.mapLayers.map((mapLayer) =>
          mapLayer.ulid === payload.ulid ? { ...mapLayer, inScale: payload.inScale } : mapLayer
        ),
      };
    case "ADD_LEGEND_LAYER":
      return { ...state, legendLayers: [...state.legendLayers, payload] };
    default:
      return state;
  }
};

export { layerReducer };
