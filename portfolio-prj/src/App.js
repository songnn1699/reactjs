import { useColorMode, VStack, Flex, Heading, IconButton, Spacer, } from '@chakra-ui/react';
import React from 'react';
import {FaSun, FaMoon, FaInstagram, FaGithub} from 'react-icons/fa'
import Header from './components/Header'
import Body from './components/Body'
import Profile from './components/Profile';



function App() {
  const {colorMode, toggleColorMode} = useColorMode();
  const isdark= colorMode === 'dark';


  return(
    <VStack p={5} >
      <Flex width='100%'>
          <Heading size='lg' colorfontWeight='semibold' color='red.300' >riverzy</Heading>
          <Spacer></Spacer>
          <IconButton icon={isdark ? <FaSun/> : <FaMoon/>} isRound='true' onClick={toggleColorMode}></IconButton>
          <IconButton icon={<FaInstagram/>} ml={5} isRound='true'></IconButton>
          <IconButton icon={<FaGithub/>} ml={5} isRound='true'></IconButton>
      </Flex>
    <Header></Header>
    <Body></Body>
    <Profile></Profile>



    </VStack>
  )
}

export default App;