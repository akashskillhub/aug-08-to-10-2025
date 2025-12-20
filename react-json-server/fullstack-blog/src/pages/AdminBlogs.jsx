import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../share/utility'
import { toast } from 'react-toastify'

const AdminBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([])
    const readBlogs = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/blogs`)
            setAllBlogs(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleBlog = async (id, status) => {
        try {
            await axios.patch(`${API_URL}/blogs/${id}`, { publish: status })
            toast.success("blog update success")
            readBlogs()
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        readBlogs()
    }, [])
    return <>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Desc</th>
                    <th>Image</th>
                    <th>Publish</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allBlogs.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.desc}</td>
                        <td> <img src={item.image} height={50} alt="" /> </td>
                        <td>{item.publish ? "Published" : "Pending"}</td>
                        <td>
                            {
                                item.publish
                                    ? <button onClick={e => handleBlog(item.id, false)} type="button" class="btn btn-danger">Unpublish</button>
                                    : <button onClick={e => handleBlog(item.id, true)} type="button" class="btn btn-success">Publish</button>
                            }
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default AdminBlogs