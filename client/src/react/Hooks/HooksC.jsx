import { Outlet, Link } from "react-router-dom";

function HooksComponent() {
  return (
    <div>
      <h2>Hooks</h2>
      <nav>
        <ul>
          <li>
            <Link to="useEffect">useEffect</Link>
          </li>
          <li>
            <Link to="useRef">useRef</Link>
          </li>
          <li>
            <Link to="state">state</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default HooksComponent;
