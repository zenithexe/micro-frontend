import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import RemoteComponent from "./RemoteComponent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}

    <div>
      <h1>Remote App 1 (Standalone)</h1>
      <RemoteComponent />
    </div>
  </StrictMode>
);
