import "./App.css";
import { MyComponentWithLoading } from "./HOC/WithLoading";
import MyComponentWithLogger from "./HOC/WithLogger";
import { InfiniteTimer, Timer, Counter } from "./Hooks/UseEffect";
import {
  AccessDomElements,
  CountRendering,
  TrackStateChanges,
} from "./Hooks/UseRef";

function App() {
  return (
    <div className="App">
      <h1>Interview basic questions</h1>

      <h2>HOC</h2>
      <MyComponentWithLoading />
      <MyComponentWithLogger />

      <h2>UseEffect</h2>
      <InfiniteTimer />
      <Timer />
      <Counter />

      <h2>UseRef</h2>
      <CountRendering />
      <AccessDomElements />
      <TrackStateChanges />
    </div>
  );
}

export default App;
