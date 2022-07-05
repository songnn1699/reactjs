import { useEffect, useState } from "react";
import Content from "./content2";

function App(){
    const [title, setTitle] = useState('')
    const [show, setShow] = useState(false)
    
    return (
        <div style={{ padding : 50}}>
            <button onClick={()=> setShow(!show)} >Toggle</button>
            {show && <Content/>}
        </div>
    )

}
export  default App;