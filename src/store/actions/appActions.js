export const setActivePanel = (panelId) => {
  return {
    type: "SET_ACTIVE_PANEL",
    payload: panelId,
  };
};
