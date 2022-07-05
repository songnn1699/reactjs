import { useState, useRef } from "react";


function App(){
    const [count, setCount] = useState(60)
    let timeid = useRef()


    const handleStart = () => {
        timeid.current =setInterval(() =>{
            setCount(prevCount => prevCount -1)
        },1000)
    }
    const handleStop = () => {
        clearInterval(timeid.current)
    }

    return(
        <div style={{padding: 20}}> 
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

        </div>

    )

}
export default App;
