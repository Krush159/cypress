import React from 'react'


const TaskItem = (props) =>(
  <li className={props.data.completed?"text-success completed": null}>
    <div  >
      <input 
        type="checkbox" 
        onClick={props.handleToggle} 
        checked={props.data.completed} 
        id ={props.data.id} 
        className="toggle"
      />
      <label>
        {props.data.title}
      </label>
    </div>
  </li>
)

const TaskList = props =>
  <ul className="task-list">
    {props.todos.map(todo => <TaskItem data = {todo} handleToggle = {props.handleToggle}/>)}
  </ul>

export default TaskList