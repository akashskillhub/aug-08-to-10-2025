import axios from "axios"
import clsx from "clsx"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import * as yup from "yup"
const Employee = () => {
    const API_URL = "http://localhost:5000/employees"
    const [allEmployees, setAllEmployees] = useState([])
    const [selectedEmployee, setSelectedEmployee] = useState(null)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedEmployee ? selectedEmployee.name : "",
            email: selectedEmployee ? selectedEmployee.email : "",
            mobile: selectedEmployee ? selectedEmployee.mobile : "",
            photo: selectedEmployee ? selectedEmployee.photo : "",
            role: selectedEmployee ? selectedEmployee.role : "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            mobile: yup.string().required(),
            photo: yup.string().required(),
            role: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            selectedEmployee ? updateEmployee() : createEmployee();
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    const createEmployee = async () => {
        try {
            await axios.post(API_URL, formik.values)
            toast.success("employee create success")
            readEmployee()
        } catch (error) {
            console.log(error)
        }
    }
    const readEmployee = async () => {
        try {
            const { data } = await axios.get(API_URL)
            setAllEmployees(data)
        } catch (error) {
            console.log(error)
        }
    }
    const updateEmployee = async () => {
        try {
            await axios.patch(`${API_URL}/${selectedEmployee.id}`, formik.values)
            toast.success("employee update success")
            readEmployee()
            setSelectedEmployee(null)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteEmployee = async id => {
        try {
            await axios.delete(`${API_URL}/${id}`)
            toast.success("employee delete success")
            readEmployee()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        readEmployee()
    }, [])
    return <>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input className={handleClasses("name")}  {...formik.getFieldProps("name")} type="text" placeholder='name' />
                <span className="invalid-feedback">{formik.errors.name}</span>
            </div>
            <div>
                <input className={handleClasses("email")}  {...formik.getFieldProps("email")} type="text" placeholder='email' />
                <span className="invalid-feedback">{formik.errors.email}</span>
            </div>
            <div>
                <input className={handleClasses("mobile")}  {...formik.getFieldProps("mobile")} type="text" placeholder='mobile' />
                <span className="invalid-feedback">{formik.errors.mobile}</span>
            </div>
            <div>
                <input className={handleClasses("photo")}  {...formik.getFieldProps("photo")} type="text" placeholder='photo' />
                <span className="invalid-feedback">{formik.errors.photo}</span>
            </div>
            <div>
                <select className={handleClasses("role")} {...formik.getFieldProps("role")}  >
                    <option value="">Choose Role</option>
                    <option value="frontend">Frontend Dev</option>
                    <option value="backend">Backend Dev</option>
                    <option value="devops">Dev Ops Engg.</option>
                </select>
                <span className="invalid-feedback">{formik.errors.role}</span>
            </div>
            {
                selectedEmployee
                    ? <>
                        <button type="submit">Update</button>
                        <button onClick={e => setSelectedEmployee(null)} type="button">Cancle</button>
                    </>
                    : <button type="submit">Create</button>
            }

        </form >

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>mobile</th>
                    <th>photo</th>
                    <th>role</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allEmployees.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>
                            <img src={item.photo} height="100" alt="" />
                        </td>
                        <td>{item.role}</td>
                        <td>
                            <button onClick={e => setSelectedEmployee(item)} className="btn btn-sm btn-outline-warning me-2">
                                <i className="bi bi-pencil"></i>
                            </button>

                            <button onClick={e => deleteEmployee(item.id)} className="btn btn-sm btn-outline-danger">
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Employee