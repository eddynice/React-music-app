import React, { useEffect} from 'react'

import { getPost ,getComments} from '../actions/postActions'
import {useSelector} from "react-redux"
import { Post } from '../components/Post'
import { Comment } from '../components/Comment';
import {useParams} from "react-router-dom";
import { useDispatch } from "react-redux";

const SinglePostPage = () => {
  
  const   {posts, isLoading,comments} = useSelector((state)=> state.post);
    const dispatch = useDispatch();
    const { id } = useParams();


    useEffect(()=>{
      dispatch(getPost(id))
      dispatch(getComments(id))
    },[id,dispatch]);


    if(!posts) return null;
    if(isLoading){
      return(
        <div>
          <h1>loading</h1>
        </div>
      )
    }
  
    if(!comments.length && !isLoading) return "No comments";

  return (
    <section>
      <h1>MY POST</h1>
      <Post post={posts} />
      <h2>Comments</h2>
     
      {comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
    </section>
  )
}



export default SinglePostPage
