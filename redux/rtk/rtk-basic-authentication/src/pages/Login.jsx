import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../shared/utility'
import { useLazySigninQuery, useSigninQuery } from '../redux/apis/auth.api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    // const { data } = useSigninQuery()
    const [signin, { data, isLoading, isSuccess, isError, error }] = useLazySigninQuery()

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
            signin(values)
            resetForm()
        }
    })


    useEffect(() => {
        if (isSuccess) {
            toast.success("login success")
            navigate("/admin")
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            toast.error(error ? error.message : "invalid credential")
        }
    }, [isError])

    if (isLoading) {
        return <div class="spinner-border text-primary"></div>
    }

    return <form onSubmit={formik.handleSubmit}>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Login</div>
                        <div class="card-body">
                            <div>
                                <label for="email" class="form-label">First Email</label>
                                <input
                                    type="text"
                                    className={handleClasses(formik, "email")}
                                    {...formik.getFieldProps("email")}
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.email}</div>
                            </div>
                            <div class="mt-2">
                                <label for="password" class="form-label">Password</label>
                                <input
                                    type="password"
                                    className={handleClasses(formik, "password")}
                                    {...formik.getFieldProps("password")}
                                    id="password"
                                    placeholder="Enter Your Password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.password}</div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-3">
                                Login
                            </button>
                            <p class="text-center mt-3">
                                Dont Have Account? <a href="#">Create Account</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
}

export default Login