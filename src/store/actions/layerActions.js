export const addLayer = (layer) => {
  return {
    type: "ADD_LAYER",
    payload: layer,
  };
};

export const addLegendLayer = (layer) => {
  return {
    type: "ADD_LEGEND_LAYER",
    payload: layer,
  };
};
