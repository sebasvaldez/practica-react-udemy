import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { JournalApp } from "./JournalApp.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <Router>
        <JournalApp />
      </Router>
    </Provider>
);