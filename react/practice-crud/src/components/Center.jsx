import React from 'react'

const Center = ({ children }) => {
    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-header">CRUD</div>
                    <div class="card-body">{children}</div>
                </div>
            </div>
        </div>
    </div>
}

export default Center