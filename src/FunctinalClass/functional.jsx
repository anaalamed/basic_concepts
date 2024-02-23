import { useState } from "react"

// js function - function/arraw function
function Card(props) {
  return (
    <div className="main-container">
      <h2>Title of the card</h2>
    </div>
  )
}

const CardArrow = (props) => {
  const [number, setNumber] = useState(0);

  const addNumber = () => {
    setNumber(++number);
  }

  return (
    <div className="main-container">
      <h2>{props.name}</h2>
      <p>Number: {number}</p>
      <button onClick={addNumber}>Add Student</button>
    </div>
  )
}
export default CardArrow;