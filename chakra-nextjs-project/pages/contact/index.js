import Link from 'next/link';
import { Stack, Flex, Box, Heading, Text, List} from '@chakra-ui/react';

import styles from '../../styles/Contact.module.css'


export const getStaticProps= async() =>{
    const res= await fetch ('https://jsonplaceholder.typicode.com/users')
    const data= await res.json();
    return{
        props: {user:data}
    }
}



const Contact = ({user}) => {
    return (
        <> 
            <Heading>
            All Users Contact
            </Heading>
            <Box className='list-user'>
                {user.map(list =>(
                    <Link href={'/contact/' +list.id} key={list.id} >
                        <List className={styles.single} bgGradient='linear(to-r, aquamarine, beige) '>
                            <b>
                                <Text>
                                    {list.name} - {list.username}
                                </Text>
                            </b>
                            <Text>
                                {list.phone}
                            </Text>
                        </List>
                    </Link>
                ))}
            </Box>
        </>
     );
}
 
export default Contact;