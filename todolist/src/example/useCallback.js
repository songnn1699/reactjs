import { useState, useCallback } from "react";
import Content from "./content";

function App(){
    const [count, setCount] =   useState(1)
    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    },[])


    return(
        <div className="App">
            <h1>{count}</h1>
            <Content onIncrease= {handleIncrease} />
        </div>

    )



}
export default App;