export const setActivePanel = (panelId) => {
  return {
    type: "SET_ACTIVE_PANEL",
    payload: panelId,
  };
};

export const setIdentifyLoading = (loadingState) => {
  return {
    type: "SET_IDENTIFY_LOADING",
    payload: loadingState,
  };
};

export const setIdentifyResults = (results) => {
  return {
    type: "SET_IDENTIFY_RESULTS",
    payload: results,
  };
};

export const setView = (view) => {
  return {
    type: "SET_VIEW",
    payload: view,
  };
};

export const setMapViewMode = (mapViewMode) => {
  return {
    type: "SET_MAP_VIEW_MODE",
    payload: mapViewMode,
  };
};
