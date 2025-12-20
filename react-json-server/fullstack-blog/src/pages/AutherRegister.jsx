import { useFormik } from "formik"
import * as yup from "yup"
import { API_URL, handleClassess } from "../share/utility"
import { toast } from "react-toastify"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const AutherRegister = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            photo: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            photo: yup.string().required(),
            email: yup.string().required().email(),
            password: yup.string().required(),
            cpassword: yup.string().required().oneOf([yup.ref("password")]),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await axios.post(`${API_URL}/users`, { ...formik.values, role: "auther", active: true })
                toast.success("auther register success")
                navigate("/login")
                resetForm()
            } catch (error) {
                console.log(error)
                toast.error("server error : unable to register")
            }
        }
    })
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
                                    className={handleClassess(formik, "name")}
                                    {...formik.getFieldProps("name")}
                                    id="name"
                                    placeholder="Enter your name"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.name}</div>
                            </div>
                            <div>
                                <label for="photo" class="form-label">Photo</label>
                                <input
                                    type="text"
                                    className={handleClassess(formik, "photo")}
                                    {...formik.getFieldProps("photo")}
                                    id="photo"
                                    placeholder="Enter your photo"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.photo}</div>
                            </div>
                            <div>
                                <label for="email" class="form-label">email</label>
                                <input
                                    type="email"
                                    className={handleClassess(formik, "email")}
                                    {...formik.getFieldProps("email")}
                                    id="email"
                                    placeholder="Enter your email"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.email}</div>
                            </div>
                            <div>
                                <label for="password" class="form-label">password</label>
                                <input
                                    type="password"
                                    className={handleClassess(formik, "password")}
                                    {...formik.getFieldProps("password")}
                                    id="password"
                                    placeholder="Enter your password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.password}</div>
                            </div>
                            <div>
                                <label for="cpassword" class="form-label">cpassword</label>
                                <input
                                    type="password"
                                    className={handleClassess(formik, "cpassword")}
                                    {...formik.getFieldProps("cpassword")}
                                    id="cpassword"
                                    placeholder="Enter your cpassword"
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

export default AutherRegister