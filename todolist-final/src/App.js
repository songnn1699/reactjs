
import './App.css';
import Header from './component/header.js'

import {useState} from 'react'
import ToDoList from './component/toDoList.js'
import TodoForm from './component/toDoForm';



function App() {
  const [todoList, setTodoList ]= useState([]);
  
  const handleToggle = (id) =>{
    let maped= todoList.map(task =>{
      return task.id === Number(id)  ? { ...task, complete: !task.complete} :{ ...task}
    });
    setTodoList(maped);

  }
  const handleFilter =() =>{
    let filterd =todoList.filter(task =>{
      return !task.complete;
    });
    setTodoList(filterd);
  }

  const addTask = (userInput) => {
    let copy = [...todoList];
    copy = [...copy, { id: todoList.length + 1, task: userInput, complete: false }];
    setTodoList(copy);
  }


  return (
    <div className="App" style={{boxShadow: '0 0 10px 5px  #bfbfbf'}}>
        <Header/>
        <ToDoList todoList={todoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
        <TodoForm addTask={addTask}/>
        <hr></hr>
    </div>
  );
}

export default App;
