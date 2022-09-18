import React from "react";
import ReactDOM from "react-dom/client";
import store from "./Redux/store";
import { Provider } from "react-redux";

//Styles
import "./styles/index.css";
import App from "./App";

// Création d'un store redux
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
