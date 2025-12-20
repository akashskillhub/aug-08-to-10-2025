import React from 'react'

const Center = ({ col = 6, offset = 3, children }) => {
    return <div className="container">
        <div className="row">
            <div className={`col-sm-${col} offset-sm-${offset}`}>
                {children}
            </div>
        </div>
    </div>
}

export default Center