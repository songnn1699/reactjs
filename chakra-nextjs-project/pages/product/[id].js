import { Box, Heading, Text, Image 
  ,Container,
  Stack,
  Flex,
  VStack,
  Button,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,

} from "@chakra-ui/react";
import { Rerousel } from "rerousel";




import { useRef } from "react";
import {FaShippingFast} from "react-icons/fa"
// import CaptionCarousel from "../../components/Carousel";


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

const Detail = ({user}) => {
    const ref = useRef(null);
    return (  
      <Container maxW={'7xl'} mt={70}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Box>
            
            {/* <Image
              alt={'product image'}
              src={
                user.thumbnail
              }
              fit={'fill'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            /> */}
            <Rerousel itemRef={ref}>
              
              <img className="carousel"
                src={user.images[0]}
                ref={ref}></img>
              <img className="carousel" src={user.images[1]} ></img>
              <img src={user.images[2]} className="carousel" ></img>
              <img src={user.images[3]} className="carousel"></img>
            </Rerousel>

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