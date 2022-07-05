import {useEffect, useState}  from  'react'

function Content(){
    const [title, setTitle]= useState('')
    const [posts, setPosts] = useState([])
    const [type, setType]= useState('posts')

    const tab=['post', 'comments', 'albums']
    useEffect(() =>{
        
        

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts =>{
            setPosts(posts)  
        })
    }, [type])


    return (
        <div>
            {tab.map(tab =>(
                <button
                    key={tab}
                    style = {type === tab ? {color: '#fff', backgroundColor: '#333'} : {}}
                    onClick={() => setType(tab)}    
                >
                    {tab}

                </button>
            ))}

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}

            />
            <ul>
                {posts.map(post =>(
                    <li key={post.id}>
                        {post.title || post.name}
                    </li>

                ))}

            </ul>
        </div>


    )
}
export default Content