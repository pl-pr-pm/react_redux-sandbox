import React from "react";
import { render } from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { member: [] };
  }

  memberList(list) {
    const memberList = list.map((member) => {
      return (
        <li>
          {member.name} {member.age}
        </li>
      );
    });
    return <ul>{memberList}</ul>;
  }

  render() {
    return (
      <>
        <button onClick={this.getJson}>request</button>
        {this.memberList(this.state.member)}
      </>
    );
  }

  getJson = () => {
    axios.get("https://myjson.dit.upm.es/api/bins/6xen").then((res) => {
      console.log(res.data);
      this.setState(res.data);
    });
  };
}

render(<App />, document.getElementById("root"));
