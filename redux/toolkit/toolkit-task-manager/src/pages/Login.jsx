import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../share/utility'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../redux/actions/auth.actions'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const { loading, error, success, currentUser } = useSelector(state => state.auth)
    const navigate = useNavigate()
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
            dispatch(signin(values))
            resetForm()
        }
    })

    useEffect(() => {
        if (success) {
            toast.success("Login Success")
            if (currentUser === "admin") {
                navigate("/admin")
            } else {
                navigate("/employee")
            }
        }
    }, [success])

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    if (loading) {
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
                                <div class="invalid-feedback">Please choose a username.</div>
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
                                <div class="invalid-feedback">Please choose a username.</div>
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