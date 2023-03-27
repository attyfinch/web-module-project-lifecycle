import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      completed: false
    }
  }

  change = e => {
    e.preventDefault;
    this.setState({...this.state, name: e.target.value, id: Date.now(), completed: false})
  }

  submit = e => {
    e.preventDefault();
    this.props.post(this.state)
  }

  render() {
    return (
      <>
      <form onSubmit={this.submit}>
        <input name="todo" type="text" onChange={this.change} value={this.state.name}/>
        <button>Add Todo</button>
      </form>
      <button onClick={() => this.props.clear()}>All Done</button>
      </>
    )
  }
}
