import {useEffect, useState}  from  'react'

function Content(){
    const [title, setTitle]= useState('')
    const [posts, setPosts] = useState([])
    const [type, setType]= useState('posts')
    const [showGoToTop, setShowGoToTop] = useState();

    const tab=['posts', 'comments', 'albums']
    useEffect(() =>{
        
        

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts =>{
            setPosts(posts)  
        })
    }, [type])

    useEffect(() =>{

        const handlescroll =() =>{
            setShowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handlescroll)

        return () =>{
            window.removeEventListener('scroll', handlescroll)
        }

    },[])



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
            {showGoToTop &&(
                <button style={{ position: 'fixed', right: 20, bottom: 20 }}>
                    Go To Top
                </button>
            ) }
        </div>
    )
}
export default Content