// import Head from 'next/head'
// import DarkModeSwitch from '../components/DarkModeSwitch'
// import Container from '../components/Container'
import { Flex, Heading, Stack, Text, useColorMode, Image, Container } from '@chakra-ui/react';
import Carousel from '../components/Carousel';


export const getStaticProps= async() =>{
    const res= await fetch ('https://dummyjson.com/products')
    const data= await res.json('https://api.unsplash.com/photos/random?count=5');
    return{
        props:{user:data}
    }
}



const Home =(user) => {
  return (
    
      // <Head>
      //   <title>Home sweet Home</title>
      // </Head>
        <Container
          mt={70}
          display='block'
        >
          <Stack spacing='9'
            justifyContent='center'
            alignItems='center'
            m ='0 auto 4rem auto'
            maxWidth='1500px'       
          >
            <Flex
              flexDirection='column'
              justifyContent='center'
              width='auto'
            >
              <Heading>Hi i'm Song Nguyen</Heading>
              <Text>This is my page</Text>      
            </Flex>
            <Image
              h= '100%'
              w='100%'
              src='https://media.giphy.com/media/5NPhdqmyRxn8I/giphy.gif'
              borderRadius={300}
            ></Image>
          </Stack>
        </Container>
      
    
  );
}
 
export default Home; 