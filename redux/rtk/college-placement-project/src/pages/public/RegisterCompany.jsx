import React from 'react'
import Center from '../../components/ui/Center'
import Input from '../../components/ui/Input'
import Card from '../../components/ui/Card'
import { useFormik } from 'formik'
import * as yup from "yup"
import { handleClasses } from '../../share/utility'
import { useRegisterMutation } from '../../redux/apis/auth.api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const RegisterCompany = () => {
    const [register, { isLoading }] = useRegisterMutation()
    const navigate = useNavigate()
    const fields = [
        { label: "name", placeholder: "enter name", type: "text", },
        { label: "email", placeholder: "enter email", type: "email" },
        { label: "logo", placeholder: "logo", type: "text" },
        { label: "address", placeholder: "address", type: "text" },
        { label: "mobile", placeholder: "mobile", type: "number" },
        { label: "password", placeholder: "password", type: "password" },
    ]
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            logo: "",
            address: "",
            mobile: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required(),
            logo: yup.string().required(),
            address: yup.string().required(),
            mobile: yup.string().required(),
            password: yup.string().required(),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await register({
                    ...values,
                    role: "company",
                }).unwrap()
                toast.success("register success")
                navigate("/")
            } catch (error) {
                toast.error(error ? error.message : "unable to register company")
            }
            resetForm()
        }
    })
    if (isLoading) {
        return <div class="spinner-border text-primary"></div>
    }
    return <>
        <Center>
            <Card showFooter={false} showHeader={false}>
                <form onSubmit={formik.handleSubmit}>
                    {
                        fields.map(item => <Input
                            {...formik.getFieldProps(item.label)}
                            className={handleClasses(formik, item.label)}
                            {...item}
                            invalidFeedback={formik.errors[item.label]}
                        />)
                    }
                    <button type="submit" class="btn btn-primary w-100 mt-2">Register</button>
                </form>
            </Card>
        </Center>
    </>
}

export default RegisterCompany