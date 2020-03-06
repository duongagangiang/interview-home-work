import REST_API from '../utils/API'
import { POSTS } from '../constants/endpoints'
import * as ActionTypes from './types'

export const startFetchPosts = () => ({
    type: ActionTypes.START_FETCH_POSTS
})

export const processFetchPosts = (posts) => ({
    type: ActionTypes.PROCESS_FETCH_POSTS,
    payload: posts
}) 

export const endFetchPosts = (error) => ({
    type: ActionTypes.END_FETCH_POSTS,
    payload: error
})

export const getPosts = () => async (dispatch) => {
    try {
        dispatch(startFetchPosts())
        const results = await REST_API.get(POSTS)
        dispatch(processFetchPosts(results.data))
    } catch (error) {
        dispatch(endFetchPosts(error))
    }
}

export const createNewPost = (post, push) => async dispatch => {
    try {
        if ('token' in localStorage) {
            const res = await REST_API.post(POSTS, post, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            dispatch(getPosts());
            push('/')
        } else {
            push('/sign-in')
        }    
    } catch(e) {
        console.log(e)
    }
}