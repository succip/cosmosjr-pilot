const initialState = {
  mapView: null,
};

const mapReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_MAPVIEW":
      return { ...state, mapView: payload };
    default:
      return state;
  }
};

export { mapReducer };
