// import { Fragment } from 'react';
import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App1 extends Component {
  state = {
    color:'#000000'
  }
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜던 색상</button>
        <LifeCycleSample color={this.state.color}></LifeCycleSample>
      </div>
    )
  }
}

export default App1;
