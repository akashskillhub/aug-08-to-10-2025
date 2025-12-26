import React from 'react'

const Card = ({ header, footer, children, showHeader = true, showFooter = true }) => {
    return <div className="card">
        {
            showHeader && <div className="card-header">{header}</div>
        }

        <div className="card-body">{children}</div>

        {
            showFooter && <div className="card-footer">{footer}</div>
        }
    </div>
}

export default Card