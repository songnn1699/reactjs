import styles from '../../styles/User.module.css';
import Link from 'next/link';


export const getStaticProps = async() =>{
    const res= await fetch('https://fakestoreapi.com/users')
    const data = await res.json();
    
    return {
        props: {user: data}
    }
}

const UserList = ({user}) => {
    return ( 
        <div>
            <h1>All Users</h1>
            <div className="">
            {user.map(list =>(
                <Link href={'/user/' + list.id} key={list.id}  >
                    <a className={styles.single}>
                        <h3>{list.name.firstname} {list.name.lastname}</h3>
                        <h3>{list.phone}</h3>
                    </a>
                </Link>
            ))}
            </div>
        </div>
     );
}
 
export default UserList;