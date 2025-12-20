import axios from "axios"
import { CREATE_BLOG_FAIL, CREATE_BLOG_REQUEST, CREATE_BLOG_SUCCESS, DELETE_BLOG_FAIL, DELETE_BLOG_REQUEST, DELETE_BLOG_SUCCESS, READ_BLOG_FAIL, READ_BLOG_REQUEST, READ_BLOG_SUCCESS } from "../constants/blog.constants"

const API_URL = "http://localhost:5000/articles"

export const createBlog = blogData => async (dispatch, getState) => {
    try {
        dispatch({ type: CREATE_BLOG_REQUEST, })
        const { data } = await axios.post(API_URL, blogData)
        dispatch({ type: CREATE_BLOG_SUCCESS })
    } catch (error) {
        dispatch({ type: CREATE_BLOG_FAIL, payload: error.message })
    }
}

export const readBlog = blogData => async (dispatch, getState) => {
    try {
        dispatch({ type: READ_BLOG_REQUEST })
        const { data } = await axios.get(API_URL)
        dispatch({ type: READ_BLOG_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: READ_BLOG_FAIL, payload: error.message })
    }
}

export const deleteBlog = id => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_BLOG_REQUEST })
        const { data } = await axios.delete(`${API_URL}/${id}`)
        dispatch({ type: DELETE_BLOG_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: DELETE_BLOG_FAIL, payload: error.message })
    }
}