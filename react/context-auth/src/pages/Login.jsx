import { useFormik } from 'formik'
import * as yup from 'yup'
import { API_URL, handleClasses } from '../share/handleclasses'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
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
        onSubmit: (values, { resetForm }) => {
            handleLogin()
            resetForm()
        }
    })
    const handleLogin = async () => {
        try {
            //                                          👇 Query Params
            const { data } = await axios.get(API_URL, { params: formik.values })
            if (data.length === 0) {
                toast.error("invalid credentials")
            } else {
                localStorage.setItem("auth", JSON.stringify(data[0]))
                setAuth(data[0]) // data[0] => Object
                toast.success("login success")
                navigate("/dashboard")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return <form onSubmit={formik.handleSubmit}>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <div>
                                <label for="email" className="form-label">First Email</label>
                                <input
                                    type="text"
                                    className={handleClasses(formik, "email")}
                                    {...formik.getFieldProps("email")}
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.email}</div>
                            </div>
                            <div className="mt-2">
                                <label for="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className={handleClasses(formik, "password")}
                                    {...formik.getFieldProps("password")}
                                    id="password"
                                    placeholder="Enter Your Password"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.password}</div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-3">
                                Login
                            </button>
                            <p className="text-center mt-3">
                                Dont Have Account? <Link to="/">Create Account</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
}

export default Login