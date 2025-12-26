import { useFormik } from 'formik'
import Card from '../../components/ui/Card'
import Input from '../../components/ui/Input'
import Center from './../../components/ui/Center'
import * as yup from "yup"
import { handleClasses } from '../../share/utility'
import { Link, useNavigate } from 'react-router-dom'
import { useLazyLoginQuery } from '../../redux/apis/auth.api'
import { toast } from 'react-toastify'
const Login = () => {
    const [login, { isLoading, data }] = useLazyLoginQuery()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required(),
            password: yup.string().required(),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const data = await login(values).unwrap()
                toast.success("login success")
                switch (data.role) {
                    case "tpo": navigate("/admin"); break;
                    case "student": navigate("/student"); break;
                    case "company": navigate("/company"); break;
                    default: break;
                }

            } catch (error) {
                toast.error(error ? error.message : "invalid credentials")
            } finally {
                resetForm()
            }
        }
    })
    return <>
        <Center>
            <Card showFooter={false} showHeader={false}>
                <form onSubmit={formik.handleSubmit}>

                    <Input
                        label="email"
                        type="email"
                        placeholder="john@example.com"

                        className={handleClasses(formik, "email")}
                        {...formik.getFieldProps("email")}
                        invalidFeedback={formik.errors.email}

                    />
                    <Input
                        label="password"
                        placeholder="enter your secure password"
                        type="password"

                        className={handleClasses(formik, "password")}
                        {...formik.getFieldProps("password")}
                        invalidFeedback={formik.errors.password}
                    />
                    <button type="submit" class="btn btn-primary w-100">Login</button>

                    <div className='text-center mt-2'>
                        <span>Are you company? <Link to="/register-company">Register Comapny</Link> </span>
                    </div>
                </form>
            </Card>
        </Center >
    </>
}

export default Login