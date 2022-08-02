import React from "react";
import {
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


const Container = ({children}) =>{

    return (
        <>
            <Navbar/>
            <Center as ='main'
                padding={"10px 200px"}          
            >
                {children}
            </Center>
            <Footer></Footer>


        </>
    )
}
export default Container;