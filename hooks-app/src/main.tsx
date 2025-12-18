import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { HooksApp } from "./HooksApp";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
// import { TrafficLightWithEffectWithHook } from "./02-useEffect/TrafficLightWithEffectWithHook";
//import { FocusScreen } from "./04-useRef/FocusScreen";
import { MemoHook } from "./06-memos/MemoHook";
import "./index.css";
//import { TasksApp } from "./05-useReducer/TaskApp";
//import { PokemonPage } from "./03-examples/PokemonPage";
import { ScrambleWords } from "./05-useReducer/ScrambleWords";
import { MemoCounter } from "./06-memos/MemoCounter";
import { InstagromApp } from "./07-useOptimistic/InstagromApp";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <TrafficLightWithEffectWithHook /> */}
    <InstagromApp />
  </StrictMode>
);
