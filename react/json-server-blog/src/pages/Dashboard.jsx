import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Dashboard = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")
    const [publish, setPublish] = useState("yes")
    const API_URL = "http://localhost:5000/article"
    const [allBlogs, setAllBlogs] = useState([])
    const [selectedBlog, setSelectedBlog] = useState()

    const createBlog = async () => {
        try {
            await axios.post(API_URL, { title, desc, image, publish })
            console.log("blog create success")
            toast.success("blog create success")
            readBlog()
        } catch (error) {
            console.log(error)
            toast.error(error)
        }
    }
    const readBlog = async () => {
        try {
            const { data } = await axios.get(API_URL)
            setAllBlogs(data)
            console.log("blog read success")
        } catch (error) {
            console.log(error)
            toast.error(error)
        }
    }
    const updateBlog = async () => {
        try {
            await axios.patch(`${API_URL}/${selectedBlog.id}`, { title, desc, image, publish })
            console.log("blog update success")
            toast.success("blog update success")
            readBlog()
        } catch (error) {
            console.log(error)
            toast.error(error)
        }
    }
    const deleteBlog = async id => {
        try {
            await axios.delete(`${API_URL}/${id}`)
            console.log("blog delete success")
            toast.success("blog delete success")
            readBlog()
        } catch (error) {
            console.log(error)
            toast.error(error)
        }
    }
    const handleEdit = arg => {
        setTitle(arg.title)
        setDesc(arg.desc)
        setImage(arg.image)
        setPublish(arg.publish)
        setSelectedBlog(arg)
    }

    useEffect(() => { readBlog() }, [])
    return <>
        <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Enter Title' />
        <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder='Enter Description'></textarea>
        <input value={image} onChange={e => setImage(e.target.value)} type="text" placeholder='Enter Image URL' />
        <select value={publish} onChange={e => setPublish(e.target.value)}>
            <option value="">Do you want to Publish?</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
        </select>
        {
            selectedBlog
                ? <button onClick={updateBlog}>Update Blog</button>
                : <button onClick={createBlog}>Create Blog</button>

        }

        <table>
            <thead>
                <tr>
                    <th>Id</th>
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
                        <td>{item.publish}</td>
                        <td>
                            <button onClick={e => handleEdit(item)}>Edit</button>
                            <button onClick={e => deleteBlog(item.id)}>Delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

    </>
}

export default Dashboard