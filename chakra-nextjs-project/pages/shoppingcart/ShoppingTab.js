import {
  Image,
  Text,
  Box,
  Center,
  Flex,
  Heading,

  Stack,
  CloseButton,


  Button,
  useDisclosure,

} from '@chakra-ui/react'

import { useRef} from 'react'


import { useCart} from 'react-use-cart'


// export const getStaticProps= async() =>{
//   const res= await fetch ('https://dummyjson.com/products')
//   const data= await res.json();
//   return{
//       props:{user:data}
//   }
// }





export const Buy = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem: remove,
    cartTotal,
  } = useCart();
  
  if (isEmpty) return <Text>Your cart is empty</Text>;
  const handleRemove=(e) =>{
      console.log(e.id)
  }
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
                    <Stack spacing="0.5" mr={2} alignItems="center" >
                      <Text fontWeight="medium">{item.title}</Text> 
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
                  {/* ()=> removeItem(item.id) */}
                  <CloseButton onClick={()=> remove(item.id)}></CloseButton>
                  

                </Flex>
              </Flex>
              
              ))}
              
              <Heading>Total Price: {cartTotal} </Heading>
            </Stack>
          </Stack>
        </Stack>
      </Box>
  </Center>
  )

}
export default Buy;