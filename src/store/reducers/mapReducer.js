const initialState = {
  map: null,
};

const mapReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_MAP":
      return { ...state, map: payload };
    default:
      return state;
  }
};

export { mapReducer };
