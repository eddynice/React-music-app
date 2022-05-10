import { FETCH_POSTS,GET_POST,START_LOADING,END_LOADING,GET_COMMENTS_SUCCESS } from "../constants/actionType"
import * as api from "../api";


export const getPosts = () =>async(dispatch)=>{
  try{
    dispatch({type:START_LOADING});
    const {data} = await api.getPost();
    dispatch({type:FETCH_POSTS,payload:data})
    dispatch({type :END_LOADING})
  } catch(error){
    console.log(error)
  }
}


export const getPost = (page)=> async(dispatch)=>{
  try {
      dispatch({type:START_LOADING});
      const {data} = await api.singlePosts(page);
      dispatch({type:GET_POST, payload:data})
      dispatch({type :END_LOADING})
  } catch (error) {
      console.log(error)
  }
}
export const getComments = (postId)=> async(dispatch)=>{
  try {
      dispatch({type:START_LOADING});
     const {data} = await api.fetchComments(postId);
      dispatch({type:GET_COMMENTS_SUCCESS, payload:data})
      dispatch({type :END_LOADING})
  } catch (error) {
      console.log(error)
  }
}

