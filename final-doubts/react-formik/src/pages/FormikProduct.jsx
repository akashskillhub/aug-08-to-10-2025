import clsx from "clsx"
import { useFormik } from "formik"
import * as yup from "yup"

const FormikProduct = () => {
    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            age: ""
        },
        validationSchema: yup.object({
            fname: yup.string().required().min(5).max(10),
            lname: yup.string().required(),
            age: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(formik.values)
            console.log(values)
            resetForm()
        }
    })


    const handleClasses = key => clsx({
        "form-control": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    return <>
        <form onSubmit={formik.handleSubmit}>

            <input className={handleClasses("fname")}
                type="text"
                {...formik.getFieldProps("fname")} />
            <div>{formik.errors.fname}</div>

            <input className={handleClasses("lname")}
                type="text"
                {...formik.getFieldProps("lname")}
            />
            <div>{formik.errors.lname}</div>

            <input className={handleClasses("age")} type="text" {...formik.getFieldProps("age")} />
            <div>{formik.errors.age}</div>

            <button type='submit'>add</button>
        </form>
    </>
}

export default FormikProduct