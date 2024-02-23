import React from 'react';

// props - use this 
// update state - state - use bind 
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 }
    this.addNumber = this.addNumber.bind(this);
  }

  addNumber() {
    this.setState(prevState => {
      return { number: prevState.number++ }
    })
  }

  render() {
    return (
      <div className="main-container">
        <h2>{this.props.name}</h2>
        <p>Number: {this.state.number}</p>
        <button onClick={this.addNumber}>Add Student</button>
      </div>
    )
  }
}
export default Card;