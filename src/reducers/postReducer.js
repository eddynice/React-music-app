//import * as actions from '../actions/postActions'
import { FETCH_POSTS, GET_POST, GET_COMMENTS_SUCCESS, START_LOADING, END_LOADING } from "../constants/actionType"

export default function postReducer(state = { isLoading: true, comments: [], hasErrors: false, posts: {} }, action) {
    switch (action.type) {
        case START_LOADING:
            return {...state, isLoading: true };
        case END_LOADING:
            return {...state, isLoading: false }
        case FETCH_POSTS:
            return {...state, posts: action.payload, isLoading: true }
        case GET_POST:
            return {...state, posts: action.payload, isLoading: true }
        case GET_COMMENTS_SUCCESS:
            return {...state, comments: action.payload, isLoading: true }



        default:
            return state
    }
}