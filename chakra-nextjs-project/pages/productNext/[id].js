import React from 'react';
import { useState } from 'react';
import { 
  Box, 
  Heading, 
  Text,
  Container,
  Stack,
  VStack,
  Button,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Link,
  useToast,

} from "@chakra-ui/react";

import {  useCart } from "react-use-cart";
import { ChevronLeftIcon} from '@chakra-ui/icons'

// import { useQuery } from "@tanstack/react-query";

import {FaShippingFast} from "react-icons/fa"
// import axios from 'axios'
// import CaptionCarousel from "../../components/Carousel";
import {useRouter } from 'next/router'
import Carousel from "../../components/CarouselDetail";


// NextJS Fectchich Data
export const getStaticPaths = async() =>{
    const res=await fetch('https://dummyjson.com/products')
    const data= await res.json();
    const paths =data.products.map(user =>{
        return{
            params: {id: user.id.toString()}
        }
    })
    return{
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) =>{
    const id= context.params.id;
    const res = await fetch('https://dummyjson.com/products/'+id);
    const data = await res.json();

    return{
        props:{user:data}
    }

}


// const fetchProducts = (prodid) =>{
//   return axios.get(`https://dummyjson.com/products/${prodid}`);
 
// }

export const Detail = ({user}) => {
    const [value, setValue] = useState()
    const router = useRouter()
    // const {id} = router.query
    const {addItem} =useCart()
    const toast= useToast()
    // const {isLoading, data, isFetching, isError, error} = useQuery(['products', id], () => fetchProducts(id))
    // if(isLoading || isFetching){
    //   return <Heading>Loading...</Heading>
    // } 	
    // if(isError){
    //     return <Heading>{error.message}</Heading>
    // }  


    return (  
      <Container maxW={'7xl'} mt={70}>
        <Link onClick={() =>{router.back()}}>
          <ChevronLeftIcon/>
          <b>Go Back</b>
        </Link>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Box>
            <Carousel
              data={user.images}
            ></Carousel>
          </Box>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {user.title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                ${user.price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                      {user.description}
                </Text>
                <Text>
                  {user.catergory}
                </Text>
                
              </VStack>
            </Stack>

            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              onClick={() => {
                addItem(user),
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
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <FaShippingFast/>
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
    </Container>
    );
}


 
export default Detail;