const initialState = {
  allLayers: [],
  legendLayers: [],
};

const layerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_LAYER":
      return { ...state, allLayers: [...state.allLayers, payload] };
    case "UPDATE_LAYER_INSCALE":
      return {
        ...state,
        allLayers: state.allLayers.map((mapLayer) => (mapLayer.ulid === payload.ulid ? { ...mapLayer, inScale: payload.inScale } : mapLayer)),
      };
    case "ADD_LEGEND_LAYER":
      return { ...state, legendLayers: [...state.legendLayers, payload] };
    default:
      return state;
  }
};

export { layerReducer };
