
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
import {filterValue} from './index.js'


export const getStaticProps= async() =>{
    const res= await fetch ('https://dummyjson.com/products')
    const data= await res.json();
    return{
        props:{user:data}
    }
}


export const Filter = ({user}) => { 

        if(filterValue === 'All'){
            return(
                <SimpleGrid columns={4} spacing={10} mt={10}>
                    {user.products.map( list =>(
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
            )
        }
        else if(filterValue === 'Men'){
            return(
                <SimpleGrid columns={4} spacing={10} mt={10}>
                    {user.products.map( list =>(
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
            )
        }
        
    //     else {
    //         return(
    //         <SimpleGrid columns={4} spacing={10} mt={10}>
    //             {user.products.map( list =>(
    //                 <Link href={'/product/'+list.id} key={list.id} >
    //                     <Box  height='500px' className={styles.single} align='center' cursor='pointer' pos={'relative'}>
    //                         <Image src={list.thumbnail} w={'200px'} h={'200px'} mt={5} borderRadius={15}></Image> 
    //                         <List >
    //                             <b>
    //                                 <Text >
    //                                     {list.title} 
    //                                 </Text>
    //                             </b>
    //                             <Text>
    //                                     $ {list.price}
    //                             </Text>
    //                             <Flex justifyContent="center"  pos={'absolute'} bottom="3" left='50%' transform='translateX(-50%)'spacing='10px'>
    //                                 <Link href='/buy'>
    //                                     <Button  bg='black' color='white' _hover={{color:'black', backgroundColor:'red.300'}} marginRight={5} >Buy now!</Button>
    //                                 </Link>
    //                                 <IconButton _hover={{backgroundColor:'red.300'}} border='1px solid black'><FaShoppingCart/></IconButton>
    //                             </Flex>
    //                         </List>
    //                     </Box>
    //                 </Link>                   
    //             ))}
    //         </SimpleGrid>
    //     )
    // }


    
}
 
export default Filter;