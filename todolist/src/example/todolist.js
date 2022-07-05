import {useState}   from "react";

function App(){
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState([])

   

    const handleSubmit =() => {
        setJobs(prev => [...prev, job])
        setJob('')
        
    }




    return (
        <div>
            <input 
                value={job} 
                onChange={e => setJob(e.target.value)} 
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                
                {jobs.map(job =>{
                    <li>{job}</li>
                })}
            </ul>
        
        </div>


    )

}
export default App;