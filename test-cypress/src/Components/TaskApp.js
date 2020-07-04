import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import {addTask,loadData} from '../utils/axios'

export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newTaskTitle: "",
      todos: [],
      error:false
    }
  }
  componentDidMount(){
    loadData()
      .then(({data})=>this.setState({
        todos:data
      }) )
      .catch(err=>this.setState({
        error:true
      }) )
  }
  handleChange =(e) => {
    this.setState({
      newTaskTitle: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const item = {
      id:Date.now(),
      title: this.state.newTaskTitle,
      completed:false
    }
    addTask(item)
    .then(({data})=>{
      this.setState({
        todos: [...this.state.todos, data]
      })
    })
    .catch(err => {
      this.setState({
        error:true
      })
    })
    
  }
  handleToggle =(id) => {
    const arr = this.state.todos.map(item=>{
      return  item.id=== id?{...item,completed:!item.completed}:item
    })

    this.setState({
      todos:arr
    })
  }


  render () {
    return (
      <Router>
        <div className="container-fluid text-center">
          <header className="p-2">
            <h1>Tasks</h1>
            { this.state.error && <h3 className="error">Oops something went wrong</h3>}
            <TaskForm 
              value ={ this.state.newTaskTitle } 
              handleChange ={ this.handleChange} 
              handleSubmit={this.handleSubmit}
            />
          </header>
          <section className="mt-2">
            <TaskList todos={this.state.todos} handleToggle = {this.handleToggle}/>
          </section>
        </div>
      </Router>
    )
  }
}