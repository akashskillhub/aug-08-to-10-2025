import React from 'react'

const Button = ({ children, varient }) => {
    const classes = `btn btn-${varient}`
    return <button className={classes}>{children}</button>
}

export default Button