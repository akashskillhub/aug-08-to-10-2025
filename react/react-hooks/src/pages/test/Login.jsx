import React from 'react'
import useDynamicFrom from '../../hooks/useDynamicFrom'
import Card from './Card'
import { useFormik } from 'formik'
import * as yup from "yup"
import clsx from 'clsx'

const Login = () => {
    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            mobile: "",
            password: "",
        },
        validationSchema: yup.object({
            fname: yup.string().required(),
            lname: yup.string().required(),
            email: yup.string().required().email(),
            mobile: yup.string().required(),
            password: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })
    const ui = useDynamicFrom([
        {
            label: "fname",
            type: "text",
            ...formik.getFieldProps("fname"),
            className: handleClasses("fname"),
            error: formik.errors.fname
        },
        {
            label: "lname",
            type: "text",
            ...formik.getFieldProps("lname"),
            className: handleClasses("lname"),
            error: formik.errors.lname
        },
        {
            label: "email",
            type: "email",
            ...formik.getFieldProps("email"),
            className: handleClasses("email"),
            error: formik.errors.email
        },
        {
            label: "mobile",
            type: "number",
            ...formik.getFieldProps("mobile"),
            className: handleClasses("mobile"),
            error: formik.errors.mobile
        },
        {
            label: "password",
            type: "password",
            ...formik.getFieldProps("password"),
            className: handleClasses("password"),
            error: formik.errors.password
        },
    ])

    return <>
        <div className="container">
            <Card>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <form onSubmit={formik.handleSubmit}>
                        {ui}
                        <button type='submit'>save</button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    </>
}

export default Login