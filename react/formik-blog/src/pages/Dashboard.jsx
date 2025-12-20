import clsx from "clsx"
import { useFormik } from "formik"
import * as yup from "yup"
const Dashboard = () => {
    const formik = useFormik({
        initialValues: {
            title: "",
            desc: "",
            image: "",
        },
        validationSchema: yup.object({
            title: yup.string().required("Title is Required"),
            desc: yup.string().required("Decription is Required"),
            image: yup.string().required("Image URL is Required"),
        }),
        onSubmit: (values, { resetForm }) => {
            resetForm()
        }
    })

    const handleClases = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    const titleClasses = clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched.title && formik.errors.title,
        "is-valid": formik.touched.title && !formik.errors.title,
    })
    const descClasses = clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched.desc && formik.errors.desc,
        "is-valid": formik.touched.desc && !formik.errors.desc,
    })
    const imageClasses = clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched.image && formik.errors.image,
        "is-valid": formik.touched.image && !formik.errors.image,
    })

    return <>
        <pre>values : {JSON.stringify(formik.values, null, 2)}</pre>
        <pre>errors : {JSON.stringify(formik.errors, null, 2)}</pre>

        <form onSubmit={formik.handleSubmit}>
            <input className={handleClases("title")} {...formik.getFieldProps("title")} type="text" placeholder='title' />
            <input className={handleClases("desc")} {...formik.getFieldProps("desc")} type="text" placeholder='desc' />
            <input className={handleClases("image")} {...formik.getFieldProps("image")} type="text" placeholder='image url' />
            <button type="submit">add</button>
        </form>
    </>
}

export default Dashboard