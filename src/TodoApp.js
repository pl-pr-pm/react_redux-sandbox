import React from "react";
import { AddTodo } from "./components/AddTodo";
import { List } from "./components/List";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
  }
  render() {
    return (
      <div>
        <h2>TodoApp</h2>
        <AddTodo addTodo={this.addTodo} />
        <List todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
  addTodo = (todo) => {
    const addTodo = {
      id: this.state.todos.length,
      title: todo
    };
    this.setState({ todos: [...this.state.todos, addTodo] });
  };
  deleteTodo = (index) => {
    const deleteTargetTodos = [...this.state.todos];
    const todos = deleteTargetTodos.filter((todo) => todo.id !== index);
    this.setState({ todos: todos });
  };
}
