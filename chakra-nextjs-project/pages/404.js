import Link from "next/link";
import { useEffect } from "react";
import {    useRouter   } from 'next/router'



const NotFound = () => {
    const router= useRouter();

    useEffect (() =>{
        setTimeout(() => {
            router.push('/');        
        }, 10000);
    }, [])
    return ( 
        <div className="not-found">
            <h1>Oops...</h1>
            <h2>That page can not found</h2>
            <p >Go back to the <Link href='/'><a><b>Home Page</b></a></Link></p>
        </div>
     );
}
 
export default NotFound;