import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContextProvider } from "./store/AppContext";

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,

  document.getElementById("root")
);
