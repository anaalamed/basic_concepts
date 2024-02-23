import React, { useState, useReducer, useContext, createContext } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: <span>{count}</span></p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}

// allows us to manage state by dispatching actions and then responding to them 
// in the reducer function
function UseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'RESET':
        return 0;
      default:
        return action.val;
    }
  }

  return (
    <>
      <p>Count: <span>{count}</span></p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </>
  );
}

// useContext - to avoid prop drilling
const UserContext = createContext()

function App() {
  const [user, setUser] = useState("Ana");
  return (
    <UserContext.Provider value={user}>
      <p>{`Hello ${user}!`}</p>
      <UseContext />
    </UserContext.Provider>
  );

}

function UseContext() {
  const user = useContext(UserContext);

  return (
    <>
      <p>{`Hello ${user} again - from inner component!`}</p>
    </>
  );
}

const State = () => {

  return (
    <div >
      <h2>State</h2>
      <h2>UseState</h2>
      <UseState />

      <h2>UseReducer</h2>
      <UseReducer />

      <h2>UseContext</h2>
      <App />
    </div>
  );
}
export default State