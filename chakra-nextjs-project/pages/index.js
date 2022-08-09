// import Head from 'next/head'
// import DarkModeSwitch from '../components/DarkModeSwitch'
// import Container from '../components/Container'
import { Flex, Heading, Stack, Text, useColorMode, Image, Container, AspectRatio, Center, Box } from '@chakra-ui/react';
import CarouselHome from '../components/CarouselHome';

// client id unsplash: vMRhfaPfadaQ5anWl1Zttb3uFoHr_p6zcLNclnF2mNg

export const getStaticProps= async() =>{
      const res= await fetch ('https://api.unsplash.com/photos/random?count=10&client_id=vMRhfaPfadaQ5anWl1Zttb3uFoHr_p6zcLNclnF2mNg')
      const data= await res.json();
      return{
          props:{user:data}
      }
  }


export const Home =({user}) => {
  return (
    
      // <Head>
      //   <title>Home sweet Home</title>
      // </Head>
        <Center
          flexDirection={'column'}
          // alignItems ='center'
          align='center'
          mt={70}
          // display='block'
          width='auto'
        >
            <Flex
              flexDirection='column'
              width='auto'
            >
              <Heading>Hi i'm Song Nguyen</Heading>
              <Text>This is my page</Text>      
            </Flex>
            <Box width='2000px' height='800px' mt={10}>
              <CarouselHome  data={user}></CarouselHome>      
            </Box>
            
        </Center>
  );
}
 
export default Home; 