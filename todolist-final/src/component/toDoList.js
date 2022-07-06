import React from 'react';
import ToDo from './toDo.js';


function ToDoList({todoList, handleFilter, handleToggle}){
    return(
        <div>
            {todoList.map(todo => {
                return (
                    <ToDo todo ={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear task Complete</button>
        </div>
    )
}
export default ToDoList;