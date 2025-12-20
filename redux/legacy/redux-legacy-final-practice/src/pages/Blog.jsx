import clsx from "clsx"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import * as yup from "yup"
import { createBlog, deleteBlog, readBlog } from "../redux/actions/blog.actions"
import { useEffect } from "react"

const Blog = () => {
    //          👇from reducer                                              👇 store
    const { allBlogs, success, loading, error, reload } = useSelector(state => state.devBlog)

    const dispatch = useDispatch()

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

    useEffect(() => {
        if (reload) {
            dispatch(readBlog())
        }
    }, [reload])


    if (loading) {
        return <div>
            Pleae Wait....
            <div class="spinner-border text-primary"></div>
        </div>
    }

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
                    <th>actions</th>

                </tr>
            </thead>
            <tbody>
                {
                    allBlogs.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.desc}</td>
                        <td> <img src={item.image} height={50} alt="" /> </td>
                        <td>
                            <button onClick={e => dispatch(deleteBlog(item.id))}>remove</button>
                        </td>
                    </tr>)
                }

            </tbody>
        </table>
    </>
}

export default Blog