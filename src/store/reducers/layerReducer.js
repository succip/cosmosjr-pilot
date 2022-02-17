const initialState = {
  layers: ["first", "second"],
};

const layerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_LAYER":
      return { ...state, layers: [...state.layers, payload] };
    default:
      return state;
  }
};

export { layerReducer };
