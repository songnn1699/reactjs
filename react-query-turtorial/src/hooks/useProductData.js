import {useQuery} from 'react-query'
import axios from 'axios'


const fetchHero =(heroId) =>{
    return axios.get(`https://fakestoreapi.com/products/${heroId}`)
}

export const useProductData =(heroId) => {
    return ( 
        useQuery(['list-product', heroId], () => fetchHero(heroId)) 
        
    );
}
 
