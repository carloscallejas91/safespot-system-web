import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.jsx";
import "./index.css";
import themeConfig from "./constants/themeConfig.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider theme={themeConfig}>
      <App />
    </ConfigProvider>
  </StrictMode>
);
