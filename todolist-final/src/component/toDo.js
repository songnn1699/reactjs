
import React from 'react';
import './toDo.css'

function ToDo({todo, handleToggle}){
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return(
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? 'strike' :'todo'}>
            {todo.task}
        </div>
    )

}
export default ToDo;