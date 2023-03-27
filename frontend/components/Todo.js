import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
        <div onClick={() => this.props.done(this.props.id)}>
          {this.props.name} {this.props.completed ? '✔️' : ''}
        </div>
    )
  }
}
