import React from 'react'
import axios from 'axios'
import Form from './Form'
import TodoList from './TodoList'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  getTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState({...this.state, todos: res.data.data})
      })
      .catch(err => console.log('broken'))
    }
  
  // runs after first render, this is where you want to do your API calls
  componentDidMount() {
    console.log('mounted')
    this.getTodos();
  }

  // not sure if this works
  componentDidUpdate(prevProps, prevState) {
    console.log('component did update')
    if(prevState.todos != this.state.todos) {
        console.log("Todos have changed")
    }
  }

  post = (todo) => {
    axios.post(URL, todo).then(res => this.getTodos()).catch(err => ('something is wrong'))
  }

  done = id => {
    axios.patch(`${URL}/${id}`)
      .then(res => {
        this.getTodos()
      })
  }

  clear = () => {
    this.setState({ ...this.state, todos: this.state.todos.filter(todo => {
      if(!todo.completed) {
        return todo
      }
    })})
  }

  render() {
    return (
      <>
        <TodoList todos={this.state.todos} done={this.done}/>
        <Form post={this.post} clear={this.clear}/>
      </>
    )
  }
}
