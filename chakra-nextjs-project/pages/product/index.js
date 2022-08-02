import React, { useState } from 'react';

import Link from 'next/link';

import { 
    Center,
    useColorModeValue,
    Stack,
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
const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';



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
        a= user.products.filter(a => a.category === value)
        
    }
    



    return (
        <Center mt={70} pos='relative' flexDirection='column'>          
                <Heading mb={10}>
                    All Products
                </Heading>
                
                <Select size='lg'  
                        onChange={(e) => {
                            setValue(e.target.value);
                        }} >
                    <option value='All' >All</option>
                    <option value='smartphones' >Smartphone</option>
                    <option value='laptops' >Laptop</option>
                    <option value='fragrances' >Fragrance</option>
                    <option value='skincare' >Skincare</option>
                    <option value='groceries' >Groceries</option>
                    <option value='home-decoration'>Home decoration</option>
                </Select>    
                <SimpleGrid columns={4} spacing={10} mt={10} >
                    {a.map( list =>(
                        <Link href={'/product/'+list.id} key={list.id} >
                            <Center py={10} cursor='pointer'  >
                                <Box
                                    p={25}
                                    role={'group'}
                                    w={'280px'}
                                    height={'420px'}
                                    bg={useColorModeValue('white', 'gray.700')}
                                    boxShadow={'2xl'}
                                    rounded={'lg'}
                                    pos={'relative'}
                                    zIndex={0}>
                                    <Box
                                        rounded={'lg'}
                                        mt={-12}
                                        pos={'relative'}
                                        width={'230px'}
                                        height={'240px'}
                                        _after={{
                                            transition: 'all .3s ease',
                                            content: '""',
                                            w: 'full',
                                            h: 'full',
                                            pos: 'absolute',
                                            top: 5,
                                            left: 0,
                                            
                                            backgroundImage: `url(${list.thumbnail})`,
                                            filter: 'blur(20px)',
                                            zIndex: -1,
                                        }}
                                        _groupHover={{
                                            _after: {
                                            filter: 'blur(35px)',
                                            },
                                        }}>
                                    <Image
                                        rounded={'lg'}
                                        height={'240px'}
                                        width={'230px'}
                                        objectFit={'fill'}
                                        src={list.thumbnail}
                                    />
                                    </Box>
                                    <Stack pt={10} align={'center'}>
                                            <Text fontSize={'sm'} textTransform={'uppercase'}>
                                                Brand: <b>{list.brand}</b>
                                            </Text>
                                            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} textAlign="center">
                                                {list.title}
                                            </Heading>
                                            <Stack direction={'row'}>
                                                <Text fontWeight={800} fontSize={'xl'}>
                                                    ${list.price}
                                                </Text>
                                                <Text textDecoration={'line-through'} color={'gray.600'}>
                                                    $10000
                                                </Text>
                                            </Stack>
                                    </Stack>
                                </Box>
                            </Center>
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
                
        </Center>
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