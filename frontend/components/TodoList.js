import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {this.props.todos.map((todo) => (
          <Todo name={todo.name} id={todo.id} key={todo.id} done={this.props.done} completed={todo.completed} />
        ))}
      </>
    )
  }
}
