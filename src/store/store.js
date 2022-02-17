import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { layerReducer } from "./reducers/layerReducer";

const reducers = combineReducers({
  layers: layerReducer,
});

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));

export default store;
