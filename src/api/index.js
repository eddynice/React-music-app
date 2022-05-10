import axios from "axios";


const API = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });


export const getPost = () => API.get('/posts');
//export const singlePosts = (page) => API.get(`/post?page=${page}`);
export const singlePosts = (id) => API.get(`/posts/${id}`);
export const fetchComments = (postId) => API.get(`/comments?postId=${postId}`);
//console.log(getPost)

//const API = 'https://jsonplaceholder.typicode.com/posts';
//export const getPost = () => axios.get(API);