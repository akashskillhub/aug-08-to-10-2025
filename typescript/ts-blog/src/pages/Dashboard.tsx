import { useFormik } from "formik"
import * as yup from "yup"
import type { Blog } from "../types/Blog"
import { useAddBlogMutation, useDeleteBlogMutation, useGetBlogsQuery, useUpdateBlogMutation } from "../redux/apis/blog.api"
import { toast } from "react-toastify"
import { Button, Container, Form, Table } from "react-bootstrap"

const Dashboard = () => {
    const { data } = useGetBlogsQuery()
    const [addBlog] = useAddBlogMutation()
    const [updateBlog] = useUpdateBlogMutation()
    const [deleteBlog] = useDeleteBlogMutation()

    const blogSchema: yup.ObjectSchema<Blog> = yup.object({
        id: yup.number().optional(),
        title: yup.string().required(),
        desc: yup.string().required(),
        hero: yup.string().required(),
        publish: yup.boolean().required(),
    })

    const formik = useFormik<Blog>({
        initialValues: {
            title: "",
            desc: "",
            hero: "",
            publish: false
        },
        validationSchema: blogSchema,
        onSubmit: (values, { resetForm }) => {
            handleAdd(values)
            resetForm()
        }
    })

    const handleAdd = async (arg: Blog) => {
        try {
            await addBlog(arg).unwrap()
            toast.success("blog create success")
        } catch (error) {
            toast.error("unable to create blog")
        }
    }

    const handleUpdate = async (arg: Blog) => {
        try {
            await updateBlog(arg).unwrap()
            toast.success("blog update success")
        } catch (error) {
            toast.error("unable to update blog")
        }
    }
    const handleDelete = async (arg: number) => {
        try {
            await deleteBlog(arg).unwrap()
            toast.success("blog delete success")
        } catch (error) {
            toast.error("unable to delete blog")
        }
    }
    return <>
        <form onSubmit={formik.handleSubmit}>
            <Form.Control {...formik.getFieldProps("title")} type="text" placeholder="title"></Form.Control>
            <input {...formik.getFieldProps("desc")} type="text" placeholder="desc" />
            <input {...formik.getFieldProps("hero")} type="text" placeholder="hero" />
            <button type="submit">Save</button>
        </form>
        <Container>
            {
                data && <Table className="table-bordered table-striped">
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

                        {
                            data.map(item => <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.desc}</td>
                                <td>
                                    <img src={item.hero} height={50} alt="" />
                                </td>
                                <td>{item.publish ? "Published" : "Draft"}</td>
                                <td>
                                    {
                                        item.publish
                                            ? <Button onClick={() => handleUpdate({ ...item, publish: false })} variant="outline-danger">un Publish</Button>
                                            : <Button onClick={() => handleUpdate({ ...item, publish: true })} variant="success">Publish</Button>
                                    }
                                    <Button onClick={() => handleDelete(item.id as number)} variant="outline-danger" className="ms-2 btn-sm">Remove</Button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            }
        </Container>
    </>
}

export default Dashboard