import { useState } from "react";
import Content from "./contents4";

function App(){
    const [show, setShow] = useState(false)
    
    return (
        <div style={{ padding : 50}}>
            <button onClick={()=> setShow(!show)} >Toggle</button>
            {show && <Content/>}
        </div>
    )

}
export  default App;