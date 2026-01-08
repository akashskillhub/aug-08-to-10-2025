import { useFormik } from 'formik'
import { useLazySigninQuery } from '../redux/apis/auth.api'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { memo, useCallback } from 'react'
const Login = () => {
    const [signin] = useLazySigninQuery()
    const navigate = useNavigate()

    const handleSignin = useCallback(async userData => {
        try {
            const data = await signin(userData).unwrap()
            console.log(data)
            navigate("/admin")
        } catch (error) {
            console.log(error)
        }
    }, [navigate, signin])

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            handleSignin(values)
            resetForm()
        }
    })

    console.log("render")


    return <>
        <form onSubmit={formik.handleSubmit}>
            <input
                type="email"
                placeholder='email'
                {...formik.getFieldProps("email")} />

            <input
                type="password"
                placeholder='password'
                {...formik.getFieldProps("password")} />

            <button type='submit'>login</button>
        </form>
    </>
}

export default memo(Login)

