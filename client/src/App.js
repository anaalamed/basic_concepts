import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Interview basic questions</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/js">JavaScript</Link>
          </li>
          <li>
            <Link to="/react">React</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
