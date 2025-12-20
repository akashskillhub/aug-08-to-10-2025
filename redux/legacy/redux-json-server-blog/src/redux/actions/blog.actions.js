import axios from "axios"
import { BLOG_CREATE_FAIL, BLOG_CREATE_SUCCESS, BLOG_READ_FAIL, BLOG_READ_SUCCESS } from "../constants/blog.constants"

const API_URL = "http://localhost:5000/articles"

export const createBlog = formdata => {
    return async (disptch) => {
        try {
            await axios.post(API_URL, formdata)
            disptch({ type: BLOG_CREATE_SUCCESS, payload: "" }) // reduxStore.dispatch  === dispatch
        } catch (error) {
            disptch({ type: BLOG_CREATE_FAIL, payload: error })
        }
    }
}

export const readBlogs = userData => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(API_URL)
        dispatch({ type: BLOG_READ_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: BLOG_READ_FAIL, payload: error.message })
    }
}
