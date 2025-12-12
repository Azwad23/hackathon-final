import * as React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import { initTelemetry } from "./telemetry";
import App from "./App";
import "./index.css";

// Initialize OpenTelemetry
initTelemetry();

// Initialize Sentry
Sentry.init({
  dsn: (import.meta as any).env?.VITE_SENTRY_DSN,
  environment: (import.meta as any).env?.MODE || "development",
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const SentryApp = Sentry.withErrorBoundary(App, {
  fallback: ({ error, resetError }) => (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={resetError}>Try again</button>
    </div>
  ),
  beforeCapture: (scope) => {
    scope.setTag("component", "App");
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SentryApp />
  </React.StrictMode>,
);
