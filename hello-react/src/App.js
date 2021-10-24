// import { Fragment } from 'react';
import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox1";
import IterationSample1 from "./IterationSample1";

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
        <ScrollBox ref={(ref) => this.scrollBox=ref}></ScrollBox>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <br />
        <IterationSample1 />
      </div>
    );
  }
}

export default App;
