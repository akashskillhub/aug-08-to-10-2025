import React from 'react'
import { Link } from 'react-router-dom'

const PublicFooter = () => {
    return <div className='bg-dark text-light py-5'>
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h4>SKILLHUB Blogs</h4>
                </div>
                <div className="col-sm-4">
                    <Link to="/admin" className='nav-link'>Admin</Link>
                    <Link to="/admin/auther" className='nav-link'>Authers</Link>
                    <Link to="/admin/blogs" className='nav-link'>Blogs</Link>
                </div>
                <div className="col-sm-4">
                    <Link to="/auther" className='nav-link'>Auther</Link>
                </div>
            </div>
        </div>
    </div>
}

export default PublicFooter