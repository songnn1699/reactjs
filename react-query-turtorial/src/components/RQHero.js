import { useHeroData } from "../hooks/useHeroData";
import { useParams } from "react-router-dom";

export const RQHero = () => {
    const {heroId}= useParams()
    
    const {isLoading, data, isError, error} = useHeroData(heroId)

    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <div>Product details</div>
            <div>{data?.data.title} - price:{data?.data.price} $</div>
        </div>

      );
}
 
export default RQHero;