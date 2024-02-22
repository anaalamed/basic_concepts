import React, { useState, useEffect } from "react";

function InfiniteTimer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <>
      <h3>useEffect(function)- runs on every render</h3>
      <p>I've rendered {count} times!</p>
    </>
  );
}

const Timer = () => {
  const [count, setCount] = useState(0);

  //Runs only on the first render
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h3>useEffect(function, [])- runs on the first render</h3>
      <p>I've rendered {count} times!</p>
    </>
  );
};

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  //Runs on the first render And any time the count changes
  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <>
      <h3>useEffect(function, [count])- runs on count changes</h3>
      <p data-testid="counter">Count: {count}</p>
      <button data-testid="increment" onClick={() => setCount((c) => c + 1)}>+</button>
      <p data-testid="calculation">Calculation: {calculation}</p>
    </>
  );
}

export { InfiniteTimer, Timer, Counter };
