export const setActivePanel = (panelId) => {
  return {
    type: "SET_ACTIVE_PANEL",
    payload: panelId,
  };
};

export const setIdentifyResults = (results) => {
  return {
    type: "SET_IDENTIFY_RESULTS",
    payload: results,
  };
};
