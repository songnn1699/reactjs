import React from "react";
import {useRef} from 'react'

import {
    useColorModeValue,
    Button,
    Flex,
    Box,
    Image,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    

}from '@chakra-ui/react'
import Link from 'next/link'
import DarkModeSwitch from '../components/DarkModeSwitch'
import { FaShoppingBag } from "react-icons/fa";
import Buy from "../pages/shoppingcart/ShoppingTab";



const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef();
    
    return ( 
        <Flex justifyContent={'space-between'}
                padding={'0px 100px'}
                alignItems='center'
                // bgGradient='linear(to-r, aquamarine, beige)'
                width={'100%'}
                height={'60px'}
                top ='0'
                position='fixed'
                zIndex='100'
                bgGradient={useColorModeValue('linear(to-b, orange.200, red.300)', 'linear(to-t, gray.800, gray.600)')}
                boxShadow={'0px 0px 10px 1px rgba(131, 129, 129, 0.5)'}
            >   
                <Flex>
                    <Link href='/' passHref>
                        <Image
                        cursor='pointer'
                        width={8}
                        height={8}
                        borderRadius={20}
                        
                        src={useColorModeValue('https://media.giphy.com/media/5NPhdqmyRxn8I/giphy.gif','https://cdn-icons-png.flaticon.com/512/2510/2510106.png')}>
                        
                        </Image>
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
                    <Link href='/authentication/login'>
                        <Button  mr={5}>Sign In</Button>
                    </Link>
                    <Link href='/authentication/signup'>
                        <Button  mr={5}>Sign Up</Button>
                    </Link>   
                    <IconButton mr={5} ref={btnRef} onClick={onOpen} icon={<FaShoppingBag/>}>
                    </IconButton>
                    <Drawer
                        size='lg'
                            zIndex={99999999}
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                        >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Shopping Cart</DrawerHeader>            
                            <DrawerBody>
                                <Buy></Buy>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button variant='outline' mr={3} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button colorScheme='blue'>Buy</Button>
                            </DrawerFooter>
                        </DrawerContent>
                        </Drawer>
                    <DarkModeSwitch></DarkModeSwitch>
                </Flex>  
            </Flex>
     );
}
 
export default Navbar;