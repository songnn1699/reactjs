import React from "react";
import {
    useColorMode,
    Button,
    Flex,
    Box,
    Spacer,
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
            <Flex as ='main'
                flexDirection='column'
                width={'1200px'}
                margin={'auto'}
                mb={20}
                minWidth={500}
                alignItems='center'
                mt={10}
            >
                {children}
            </Flex>
            <Footer></Footer>


        </>
    )
}
export default Container;