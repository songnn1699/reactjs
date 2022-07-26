import { Box, Heading, Text } from "@chakra-ui/react";

export const getStaticPaths = async() =>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
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
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' +id);
    const data = await res.json();

    return{
        props:{user:data}
    }

}

const Detail = ({user}) => {
    return (  
        <Box className="user-detail">
            <Heading>{user.name} Detail</Heading>
            <Text>Username: {user.username}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Phone: {user.phone}</Text>
        </Box>
    );
}
 
export default Detail;