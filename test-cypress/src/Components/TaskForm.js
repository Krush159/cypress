import React from 'react'

const TaskForm = props =>
  <form onSubmit = {props.handleSubmit}>
    <input
      type='text'
      autoFocus
      value = {props.value}
      onChange ={props.handleChange}
      className="p-2 rounded border task-input"
      placeholder="Add something?"/>
  </form>

  export default TaskForm