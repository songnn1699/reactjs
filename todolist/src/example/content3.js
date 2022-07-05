import { useState, useEffect } from "react";

function Content(){

    const [countdown, setCountdown] =useState(100)

    useEffect(()    => {
        const timerID = setInterval(() => {
           setCountdown(prevState => prevState -1) 
        }, 1000);
        return () => clearInterval(timerID)
    }, [])


    return (
        <div>
            <h1>{countdown}</h1>
        </div>

    )



}
export default Content;