export const getStaticPaths = async() =>{
    const res=await fetch('https://fakestoreapi.com/users')
    const data= await res.json();

    const paths =data.map(user =>{
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
    const res = await fetch('https://fakestoreapi.com/users/' +id);
    const data = await res.json();

    return{
        props:{user:data}
    }

}

const Detail = ({user}) => {
    return (  
        <div className="user-detail">
            <h1>{user.name.firstname} {user.name.lastname} </h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
}
 
export default Detail;