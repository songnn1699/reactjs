import React from "react";
import {
    useColorModeValue,
    Button,
    Flex,
    Box,
    Spacer,
    Image,
    IconButton,
}from '@chakra-ui/react'
import Link from 'next/link'
import DarkModeSwitch from '../components/DarkModeSwitch'
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
    return ( 
        <Flex justifyContent={'space-between'}
                padding={'0px 100px'}
                alignItems='center'
                // bgGradient='linear(to-r, aquamarine, beige)'
                width={'100%'}
                height={'60px'}
                top ='0'
                position='fixed'
                zIndex='9999999'
                bgGradient={useColorModeValue('linear(to-r, orange.200, red.300)', 'linear(to-r, gray.800, gray.600)')}
                boxShadow={'0px 0px 10px 1px rgba(131, 129, 129, 0.5)'}
            >   
                <Flex>
                    <Link href='/' passHref>
                        <Image 
                        cursor='pointer'
                        width={8}
                        height={8}
                        src='https://cdn-icons-png.flaticon.com/512/2316/2316698.png'></Image>
                    </Link>
                    <Box>
                        <Link href ='/' passHref>
                            <Button as= 'a' variant='ghost'  _hover={{backgroundColor: "red.300" } }>
                                Home
                            </Button>
                        </Link>
                        <Link href ='/about' passHref>
                            <Button as= 'a' variant='ghost' _hover={{backgroundColor: "red.300" }}>
                                About
                            </Button>
                        </Link>
                        <Link href ='/product' passHref>
                            <Button as= 'a' variant='ghost'  _hover={{backgroundColor: "red.300" }}>
                                Products
                            </Button>
                        </Link>
                        
                        
                    </Box>
                </Flex>
                <Flex>
                    <Link href='/login'>
                        <Button  mr={5}>Login</Button>
                    </Link>
                    <IconButton mr={5}>
                        <FaShoppingBag></FaShoppingBag>
                    </IconButton>
                    <DarkModeSwitch></DarkModeSwitch>
                </Flex>  
            </Flex>
     );
}
 
export default Navbar;