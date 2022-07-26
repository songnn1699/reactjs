// import Head from 'next/head'
// import DarkModeSwitch from '../components/DarkModeSwitch'
// import Container from '../components/Container'
import { Flex, Heading, Stack, Text, useColorMode, Image } from '@chakra-ui/react';

const Home =() => {
  return (
    
      // <Head>
      //   <title>Home sweet Home</title>
      // </Head>
      <>
        <Stack spacing='9'

          justifyContent='center'
          alignItems='center'
          m ='0 auto 4rem auto'
          maxWidth='1000px'       
        >
          <Flex
            flexDirection='column'
            justifyContent='center'
            width={'1000px'}
          >
            <Heading>Hi I'm Song Nguyen</Heading>
            <Text>This is my page</Text>      

          </Flex>
          <Image src='https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80'>
          </Image>
        </Stack>
        </>
      
    
  );
}
 
export default Home; 