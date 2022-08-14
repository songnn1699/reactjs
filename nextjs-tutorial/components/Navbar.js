import Link from 'next/link'
import Image from 'next/image';


const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png"
                    width={80}
                    height={80}
                />
                <h1>Foxy</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/user"><a>List</a></Link>
        </nav>
     );
}
 
export default Navbar ;