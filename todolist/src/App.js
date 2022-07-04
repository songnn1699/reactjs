
import './App.css';
import React, {useState} from 'react';


function App() {
  
  const [jobs, setJobs]= useState([])
  const [job, setJob] = useState('')
  const handleSubmit = () => {
    setJobs(prev =>
      {
        const newJobs=  [...prev,job]
        const  jsonJobs =JSON.stringify(newJobs)
        localStorage.setItem ('jobs', jsonJobs)
        
        
        return newJobs
      
      })
    setJob('')
  }
  return (
    
    <div style ={{ padding: 32}}>
        <input value = {jobs} onChange={e => setJob(e.target.value)}/>
        <button onclick={handleSubmit}> add</button>
        <ul>
          {jobs.map((job, index) =>(
            <li key={index}> {job}</li>
          ))}
        </ul>
    </div>
    
  );
}
export default App
