import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { layerReducer } from "./reducers/layerReducer";
import { mapReducer } from "./reducers/mapReducer";

const reducers = combineReducers({
  layers: layerReducer,
  map: mapReducer,
});

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));

export default store;
