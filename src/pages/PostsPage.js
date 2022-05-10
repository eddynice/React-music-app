import React from 'react'
import { useSelector } from 'react-redux';
import { Post } from '../components/Post'

const PostsPage = () => {
  const   {posts,  isLoading} = useSelector((state)=> state.post);

   if(!posts.length && !isLoading) return "No Posts";
   //if (hasErrors) return <p>Unable to display posts.</p>


  return (
    isLoading ? "LOADING "
      : (
       <section>
         <h1>Posts</h1>
        {posts.map((post)=>(
          <>
            <Post post={post} key={post.id} excerpt />
            </>
        ))}

       </section>
         
       )
    )
}

export default PostsPage