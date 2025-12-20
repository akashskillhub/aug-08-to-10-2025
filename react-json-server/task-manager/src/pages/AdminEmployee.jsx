import { useFormik } from 'formik'
import * as yup from 'yup'
import { API_URL, handleClasses } from '../share/utility'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useEffect, useState } from 'react'

const AdminEmployee = () => {
    const [allEmployee, setAllEmployee] = useState([])
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            profile: "",
            type: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            mobile: yup.string().required(),
            profile: yup.string().required(),
            type: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            createEmployee()
            readEmployees()
            resetForm()
        }
    })
    const createEmployee = async () => {
        try {
            const empData = {
                ...formik.values,
                password: `${formik.values.name}@123`,
                role: "employee",
                active: true
            }
            await axios.post(`${API_URL}/users`, empData)
            toast.success("employee create success")
        } catch (error) {
            console.log(error)
            toast.error("unable to create employee")
        }
    }

    const readEmployees = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/users`, { params: { role: "employee" } })
            setAllEmployee(data)
        } catch (error) {
            console.log(error)
            toast.error("unable to create employee")
        }
    }
    const handleActive = async (id, status) => {
        try {
            await axios.patch(`${API_URL}/users/${id}`, { active: status })
            readEmployees()
            toast.success("employee update success")
        } catch (error) {
            console.log(error)
            toast.error("unable to update employee")
        }
    }

    useEffect(() => {
        readEmployees() // page mount

    }, [])
    return <>
        <form onSubmit={formik.handleSubmit}>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-header">Register Employee</div>
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
                                    <label for="mobile" class="form-label">mobile</label>
                                    <input
                                        type="text"
                                        className={handleClasses(formik, "mobile")}
                                        {...formik.getFieldProps("mobile")}
                                        id="mobile"
                                        placeholder="Enter Your mobile"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.mobile}</div>
                                </div>
                                <div class="mt-2">
                                    <label for="profile" class="form-label">Profile Image URL</label>
                                    <input
                                        type="text"
                                        className={handleClasses(formik, "profile")}
                                        {...formik.getFieldProps("profile")}
                                        id="profile"
                                        placeholder="Profile Image URL"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.profile}</div>
                                </div>
                                <div className='my-2'>
                                    <label htmlFor="">Employee Type</label>
                                    <select className={handleClasses(formik, "type")}{...formik.getFieldProps("type")}>
                                        <option selected>Choose Employee Type</option>
                                        <option value="intern">Intern</option>
                                        <option value="frontend">Frontend Dev</option>
                                        <option value="backend">Backend Dev</option>
                                        <option value="devops">Devops Dev</option>
                                    </select>
                                    <div className="invalid-feedback">{formik.errors.type}</div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mt-3">Signup</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

        <div className="container">
            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>profile</th>
                        <th>name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>type</th>
                        <th>role</th>
                        <th>active</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allEmployee.map(item => <tr className={item.active ? "table-success" : "table-danger"}>
                            <td>{item.id}</td>
                            <td> <img src={item.profile} height={50} alt="" /> </td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.type}</td>
                            <td>{item.role}</td>
                            <td>{item.active ? "active" : "in-active"}</td>
                            <td>
                                {
                                    item.active
                                        ? <button
                                            onClick={e => handleActive(item.id, false)}
                                            type="button"
                                            class="btn btn-sm btn-danger">
                                            Block
                                        </button>
                                        : <button
                                            onClick={e => handleActive(item.id, true)}
                                            type="button"
                                            class="btn btn-sm btn-success">
                                            Un Block
                                        </button>
                                }

                                <button type="button" class="btn btn-sm btn-warning">Edit</button>
                                <button type="button" class="btn btn-sm btn-danger">remove</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default AdminEmployee