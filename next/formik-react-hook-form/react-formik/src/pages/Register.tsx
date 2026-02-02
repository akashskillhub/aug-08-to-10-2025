import { useFormik } from "formik"
import * as yup from "yup"

const Register = () => {
    type User = {
        name: string,
        email: string,
        mobile: string,
        password: string,
        cpassword: string,
    }

    const userSchema: yup.ObjectSchema<User> = yup.object({
        name: yup.string().required(),
        email: yup.string().required(),
        mobile: yup.string().required(),
        password: yup.string().required(),
        cpassword: yup.string().required(),
    })

    const formik = useFormik<User>({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            password: "",
            cpassword: "",
        },
        validationSchema: userSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }

    })
    return <>
        <form onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps("name")} type="text" placeholder="name" />
            <div>{formik.errors.name}</div>

            <input {...formik.getFieldProps("email")} type="text" placeholder="email" />
            <div>{formik.errors.email}</div>

            <input {...formik.getFieldProps("mobile")} type="text" placeholder="mobile" />
            <div>{formik.errors.mobile}</div>

            <input {...formik.getFieldProps("password")} type="text" placeholder="password" />
            <div>{formik.errors.password}</div>

            <input {...formik.getFieldProps("cpassword")} type="text" placeholder="cpassword" />
            <div>{formik.errors.cpassword}</div>

            <button type="submit">Register</button>
        </form>
    </>
}

export default Register