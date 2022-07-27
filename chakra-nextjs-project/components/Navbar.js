import React from "react";
import {
    useColorMode,
    Button,
    Flex,
    Box,
    Spacer,
    Image,
}from '@chakra-ui/react'
import Link from 'next/link'
import DarkModeSwitch from '../components/DarkModeSwitch'

const Navbar = () => {
    return ( 
        <Flex justifyContent={'space-between'}
                margin = {'10px 150px 0px 150px'}
                position='sticky'

            >   
                <Flex alignItems='center'>
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
                <Flex >
                    <Link href='/login'>
                        <Button  mr={5}>Login</Button>
                    </Link>
                    <DarkModeSwitch></DarkModeSwitch>
                </Flex>  
            </Flex>
     );
}
 
export default Navbar;