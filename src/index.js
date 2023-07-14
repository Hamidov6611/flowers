import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./config/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <ProductProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductProvider>
  </div>
);
