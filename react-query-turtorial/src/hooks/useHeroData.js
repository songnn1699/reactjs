import {useQuery} from 'react-query'
import axios from 'axios'


const fetchHero =(heroId) =>{
    return axios.get(`https://fakestoreapi.com/products/${heroId}`)
}

export const useHeroData =(heroId) => {
    return ( 
        useQuery(['super-heroes', heroId], () => fetchHero(heroId)) 
        
    );
}
 
