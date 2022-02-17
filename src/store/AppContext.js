import { createContext, useReducer } from "react";

export const AppContext = createContext({
  layerList: [],
  setLayerList: () => {},
});

const initialState = {
  layerList: [],
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_LAYER":
      return { ...state, layerList: [...state.layerList, payload] };
    default:
      return state;
  }
}

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addLayer = (layer) => {
    dispatch({
      type: "ADD_LAYER",
      payload: layer,
    });
  };

  const value = { state, dispatch, addLayer };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContext;
