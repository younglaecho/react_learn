import React, { Component } from "react";

class ScrollBox extends Component {
  state = {
    test: "",
  };

  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
    this.setState({
      test: "clicked!",
    });
  };

  handleScroll = () => {
    const { scrollTop } = this.box;
    this.setState({
      test: scrollTop,
    });
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div>
        <div
          style={style}
          onScroll={this.handleScroll}
          ref={(ref) => {
            this.box = ref;
          }}
        >
          <div style={innerStyle}></div>
        </div>
        <p>{this.state.test}</p>
      </div>
    );
  }
}

export default ScrollBox;
