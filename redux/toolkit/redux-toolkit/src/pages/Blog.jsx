import clsx from "clsx"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import * as yup from "yup"
import { createBlog, readBlog } from "../redux/actions/blog.actions"
import { useEffect } from "react"

const Blog = () => {

    const dispatch = useDispatch()
    //              👇from slice                                                 👇from store
    const { allBlogs, loading, error, success } = useSelector(state => state.devBlog)

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
        onSubmit: (values, { resetForm }) => {
            dispatch(createBlog(formik.values))
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    useEffect(() => {
        dispatch(readBlog())
    }, [])

    return <>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input type="text"
                    placeholder='title'
                    className={handleClasses("title")}
                    {...formik.getFieldProps("title")} />
                <div className="invalid-feedback">{formik.errors.title}</div>
            </div>
            <div>
                <input type="text"
                    placeholder='desc'
                    className={handleClasses("desc")}
                    {...formik.getFieldProps("desc")} />
                <div className="invalid-feedback">{formik.errors.desc}</div>
            </div>
            <div>
                <input type="text"
                    placeholder='image'
                    className={handleClasses("image")}
                    {...formik.getFieldProps("image")} />
                <div className="invalid-feedback">{formik.errors.image}</div>
            </div>
            <button type="submit">Create Blog</button>
        </form>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>desc</th>
                    <th>image</th>
                </tr>
            </thead>
            <tbody>
                {
                    allBlogs.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.desc}</td>
                        <td>{item.image}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Blog