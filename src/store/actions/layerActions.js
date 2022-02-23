export const addLayer = (layer) => {
  return {
    type: "ADD_LAYER",
    payload: layer,
  };
};

export const updateLayerInscale = ({ ulid, inScale }) => {
  return {
    type: "UPDATE_LAYER_INSCALE",
    payload: { ulid, inScale },
  };
};

export const addLegendLayer = (layer) => {
  return {
    type: "ADD_LEGEND_LAYER",
    payload: layer,
  };
};
