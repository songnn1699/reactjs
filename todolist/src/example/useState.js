import { useState } from "react";

function App(){
    const [count, setCount]= useState(1)

    const [info, setInfo] = useState({
        name: 'Nguyen Van A',
        age: 18,
        address: 'New York'
    })

    const handleIncrease=() => {
        setCount(count + 1)
    }
    const handleInfo=() => {
        setInfo(prev => ({
            ...prev,
            bio: 'hallelujah'
        }))
    }

    return (
        <div className="app">
            <h1>{count}</h1>
            <button onClick={handleIncrease}> Increase </button>
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleInfo}> AddInfo</button> 
        </div>
    
        
    )


}
export default App;