import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/800-italic.css";

import "@fontsource-variable/manrope";
import "@fontsource/pacifico";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
