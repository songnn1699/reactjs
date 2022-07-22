import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"


export const SuperHeroes =() => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] =useState('');

    useEffect(() =>{
        axios.get ('https://fakestoreapi.com/products').then((res) =>{
            setData(res.data);
            setIsLoading(false);
        })
    }, [])

    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>{error.message}</h2>
    }
    
    return (
        <>
            <h2>SuperHeroes page</h2>
            {data.map((hero) =>{
                return <div key={hero.category}>{hero.category}</div>
            })}
        </>

    )
}