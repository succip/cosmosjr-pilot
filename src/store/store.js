import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { layerReducer } from "./reducers/layerReducer";
import { mapReducer } from "./reducers/mapReducer";
import { appReducer } from "./reducers/appReducer";

const reducers = combineReducers({
  layers: layerReducer,
  mapView: mapReducer,
  app: appReducer,
});

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));

export default store;
