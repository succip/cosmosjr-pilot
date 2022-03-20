const initialState = {
  view: null,
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
    case "SET_VIEW":
      return { ...state, view: payload };
    default:
      return state;
  }
};

export { appReducer };
