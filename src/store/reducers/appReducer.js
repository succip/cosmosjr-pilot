const initialState = {
  activePanel: null,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_ACTIVE_PANEL":
      return {
        ...state,
        activePanel: payload,
      };
    default:
      return state;
  }
};
