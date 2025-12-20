import React from 'react'

const Card = ({ children, title, foot }) => {
    return <div className="card">
        <div className="card-header">{title}</div>
        <div className="card-body">{children}</div>
        <div className="card-footer">{foot}</div>
    </div>
}

export default Card