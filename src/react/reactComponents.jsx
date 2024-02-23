import { Outlet, Link } from "react-router-dom";

function ReactComponent() {
  return (
    <div>
      <h2>React</h2>
      <nav>
        <ul>
          <li>
            <Link to="hooks">Hooks</Link>
          </li>
          <li>
            <Link to="hoc">HOC</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default ReactComponent;
