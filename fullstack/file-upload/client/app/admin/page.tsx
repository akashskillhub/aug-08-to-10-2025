"use client"
import { useAddBlogMutation, useDeleteBlogMutation, useGetBlogsQuery, useUpdateBlogMutation } from '@/redux/apis/blog.api'
import { Blog } from '@/types/Blog'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify'

const Dashboard = () => {
    const { data } = useGetBlogsQuery()
    const [blogData, setBlogData] = useState<Blog>({ desc: "", title: "" })
    const [addBlog] = useAddBlogMutation()
    const [deleteBlog] = useDeleteBlogMutation()
    const [updateBlog] = useUpdateBlogMutation()
    const handleAddBlog = async () => {
        try {
            const fd = new FormData()
            fd.append("title", blogData.title)
            fd.append("desc", blogData.desc)
            if (blogData.test) {
                fd.append("test", blogData.test)
            }

            await addBlog(fd).unwrap()
            toast.success("blog create success")
        } catch (error) {
            console.log(error)
            toast.error("unable to create blog")
        }
    }

    const handleDelete = async (_id: String) => {
        try {
            await deleteBlog(_id).unwrap()
            toast.success("blog delete success")
        } catch (error) {
            console.log(error)
            toast.error("unable to delete blog ")
        }
    }

    const handleUpdate = async (blogData: Blog) => {
        try {
            await updateBlog(blogData).unwrap()
            toast.success("blog update success")
        } catch (error) {
            console.log(error)
            toast.error("unable to update blog ")
        }
    }
    return <>
        {/* <form> */}
        <input onChange={e => setBlogData({ ...blogData, title: e.target.value })} type="text" placeholder='title' />
        <input onChange={e => setBlogData({ ...blogData, desc: e.target.value })} type="text" placeholder='desc' />
        <input type="file" onChange={e => setBlogData({ ...blogData, test: e.target.files?.[0] })} placeholder='hero' />
        <Button onClick={handleAddBlog}>Create Blog</Button>
        {/* </form> */}

        <hr />
        <table className='table table-bordered table-hover'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>desc</th>
                    <th>hero</th>
                    <th>publish</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map(item => <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.title}</td>
                    <td>{item.desc}</td>
                    <td>
                        <img src={item.hero} height={50} alt="" />
                    </td>
                    <td>
                        {item.publish ? "Published" : "Un-Published"}
                    </td>
                    <td>
                        {
                            item.publish
                                ? <Button onClick={e => handleUpdate({ ...item, publish: false })} variant='warning'>Mark unpublish</Button>
                                : <Button onClick={e => handleUpdate({ ...item, publish: true })} variant='success'>Publish</Button>
                        }
                        <Button onClick={e => handleDelete(item._id as string)} variant='danger'>Delete</Button>
                    </td>
                </tr>)}
            </tbody>
        </table>
    </>
}

export default Dashboard