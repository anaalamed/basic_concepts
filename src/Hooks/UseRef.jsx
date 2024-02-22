import { useState, useEffect, useRef } from "react";

function CountRendering() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <h3>Does Not Cause Re-renders</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Render Count: {count.current}</p>
    </>
  );
}

function AccessDomElements() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <h3>Access DOM elements</h3>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

function TrackStateChanges() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    // change does'n cause re-rendeing 
    previousInputValue.current = inputValue;
    console.log("useEffect: ", inputValue)
  }, [inputValue]);

  return (
    <>
      <h3>Tracking State Changes</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Current Value: {inputValue}</p>
      <p>Previous Value: {previousInputValue.current}</p>
    </>
  );
}

export { CountRendering, AccessDomElements, TrackStateChanges };