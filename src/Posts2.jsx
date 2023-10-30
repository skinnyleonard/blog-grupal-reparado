import { useState } from "react";
import { useEffect } from "react";
import Posts from "./Posts";

function Posts(){
const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data);
        })
    },[])

    return(
        <>
          {posts.map(post => <Post title={post.title} body={post.body}/>)}
        </>
    )
}
export default Posts;

function Post(props) {
  const { title, body } = props;
  return (   
      <div className="contenedor" style={{display:'inline-block', maxWidth: '350px', marginLeft: '20px', padding: '5px', background: 'grey', borderRadius: '20px', marginTop: '20px', border:'1px solid black'}}>
          <h2 className="comentarios">{title}</h2>
          <p>{body}</p>  
      </div>
  );
}