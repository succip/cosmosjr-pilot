const initialState = {
  view: null,
  activePanel: null,
  identifyResults: [],
  mapViewMode: "basemap",
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_ACTIVE_PANEL":
      return {
        ...state,
        activePanel: payload,
      };
    case "SET_IDENTIFY_LOADING":
      return {
        ...state,
        identifyLoading: payload,
      };
    case "SET_IDENTIFY_RESULTS":
      return {
        ...state,
        identifyResults: payload,
      };
    case "SET_VIEW":
      return { ...state, view: payload };
    case "SET_MAP_VIEW_MODE":
      return { ...state, mapViewMode: payload };
    default:
      return state;
  }
};

export { appReducer };
