// import { BLOG_CREATE_FAIL, BLOG_CREATE_SUCCESS, BLOG_READ_FAIL, BLOG_READ_SUCCESS } from "../constants/blog.constants"

import { BLOG_CREATE_FAIL, BLOG_CREATE_SUCCESS, BLOG_READ_FAIL, BLOG_READ_SUCCESS } from "../constants/blog.constants"

// export const blogReducer = (state = { notes: [] }, { type, payload }) => {
//     // conditions goes here
//     if (type === BLOG_CREATE_SUCCESS) {
//         return { ...state, success: true }
//     } else if (type === BLOG_CREATE_FAIL) {
//         return { ...state, success: false, error: payload }
//     } else if (type === BLOG_READ_SUCCESS) {
//         return { ...state, readSuccess: true, notes: payload }
//     } else if (type === BLOG_READ_FAIL) {
//         return { ...state, readError: payload }
//     } else {
//         return state
//     }
// }

export const blogReducer = (state = { notes: [] }, { type, payload }) => {
    switch (type) {
        case BLOG_CREATE_SUCCESS: return { ...state, success: true }
        case BLOG_CREATE_FAIL: return { ...state, success: false, error: payload }
        case BLOG_READ_SUCCESS: return { ...state, readSuccess: true, notes: payload }
        case BLOG_READ_FAIL: return { ...state, readError: payload }
        default: return state
    }
}
// Old Redux        - 100 line
// Redux Toolkit    - 70 line
// Redux RTK        - 25 line