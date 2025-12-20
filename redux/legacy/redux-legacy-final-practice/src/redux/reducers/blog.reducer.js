import { CREATE_BLOG_FAIL, CREATE_BLOG_REQUEST, CREATE_BLOG_SUCCESS, DELETE_BLOG_FAIL, DELETE_BLOG_REQUEST, DELETE_BLOG_SUCCESS, READ_BLOG_FAIL, READ_BLOG_REQUEST, READ_BLOG_SUCCESS } from "../constants/blog.constants"

export const blogReducer = (state = { allBlogs: [] }, { type, payload }) => {
    switch (type) {
        case CREATE_BLOG_REQUEST: return { ...state, loading: true, reload: false }
        case CREATE_BLOG_SUCCESS: return { ...state, loading: false, success: true, reload: true }
        case CREATE_BLOG_FAIL: return { ...state, loading: false, error: payload, reload: false }

        case READ_BLOG_REQUEST: return { ...state, loading: true }
        case READ_BLOG_SUCCESS: return { ...state, loading: false, success: true, allBlogs: payload }
        case READ_BLOG_FAIL: return { ...state, loading: false, error: payload }

        case DELETE_BLOG_REQUEST: return { ...state, loading: true, reload: false }
        case DELETE_BLOG_SUCCESS: return { ...state, loading: false, success: true, reload: true }
        case DELETE_BLOG_FAIL: return { ...state, loading: false, error: payload }

        default: return state
    }
}