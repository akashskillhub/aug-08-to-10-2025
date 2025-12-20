import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../share/utility'

const AdminDashboard = () => {
    const [stat, setStat] = useState([
        { label: "Auther", count: 0 },
        { label: "Blogs", count: 0 },
        { label: "Active", count: 0 },
        { label: "InActive", count: 0 },
    ])


    const getAllAuthers = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/users`, { params: { role: "auther" } })
            const copy = [...stat]
            copy[0].count = data.length
            copy[2].count = data.filter(item => item.active === true).length
            copy[3].count = data.filter(item => item.active === false).length
            setStat(copy)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllBlogs = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/blogs`)
            const copy = [...stat]
            copy[1].count = data.length
            setStat(copy)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllAuthers()
        getAllBlogs()
    }, [])
    return <>
        <div className=" mt-4">
            <div className="row">
                {
                    stat.map(item => <div className="col-sm-3">
                        <div class="card">
                            <div class="card-body d-flex justify-content-between align-items-center">
                                <div>{item.label}</div>
                                <div className='display-5'>{item.count}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    </>

}

export default AdminDashboard