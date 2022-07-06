import React from 'react';
import { useState } from 'react';
import './toDo.css'

function ToDoForm({addTask}){
    const [ userInput, setUserInput ] = useState('');
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
                <button className='button' >Submit</button>
            </form>
        </div>

    )
}
export default ToDoForm;