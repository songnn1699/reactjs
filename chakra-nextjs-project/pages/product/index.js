import Link from 'next/link';
import { Stack, Flex, Box, Heading, Text, List, Image, Grid, GridItem, SimpleGrid} from '@chakra-ui/react';

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
                            <Box  height='350px' className={styles.single} align='center' cursor='pointer'>
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
                                </List>
                            </Box>
                        </Link>
                    
                ))}
            </SimpleGrid>
        </>
     );
}
 
export default Contact;