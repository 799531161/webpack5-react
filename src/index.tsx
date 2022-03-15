import "@/styles/normalize.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
ReactDOM.render(
  <ErrorBoundary>
    <HashRouter>
      <Suspense fallback={<div>loading...</div>}>
        <App />
      </Suspense>
    </HashRouter>
  </ErrorBoundary>,
  document.getElementById("root")
);
