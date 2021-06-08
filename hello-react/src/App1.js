// import { Fragment } from 'react';
import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App1 extends Component {
  state = {
    color: "#000000",
  };

  handleclick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleclick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App1;
