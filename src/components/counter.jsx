import React, { Component } from "react";

class Counter extends Component {

  constructor(props) {
    super(props);     
}  
  state = {
      count : this.props.value,
      address: {
          street: "123",
          landmark: "Gota"
      },
      tags: ['tag1', 'tag2', 'tag3']
  };

  handleCounter = product => {
    console.log(product);
    const currentState = product.id;
    this.setState({count : currentState + 1});
  }
  render() {
    console.log("This is counter", this.props);
    return (
      <div>
        <span className="badge badge-primary m-2">{this.state.count}</span>
        <button className="btn btn-secondary btn-sm" onClick={(e) => this.handleCounter({id: this.state.count})}>Click Me</button>
        <ul>
          { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
        </ul>
      </div>
    );
  }
}

export default Counter;
