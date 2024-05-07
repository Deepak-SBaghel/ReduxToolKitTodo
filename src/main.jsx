import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./app/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* 
        1st store is for defining the store 
        2nd store is our store name  
    */}
    <App />
  </Provider>
);
