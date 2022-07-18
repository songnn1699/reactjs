import { VStack, Flex, Heading, IconButton, useColorMode, Spacer } from '@chakra-ui/react';
import React from 'react';
import {FaSun, FaInstagram, FaGithub,FaMoon, FaLinkedin} from 'react-icons/fa'
import Header from './components/Header'
import Profile from './components/Profile'
import Social from './components/Social'



function App() {

  const { colorMode, toggleColorMode} = useColorMode();
  const isdark = colorMode === 'dark';
  return (   
    <VStack p={5}>
      <Flex width="100%">
        <Heading size="md" colorfontWeight='semibold' color='cyan.500'>riverzy</Heading>
        <Spacer></Spacer>
        <IconButton icon={isdark ? <FaSun/> : <FaMoon/>} isRound='true' onClick={toggleColorMode} ></IconButton>
        <IconButton ml={2} icon={<FaInstagram/>} isRound='true' onClick={toggleColorMode} ></IconButton>
        <IconButton ml={2} icon={<FaLinkedin/>} isRound='true' onClick={toggleColorMode} ></IconButton>
        <IconButton ml={2} icon={<FaGithub/>} isRound='true' onClick={toggleColorMode} ></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
