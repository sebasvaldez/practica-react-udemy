import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { HooksApp } from "./HooksApp";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
import { TrafficLightWithEffectWithHook } from "./02-useEffect/TrafficLightWithEffectWithHook";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TrafficLightWithEffectWithHook />
  </StrictMode>
);
