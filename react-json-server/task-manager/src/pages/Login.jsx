import { useFormik } from 'formik'
import * as yup from 'yup'
import { API_URL, handleClasses } from '../share/utility'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../App'

const Login = () => {
    const { auth, setAuth } = useContext(AuthContext)
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
        onSubmit: async (values, { resetForm }) => {
            try {
                const { data } = await axios.get(`${API_URL}/users`, { params: formik.values })
                if (data.length === 0) {
                    toast.error("invalid credentials")
                } else {

                    if (data[0].role === "admin") {
                        localStorage.setItem("auth", JSON.stringify(data[0]))
                        setAuth(data[0])
                        toast.success("admin login success")
                        navigate("/admin")
                    } else {
                        if (data[0].active) {
                            localStorage.setItem("auth", JSON.stringify(data[0]))
                            setAuth(data[0])
                            toast.success("employee login success")
                            navigate("/employee")
                        } else {
                            toast.error("Account Blocked by admin")
                        }
                    }
                }
                resetForm()
            } catch (error) {
                console.log(error)
                toast.error("unable to login")
            }
        }
    })
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