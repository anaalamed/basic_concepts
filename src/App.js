import { MyComponentWithLoading } from "./react/HOC/WithLoading";
import MyComponentWithLogger from "./react/HOC/WithLogger";
import { InfiniteTimer, Timer, Counter } from "./react/Hooks/UseEffect";
import {
  AccessDomElements,
  CountRendering,
  TrackStateChanges,
} from "./react/Hooks/UseRef";
import Closure from "./js/jsComponent";

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

      <h2>JS</h2>
      <Closure />
    </div>
  );
}

export default App;
