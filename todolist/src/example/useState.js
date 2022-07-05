import { useState } from "react";

function App(){
    const [count, setCount]= useState(1)

    const [info, setInfo] = useState({
        name: 'Nguyen Van A',
        age: 18,
        address: 'New York'
    })
    const [gift, setGift] = useState()


    const gifts=[
        'Iphone 11',
        'Samsung s21',
        'Nokia e700'

    ]



    const handleIncrease=() => {
        setCount(count + 1)
    }
    const handleInfo=() => {
        setInfo(prev => ({
            ...prev,
            bio: 'hallelujah'
        }))
    }
    const handleGift=() => {
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index])
    
    }



    return (
        <div className="app">
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleInfo}> AddInfo</button> 
            <h1>{gift || 'Chua co thuong'} </h1>
            <button onClick={handleGift}>Prize!</button>
        </div>

    )

    
}
export default App;