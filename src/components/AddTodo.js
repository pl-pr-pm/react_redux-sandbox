import React from "react";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <h2>AddTodo</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.onChangeVal} />
          <input type="submit" value="Add to todo list" />
        </form>
      </div>
    );
  }

  onChangeVal = (e) => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); //ページ遷移を止める
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
}
