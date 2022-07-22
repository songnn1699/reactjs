import { useProductData } from "../hooks/useProductData";
import { useParams } from "react-router-dom";

export const RQProduct = () => {
    const {productId}= useParams()
    
    const {isLoading, data, isError, error} = useProductData(productId)

    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <h1>Product details</h1>
            <div>{data?.data.title} - price:{data?.data.price} $</div>
        </div>

      );
}
 