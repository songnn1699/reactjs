import React from "react";
import {
    Container,
    Center,
    useColorMode,
    Button,
    Flex,
    Box,
    Spacer,
    Stack,
    Image,
}from '@chakra-ui/react'
// import Link from 'next/link'
// import DarkModeSwitch from '../components/DarkModeSwitch'
import Footer from "./Footer";
import Navbar from "./Navbar";


const Main = ({children}) =>{

    return (
        <>
            <Navbar/>
            <Center as ='main'
                padding={"10px 150px"}   
                mt={70}       
                // minWidth={'40%'}
            >
                {children}
            </Center>
            <Footer></Footer>


        </>
    )
}
export default Main;