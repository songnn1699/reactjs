import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { useCart } from "react-use-cart";


import { 
    Center,
    useColorModeValue,
    Stack,
    Box, 
    Heading, 
    Text,   
    Image, 
    SimpleGrid, 
    Button,
    Select,
    Input,
    useToast,
}     from '@chakra-ui/react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


// ----NextJS Fetching---------------------------------------------------
// export const getStaticProps= async() =>{
//     const res= await fetch ('https://dummyjson.com/products')
//     const data= await res.json();
//     return{
//         props:{user:data}
//     }
// }

const fetchProducts =() =>{
    return axios.get('https://dummyjson.com/products')
}


export const Products = () => {
    const [value, setValue] = useState('All');    
    const [search, setSearch] = useState('');
    
    const {isLoading, data, isError, error, isFetching}= useQuery(['products'], fetchProducts, {
        refetchOnWindowFocus: false,

    })
    const {addItem} = useCart();
    const toast = useToast()
    
    if(isLoading || isFetching){
        return <Heading>Loading...</Heading>
    }
    if(isError){
        return <Heading>{error.message}</Heading>
    }
    // Clear data.map
    const query=data?.data.products;  

    if( value !== 'All'){
        query= data?.data.products.filter(a => a.category === value)   
    }
    if(search !== ''){
        query=data?.data.products.filter(z => 
            (z.title.toLowerCase().includes(search)) || (z.brand.toLowerCase().includes(search)) || (z.brand.toUpperCase().includes(search)) || (z.title.toUpperCase().includes(search)) || (z.brand.includes(search)) || (z.title.includes(search))) 
    }
    const handleSearch=(e) =>{
        setSearch(e.target.value)
        console.log (e.target.value)
    }
    return (
        <Center mt={70} pos='relative' flexDirection='column'>          
                <Heading mb={10}>
                    All Products ReactQuery
                </Heading>
                
                <Input placeholder='Search' mb={5} size='lg' value={search} onChange={handleSearch} width={'auto'} maxWidth={'1000px'}/>
                <Select size='lg'  width={'auto'} maxWidth={'1000px'}
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
                <SimpleGrid columns={4} spacing={10} mt={10} width={'auto'}>
                    {query.map( list =>(                      
                            <Center py={10} cursor='pointer'  key={list.id} >
                                <Box
                                    p={25}
                                    role={'group'}
                                    w={'auto'}
                                    height={'auto'}
                                    bg={useColorModeValue('white', 'gray.700')}
                                    boxShadow={'2xl'}
                                    rounded={'lg'}
                                    pos={'relative'}
                                    zIndex={0}>
                                    <Box

                                        rounded={'lg'}
                                        mt={-20}
                                        pos={'relative'}
                                        width={'auto'}
                                        height={'auto'}
                                        _after={{
                                            transition: 'all .3s ease',
                                            content: '""',
                                            w: '100%',
                                            h: '100%',
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

                                    <Link href={`/product/${list.id}`} key={list.id} >
                                        <Image
                                            rounded={'lg'}
                                            height={'auto'}
                                            width={'auto'}
                                            objectFit={'cover'}
                                            src={list.thumbnail}
                                        />
                                    </Link>
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
                                            <Button onClick={() => {
                                                addItem(list),
                                                toast({
                                                    title: 'Successfully addItem',
                                                    status: 'success',
                                                    isClosable: true,
                                                    duration:3000,
                                                    position: 'bottom-left',

                                                  })
                                                }}>  
                                                Add to cart
                                            </Button>
                                    </Stack>
                                </Box>
                            </Center>                   
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