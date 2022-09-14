import React from "react";
import ReactDOM from "react-dom/client";
import store from "./Redux/store";
import { Provider } from "react-redux";

import "./styles/index.css";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
      <Provider store={store}>
        <App />
      </Provider>
);
