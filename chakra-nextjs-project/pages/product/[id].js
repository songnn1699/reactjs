import { Box, Heading, Text, Image } from "@chakra-ui/react";

export const getStaticPaths = async() =>{
    const res=await fetch('https://fakestoreapi.com/products')
    const data= await res.json();

    const paths =data.map(user =>{
        return{
            params: {id: user.id.toString()}
        }
    })

    return{
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) =>{
    
    const id= context.params.id;
    const res = await fetch('https://fakestoreapi.com/products/' +id);
    const data = await res.json();

    return{
        props:{user:data}
    }

}

const Detail = ({user}) => {
    return (  
        <Box className="user-detail">
            <Heading className="heading-style" mb={10} textAlign="center">{user.title} Detail</Heading>
            <Image src={user.image} w={'200px'} h={'200px'} m="auto"></Image>
            <Text>Price: {user.price}</Text>
            <Text>Type: {user.category}</Text>
            <Text>Description: {user.description}</Text>
        </Box>
    );
}
 
export default Detail;