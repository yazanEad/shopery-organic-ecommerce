import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/variables.css";
import "./styles/base.css";
import "./index.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Category_ProductContext from "./context/Category_ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Category_ProductContext>
        <App />
      </Category_ProductContext>
    </BrowserRouter>
  </StrictMode>,
);
