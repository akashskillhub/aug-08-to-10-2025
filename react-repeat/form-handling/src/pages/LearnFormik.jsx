import clsx from 'clsx';
import { useFormik } from 'formik'
import * as yup from "yup"

const LearnFormik = () => {
    const formik = useFormik({
        initialValues: {
            fname: "John",
            lname: "Doe",
            age: 0,
        },
        validationSchema: yup.object({
            fname: yup.string().required().min(2).max(10),
            lname: yup.string().required().min(2).max(10),
            age: yup.string().required(),
        }),
        onSubmit: () => {
            console.log("submitted");
        }
    })


    const handleClasses = key => clsx({
        "form-control": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })


    return <form onSubmit={formik.handleSubmit}>
        <pre>values{JSON.stringify(formik.errors)}</pre>
        <pre>touched{JSON.stringify(formik.touched)}</pre>
        <input
            className={handleClasses("fname")}
            name='fname'
            value={formik.values.fname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder='first name' />

        <div className="invalid-feedback">{formik.errors.fname}</div>
        <input
            className={handleClasses("lname")}
            name='lname'
            value={formik.values.lname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text" placeholder='last name' />
        <div className="invalid-feedback">{formik.errors.lname}</div>
        <input
            className={handleClasses("age")}
            name='age'
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder='age' />
        <div className="invalid-feedback">{formik.errors.age}</div>
        <button type='submit'>add</button>
    </form>
}

export default LearnFormik