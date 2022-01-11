import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.todos.map((todo, index) => {
      return (
        <>
          <li key={todo.id}>
            #{todo.id} {todo.title}{" "}
            <button onClick={() => this.props.deleteTodo(index)}>削除</button>
          </li>
        </>
      );
    });
    return (
      <div>
        <h2>List</h2>
        <ul>{list}</ul>
      </div>
    );
  }
}
