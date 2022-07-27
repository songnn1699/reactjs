import Link from 'next/link';
import { Stack, Flex, Box, Heading, Text, List, Image, Grid, GridItem, SimpleGrid, IconButton, Button} from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa'
import styles from '../../styles/Contact.module.css'


export const getStaticProps= async() =>{
    const res= await fetch ('https://fakestoreapi.com/products')
    const data= await res.json();
    return{
        props: {user:data}
    }
}



const Contact = ({user}) => {
    return (
        <> 
            <Heading className="heading-style" >
                All Products
            </Heading>
            <SimpleGrid columns={4} spacing={10} mt={10}>
                {user.map(list =>(
                        <Link href={'/product/' +list.id} key={list.id} >
                            <Box  height='500px' className={styles.single} align='center' cursor='pointer' pos={'relative'}>
                                <Image src={list.image} w={'200px'} h={'200px'} mt={5}></Image>
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
                                        <Button bg='black' color='white' _hover={{color:'black', backgroundColor:'red.300'}} marginRight={5} >Buy now!</Button>
                                        <IconButton _hover={{backgroundColor: 'pink'}} border='1px solid black'><FaShoppingCart/></IconButton>
                                    </Flex>
                                    
                                </List>
                            </Box>
                        </Link>
                    
                ))}
            </SimpleGrid>
        </>
     );
}
 
export default Contact;