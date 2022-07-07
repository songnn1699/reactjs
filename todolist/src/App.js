import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
  const [work, setWork]= useState('');
  const [works, setWorks] = useState([]);
  const handleAdd =() => {
    setWorks(prev => [...prev, work])
    setWork('')
  
  }

  return (
    <div
      style={{
        width: 500,
        margin:'auto',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'aquamarine',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <h1>Todo App</h1>
      <div>
        <input style={{borderRadius: '10px', padding: '10px'}} value={work} onChange={e => setWork(e.target.value)} />
        <button style={{borderRadius: '10px', padding: '10px'}} onClick={handleAdd}>Add</button>
        <ul>
          {works.map(work =>{
            <li>{work}</li>
          })}
        </ul>
      </div>


    </div>
    );
}

export default App;