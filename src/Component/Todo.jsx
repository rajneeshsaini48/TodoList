import React from 'react'
import Todolist from './Todolist'
// import './Todo.css'

const Todo = (props) => {
  return (
    <div className='container'>
        <h3 className='my-3'>Todos list</h3>
        {props.todos.length===0?"No Todos to Display":
        props.todos.map((todo)=>{
          return <Todolist todo ={todo} key = {todo.Sno} onDelete ={props.onDelete}/>              
        })}
        
        

    </div>
  )
}

export default Todo