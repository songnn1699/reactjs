import React, { useState } from 'react';

import Link from 'next/link';

import { 
    
    MenuList,
    MenuItem,
    Stack,
    Menu, 
    MenuButton, 
    Flex, 
    Box, 
    Heading, 
    Text, 
    List, 
    Image, 
    SimpleGrid, 
    IconButton, 
    Button,
    Select,
    extendTheme
}     from '@chakra-ui/react';


import { FaShoppingCart } from 'react-icons/fa'
import styles from '../../styles/Contact.module.css'
// import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import axios from 'axios';
// import Filter from './filter';



// var filterValue=() => {
//     var e = document.getElementById("selectItem");
//     var text = e.options[e.selectedIndex].text;
//     return text
// }


export const getStaticProps= async() =>{
    const res= await fetch ('https://dummyjson.com/products')
    const data= await res.json();
    return{
        props:{user:data}
    }
}



   
   




// -----React Quey ---------------------
// const queryClient = new QueryClient()


// const fetchProducts=() =>{
//     return axios.get('https://fakestoreapi.com/products')
// } 




export const Products = ({user}) => {
  
 
    // React-Query---------------------------------
    // const {isLoading, data, isError, error, isFetching}= useQuery(['products'], fetchProducts)

    // if(isLoading || isFetching){
    //     return <Heading>Loading...</Heading>
    // }
    // if(isError){
    //     return <Heading>{error.message}</Heading>
    // }

    
    
    const [value, setValue] = useState('All');
    // console.log(text);

    const a=user.products;
    if( value !== 'All'){
        a= user.products.filter(a => a.brand=== value)
        
    }
    



    return (
        <Stack mt={70}>          
                <Heading className="heading-style" mb={10}>
                    All Products
                </Heading>
                
                <Select size='lg'   
                        onChange={(e) => {
                            setValue(e.target.value);
                        }} >
                    <option value='All' >All</option>
                    <option value='Apple' >Apple</option>
                    <option value='Samsung' >Samsung</option>
                </Select>    
                <SimpleGrid columns={4} spacing={10} mt={10}>
                    {a.map( list =>(
                        <Link href={'/product/'+list.id} key={list.id} >
                            <Box  height='500px' className={styles.single} align='center' cursor='pointer' pos={'relative'}>
                                <Image src={list.thumbnail} w={'200px'} h={'200px'} mt={5} borderRadius={15}></Image> 
                                <List >
                                    <b>
                                        <Text >
                                            {list.title} 
                                        </Text>
                                    </b>
                                    <Text>
                                        $ {list.price}
                                    </Text>
                                    <Flex justifyContent="center"  pos={'absolute'} bottom="3" left='50%' transform='translateX(-50%)'spacing='10px'>
                                        <Link href='/buy'>
                                            <Button  bg='black' color='white' _hover={{color:'black', backgroundColor:'red.300'}} marginRight={5} >Buy now!</Button>
                                        </Link>
                                        <IconButton _hover={{backgroundColor:'red.300'}} border='1px solid black'><FaShoppingCart/></IconButton>
                                    </Flex>
                                </List>
                            </Box>
                        </Link>                   
                    ))}
                </SimpleGrid>
                     {/* {user.products.map( list =>(
                            <Link href={'/product/'+list.id} key={list.id} >
                                <Box  height='500px' className={styles.single} align='center' cursor='pointer' pos={'relative'}>
                                    <Image src={list.thumbnail} w={'200px'} h={'200px'} mt={5} borderRadius={15}></Image> 
                                    <List >
                                        <b>
                                            <Text >
                                                {list.title} 
                                            </Text>
                                        </b>
                                        <Text>
                                            $ {list.price}
                                        </Text>
                                        <Flex justifyContent="center"  pos={'absolute'} bottom="3" left='50%' transform='translateX(-50%)'spacing='10px'>
                                            <Link href='/buy'>
                                                <Button  bg='black' color='white' _hover={{color:'black', backgroundColor:'red.300'}} marginRight={5} >Buy now!</Button>
                                            </Link>
                                            <IconButton _hover={{backgroundColor:'red.300'}} border='1px solid black'><FaShoppingCart/></IconButton>
                                        </Flex>
                                    </List>
                                </Box>
                            </Link>                   
                    ))} */}
                
        </Stack>
     );
}

// ReactQuery-------------------------------------------------------------
// const Products = () => {
//     return (
//         <QueryClientProvider client={queryClient}>
//             <Contact/>
//         </QueryClientProvider>

//       );
// }
 
export default Products;