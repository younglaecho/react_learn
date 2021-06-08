// import { Fragment } from 'react';
import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name="React" favoriteNumber={2}>
          칠드런
        </MyComponent>
        <Counter />
        <Say />
        <EventPractice />
        <ValidationSample />
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 아래로
        </button>
        <br />
        <IterationSample />
      </div>
    );
  }
}

export default App;
