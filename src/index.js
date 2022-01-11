import React from "react";
import { render } from "react-dom";

import "./App.css";

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }
  render() {
    const { temp } = this.state;
    return (
      <div className={this.H2OState(temp)}>
        <h2>
          phase: {this.H2OState(temp)}, {temp}度
        </h2>
        <button onClick={this.onButtonUpClick}>+</button>
        <button onClick={this.onButtonDownClick}>-</button>
        <button onClick={this.onButtonUp10Click}>+10</button>
        <button onClick={this.onButtonDown10Click}>-10</button>
      </div>
    );
  }
  onButtonUpClick = () => {
    this.setState({ temp: this.state.temp + 1 });
  };
  onButtonDownClick = () => {
    this.setState({ temp: this.state.temp - 1 });
  };
  onButtonUp10Click = () => {
    this.setState({ temp: this.state.temp + 10 });
  };
  onButtonDown10Click = () => {
    this.setState({ temp: this.state.temp - 10 });
  };
  H2OState = (temp) => {
    if (temp < 0) return "ice";
    if (temp >= 100) return "steam";
    return "water";
  };
}

render(<H2O />, document.getElementById("root"));
