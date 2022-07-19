import React from "react"
import { useQuery } from 'react-query'
import { useState } from "react"
import axios from 'axios'


const fetchSuperHeroes=() =>{
    return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroes =() => {
    const {isLoading, data}= useQuery(['superheroes'], fetchSuperHeroes)
    const [error, setError] =useState('');


    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>RQ SuperHeroes page</h2>
            {data?.data.map((a) =>{
                return <div key={a.id}>{a.name}</div>
            })}
        </>
    )
}