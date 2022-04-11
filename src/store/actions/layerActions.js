export const addLayer = (layer) => {
  return {
    type: "ADD_LAYER",
    payload: layer,
  };
};

export const addMapLayer = (layer) => {
  return {
    type: "ADD_MAP_LAYER",
    payload: layer,
  };
};

export const addAddressLayer = (layer) => {
  return {
    type: "ADD_ADDRESS_LAYER",
    payload: layer,
  };
};

export const setLayerVisible = ({ ulid, layer }, visible) => {
  return {
    type: "SET_LAYER_VISIBLE",
    payload: { ulid, layer, visible },
  };
};

export const toggleLayerVisible = (mapLayer) => {
  return {
    type: "TOGGLE_LAYER_VISIBLE",
    payload: mapLayer,
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
