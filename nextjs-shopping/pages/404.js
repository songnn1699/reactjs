// import Link from "next/link";
import { useEffect } from "react";
import {    useRouter   } from 'next/router'
import { Heading, Text, Box, Button, Link, Center, Spinner} from "@chakra-ui/react";



const NotFound = () => {
    const router= useRouter();

    useEffect (() =>{
        setTimeout(() => {
            router.push('/');        
        }, 10000);
    }, [])
    return ( 
        <Center mt={20}>
            <Spinner color='red.500' />
            <Box py={10} textAlign="center" px={6}>
                <Heading
                    display="inline-block"
                    as="h2"
                    size="2xl"
                    bgGradient="linear(to-r, teal.400, teal.600)"
                    backgroundClip="text">
                    404
                </Heading>
                <Text fontSize="18px" mt={3} mb={2}>
                    Page Not Found
                </Text>
                <Text color={'gray.500'} mb={6}>
                    The page you're looking for does not seem to exist
                </Text>
                <Link href="/" passhref>
                    <Button
                        colorScheme="teal"
                        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                        color="white"
                        variant="solid">
                        Go to Home
                    </Button>
                </Link>
            </Box>
        </Center>
     );
}
 
export default NotFound;