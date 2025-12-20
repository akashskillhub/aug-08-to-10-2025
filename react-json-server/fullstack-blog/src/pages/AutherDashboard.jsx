import { useFormik } from 'formik'
import * as yup from 'yup'
import { API_URL, handleClassess } from '../share/utility'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../App'

const AutherDashboard = () => {
    const [allBlogs, setAllBlogs] = useState([])
    const { auth } = useContext(AuthContext)
    const formik = useFormik({
        initialValues: {
            title: "",
            desc: "",
            image: "",
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            desc: yup.string().required(),
            image: yup.string().required(),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await axios.post(`${API_URL}/blogs`, { ...formik.values, publish: false, auther: auth.auther.id })
                toast.success("blog create success")
                resetForm()
            } catch (error) {
                console.log(error)

            }
        }
    })

    const readBlogs = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/blogs`)
            setAllBlogs(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        readBlogs()
    }, [])
    return <>
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-header">Blog</div>
                    <div class="card-body">
                        <form onSubmit={formik.handleSubmit} >
                            <div>
                                <input className={handleClassess(formik, "title")} {...formik.getFieldProps("title")} type="text" placeholder='title' />
                                <div className="invalid-feedback">{formik.errors.title}</div>
                            </div>
                            <div>
                                <textarea className={handleClassess(formik, "desc")} {...formik.getFieldProps("desc")} placeholder='desc'></textarea>
                                <div className="invalid-feedback">{formik.errors.desc}</div>
                            </div>
                            <div>
                                <input className={handleClassess(formik, "image")} {...formik.getFieldProps("image")} type="text" placeholder='image url' />
                                <div className="invalid-feedback">{formik.errors.image}</div>
                            </div>
                            <button type="submit" class="btn btn-primary">Create Blog</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Desc</th>
                    <th>Image</th>
                    <th>Publish</th>
                </tr>
            </thead>
            <tbody>
                {
                    allBlogs.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.desc}</td>
                        <td> <img src={item.image} height={50} alt="" /> </td>
                        <td>{
                            item.publish
                                ? <span class="badge text-bg-success">Published</span>
                                : <div className="spinner spinner-border"></div>}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default AutherDashboard