import { useFormik } from 'formik'
import * as yup from 'yup'
import { API_URL, handleClasses } from '../shared/utility'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
            toast.success("user register success")
            navigate("/login")
        } catch (error) {
            console.log(error)
            toast.error("Unable To Register User")
        }
    }
    return <form onSubmit={formik.handleSubmit}>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Signup</div>
                        <div class="card-body">
                            <div>
                                <label for="name" class="form-label">First name</label>
                                <input
                                    type="text"
                                    className={handleClasses(formik, "name")}
                                    {...formik.getFieldProps("name")}
                                    id="name"
                                    placeholder="Enter your name"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.name}</div>
                            </div>
                            <div class="mt-2">
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
                                    type="text"
                                    className={handleClasses(formik, "password")}
                                    {...formik.getFieldProps("password")}
                                    id="password"
                                    placeholder="Enter Your Password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.password}</div>
                            </div>
                            <div class="mt-2">
                                <label for="cpassword" class="form-label"
                                >Confirm Password</label
                                >
                                <input
                                    type="text"
                                    className={handleClasses(formik, "cpassword")}
                                    {...formik.getFieldProps("cpassword")}
                                    id="cpassword"
                                    placeholder="Confirm Your Password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.cpassword}</div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-3">
                                Signup
                            </button>
                            <p class="text-center mt-3">
                                Already Have Account? <a href="#">Login</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
}

export default Register