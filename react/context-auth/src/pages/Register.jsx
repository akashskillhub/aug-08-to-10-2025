import { useFormik } from 'formik'
import * as yup from 'yup'
import { API_URL, handleClasses } from '../share/handleclasses'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Register = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            password: yup.string().required(),
            cpassword: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            handleRegister()
            resetForm()
        }
    })

    const handleRegister = async () => {
        try {
            await axios.post(API_URL, formik.values)
            toast.success("register success")
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }
    return <form onSubmit={formik.handleSubmit}>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Signup</div>
                        <div className="card-body">
                            <div>
                                <label for="name" className="form-label">First name</label>
                                <input
                                    type="text"
                                    className={handleClasses(formik, "name")}
                                    {...formik.getFieldProps("name")}
                                    id="name"
                                    placeholder="Enter your name"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.name}</div>
                            </div>
                            <div className="mt-2">
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
                                    type="text"
                                    className={handleClasses(formik, "password")}
                                    {...formik.getFieldProps("password")}
                                    id="password"
                                    placeholder="Enter Your Password"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.password}</div>
                                <div className="mt-2">
                                    <label for="cpassword" className="form-label"
                                    >Confirm Password</label
                                    >
                                    <input
                                        type="text"
                                        className={handleClasses(formik, "cpassword")}
                                        {...formik.getFieldProps("cpassword")}
                                        id="cpassword"
                                        placeholder="Confirm Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.cpassword}</div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-3">
                                    Signup
                                </button>
                                <p className="text-center mt-3">
                                    Already Have Account? <Link to="/login">Login</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
}

export default Register