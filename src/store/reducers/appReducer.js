const initialState = {
  activePanel: null,
  identifyResults: [],
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_ACTIVE_PANEL":
      return {
        ...state,
        activePanel: payload,
      };
    case "SET_IDENTIFY_RESULTS":
      return {
        ...state,
        identifyResults: payload,
      };
    default:
      return state;
  }
};

export { appReducer };
