import * as yup from 'yup'
import Center from '../components/Center'
import { useFormik } from 'formik'
import { handleClasses } from '../share/utility'
import { useDispatch, useSelector } from 'react-redux'
import { handleEmployeeAccount, readEmployee, registerEmployee } from '../redux/actions/admin.actions'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const AdminEmployee = () => {
    //      👇from adminSlice
    const { success, loading, error, allEmployees, updateSuccess } = useSelector(state => state.admin)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            photo: "",
            name: "",
            email: "",
            mobile: "",
            department: "",
        },
        validationSchema: yup.object({
            photo: yup.string().required(),
            name: yup.string().required(),
            email: yup.string().required().email(),
            mobile: yup.string().required(),
            department: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(registerEmployee({
                ...values,
                role: "employee",
                active: true,
                password: `${values.name}@123`
            }))
            resetForm()
        }
    })

    useEffect(() => {
        if (success) {
            toast.success("emplyee create success")
        }
    }, [success])

    useEffect(() => {
        if (updateSuccess) {
            toast.success("Emplyee Acoount Update success")
        }
    }, [updateSuccess])

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    useEffect(() => {
        dispatch(readEmployee())
    }, [])

    useEffect(() => {
        if (success || updateSuccess) {
            dispatch(readEmployee())
        }
    }, [success, updateSuccess])
    return <>
        <Center>
            <div class="card">
                <div class="card-header">Employee CRUD</div>
                <div class="card-body">
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input type="text" className={handleClasses(formik, "photo")} {...formik.getFieldProps("photo")} placeholder='photo' />
                            <div className="invalid-feedback">{formik.errors.photo}</div>
                        </div>
                        <div>
                            <input type="text" className={handleClasses(formik, "name")} {...formik.getFieldProps("name")} placeholder='name' />
                            <div className="invalid-feedback">{formik.errors.name}</div>
                        </div>
                        <div>
                            <input type="email" className={handleClasses(formik, "email")} {...formik.getFieldProps("email")} placeholder='email' />
                            <div className="invalid-feedback">{formik.errors.email}</div>
                        </div>
                        <div>
                            <input type="number" className={handleClasses(formik, "mobile")} {...formik.getFieldProps("mobile")} placeholder='mobile' />
                            <div className="invalid-feedback">{formik.errors.mobile}</div>
                        </div>
                        <div>
                            <select className={handleClasses(formik, "department")} {...formik.getFieldProps("department")}>
                                <option value="">Choose Department </option>
                                <option value="frontend">frontend </option>
                                <option value="backend">backend</option>
                                <option value="mobile">mobile app </option>
                                <option value="devops">devops</option>
                                <option value="ui">ui/ux</option>
                            </select>
                            <div className="invalid-feedback">{formik.errors.department}</div>
                        </div>
                        <button className='btn btn-lg btn-primary w-100' type='submit'>Create Employee</button>
                    </form>
                </div>
            </div>
        </Center>

        <div className="container">
            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Photo</th>
                        <th>Department</th>
                        <th>Account</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allEmployees && allEmployees.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td> <img src={item.photo} height={50} alt="" /> </td>
                        <td>{item.department}</td>
                        <td>
                            {
                                item.active
                                    ? <span class="badge text-bg-success">Active</span>
                                    : <span class="badge text-bg-danger">In-Active</span>
                            }
                        </td>
                        <td>
                            {
                                item.active
                                    ? <button onClick={e => dispatch(handleEmployeeAccount({ id: item.id, active: false }))} className='btn btn-sm btn-danger'>Block</button>
                                    : <button onClick={e => dispatch(handleEmployeeAccount({ id: item.id, active: true }))} className='btn btn-sm btn-success'>un-Block</button>
                            }

                        </td>

                    </tr>)}
                </tbody>
            </table>
        </div>
    </>
}

export default AdminEmployee