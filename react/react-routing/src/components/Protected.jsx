import React from 'react'

const Protected = ({ children }) => {
    const isLogin = true
    return isLogin ? children : <h1>Please Login</h1>
}

export default Protected