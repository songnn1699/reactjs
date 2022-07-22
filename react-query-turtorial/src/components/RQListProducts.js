import React from "react"
import { useQuery } from 'react-query'
// import { Button } from "@material-ui/core"
import axios from 'axios'
import {Link} from 'react-router-dom'

import '../App.css'

const fetchSuperHeroes=() =>{
    return axios.get('https://fakestoreapi.com/products')
}

export const RQListProducts =() => {
    const onSuccess = (data) => {
        console.log ("perfome side after data fetching...", data)

    }
    const onError = (error) => {
        console.log('performe site effect after encouring error...', error)
    }
    
    
    const {isLoading, data, isError, error, isFetching, refetch}= useQuery(['list-products'], fetchSuperHeroes,
    { 
        onSuccess,
        onError,
        // select: (data) => {
        //     const superHeroNames = data.data.map((hero) => hero.title);
        //     return superHeroNames
        // }
        // enabled:false,
    } 
    )
    

    console.log({isLoading, isFetching})


    if(isLoading || isFetching){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h1>React query product page</h1>
            <button className='btn' onClick={refetch}>Refresh</button>
            
            {data?.data.map((hero) =>{
                return <div key={hero.id}>
                    <Link className="list-products" to={`/rq-listproducts/${hero.id}`}>
                        <a className='single'>
                            
                            <h3>{hero.title}</h3>
                        </a>
                    </Link>
                    
                    </div>
            })}
            {/* {
                data.map(heroName =>{
                    return <div key={heroName}>{heroName}</div>
                })
            } */}

        </>
    )
}