import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return(
        <div>
            {props.todos.map(item => (
                <Todo key = {item.id} item = {item} toggle = {props.toggle} />
            ))}
           <button onClick = {props.completed}>Clear completed</button>
        </div>
    )
}
export default TodoList