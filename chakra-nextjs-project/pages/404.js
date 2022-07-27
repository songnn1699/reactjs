import Link from "next/link";
import { useEffect } from "react";
import {    useRouter   } from 'next/router'
import { Heading, Text } from "@chakra-ui/react";



const NotFound = () => {
    const router= useRouter();

    useEffect (() =>{
        setTimeout(() => {
            router.push('/');        
        }, 10000);
    }, [])
    return ( 
        <div className="not-found">
            <Heading>Oops...</Heading>
            <Text>That page can not found</Text>
            <Text>Go back to the <Link href='/'><a><b>Home Page</b></a></Link></Text>
        </div>
     );
}
 
export default NotFound;