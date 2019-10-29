import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/main.css";
import { ContextAmountProvider } from "./context";
ReactDOM.render(
  <ContextAmountProvider>
    <App />
  </ContextAmountProvider>,
  document.getElementById("root")
);
