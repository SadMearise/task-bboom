import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "./globals.css";
import { BASENAME } from "./utils/constants.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={BASENAME}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
);
