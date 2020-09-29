import React from 'react'

const Todo = (props) => {
    return(                                                
        <div onClick = {() => props.toggle(props.item.id)} className={`${props.item.completed === true ? "completed" : ""}`}>
            <h1>{props.item.name}</h1>
        </div>
    )
}
export default Todo