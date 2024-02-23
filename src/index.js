import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JsComponent from "./js/jsComponent";
import ReactComponent from "./react/reactComponents";
import HooksComponent from "./react/Hooks/HooksC";
import UseEffect from "./react/Hooks/UseEffect";
import Useref from "./react/Hooks/UseRef";
import HosComponent from "./react/HOC/hocC";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="js" element={<JsComponent />} />
          <Route path="react" element={<ReactComponent />}>
            <Route path="hooks" element={<HooksComponent />}>
              <Route path="useEffect" element={<UseEffect />} />
              <Route path="useRef" element={<Useref />} />
            </Route>
            <Route path="hoc" element={<HosComponent />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
