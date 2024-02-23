import { MyComponentWithLoading } from "./WithLoading";
import MyComponentWithLogger from "./WithLogger";

function HosComponent() {
  return (
    <div>
      <h2>HOC</h2>
      <MyComponentWithLoading />
      <MyComponentWithLogger />
      <p>Check console</p>
    </div>
  );
}

export default HosComponent;
