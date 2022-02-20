const initialState = {
  allLayers: [],
  legendLayers: [],
};

const layerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_LAYER":
      return { ...state, allLayers: [...state.allLayers, payload] };
    case "ADD_LEGEND_LAYER":
      return { ...state, legendLayers: [...state.legendLayers, payload] };
    default:
      return state;
  }
};

export { layerReducer };
