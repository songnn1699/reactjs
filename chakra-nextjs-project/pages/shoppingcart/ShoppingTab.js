import {
  Image,
  Text,
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  CloseButton,
  Select,
  useColorModeValue,
  Button,
} from '@chakra-ui/react'

import {useState} from 'react'


import { CartOrderSummary } from './CartOrderSummary'
import { useCart} from 'react-use-cart'
import { PriceTag } from './PriceTag'

export const getStaticProps= async() =>{
  const res= await fetch ('https://dummyjson.com/products')
  const data= await res.json();
  return{
      props:{user:data}
  }
}





export const Buy = ({user}) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    totalItems,
    cartTotal,
  } = useCart();
  if (isEmpty) return <Text>Your cart is empty</Text>;
  

  


  return (
    <Center>
      <Box
        maxW={{
          base: '3xl',
          lg: '7xl',
        }}
        mx="auto"
        px={{
          base: '4',
          md: '8',
          lg: '12',
        }}
        py={{
          base: '6',
          md: '8',
          lg: '12',
        }}
      >
        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          align={{
            lg: 'flex-start',
          }}
          spacing={{
            base: '8',
            md: '16',
          }}
        >
          <Stack
            spacing={{
              base: '8',
              md: '10',
            }}
            flex="2"
          >
            <Heading>
              Total Item: {totalUniqueItems}
            </Heading>

            <Stack spacing="6">
              {items.map((item) => (
                <Flex
                direction={{
                  base: 'column',
                  md: 'row',
                }}
                justify="space-between"
                align="center"
              >
                <Stack direction="row" spacing="5" width="full">
                  <Image
                    rounded="lg"
                    width="120px"
                    height="120px"
                    fit="cover"
                    src={item.thumbnail}
                    alt=''
                    draggable="false"
                    loading="lazy"
                  />
                  <Box pt="4">
                    <Stack spacing="0.5">
                      <Text fontWeight="medium">{item.title}</Text>
                      <Text color={useColorModeValue('gray.600', 'gray.400')} fontSize="sm">
                        {item.description}
                      </Text>
                    </Stack>
                  </Box>
                </Stack>
          
                {/* Desktop */}
                <Flex
                  width="full"
                  justify="space-between"
                  display={{
                    base: 'none',
                    md: 'flex',
                  }}
                >
                  <PriceTag price={item.price}  />
                  
                  <Button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >
                      -
                  </Button>
                  <Text fontSize='25px'>{item.quantity}</Text>
                  <Button
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >
                      +
                  </Button>
                  <CloseButton onClick={() => removeItem(item.id)}/>
                </Flex>
              </Flex>
              
              ))}
              
              <Heading>Total Price: {cartTotal} </Heading>
            </Stack>
          </Stack>
          {/* <Flex direction="column" align="center" flex="1">
            <CartOrderSummary 
              price={user.products.price}
            />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link color={useColorModeValue('blue.500', 'blue.200')} href="/product">Continue shopping</Link>
            </HStack>
          </Flex> */}
        </Stack>
      </Box>
  </Center>
  )

}
export default Buy;