import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./components/Contexts/AuthContextProvider";
import ProductContextProvider from "./components/Contexts/ProductContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
