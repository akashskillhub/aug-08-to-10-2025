import React from 'react'
import Input from '../../components/ui/Input'
import { useFormik } from 'formik'
import * as yup from "yup"
import { handleClasses } from '../../share/utility'
import { useAddStudentMutation, useDeletetudentMutation, useGetStudentsQuery, useUpdateStudentMutation } from '../../redux/apis/tpo.api'
import { toast } from 'react-toastify'
const AdminStudents = () => {
    const [addStudent, { isLoading }] = useAddStudentMutation()
    const { data } = useGetStudentsQuery()
    const [removeStudent, { isLoading: deleteIsLoading }] = useDeletetudentMutation()
    const [updateStudent] = useUpdateStudentMutation()
    const fields = [
        { label: "name", placeholder: "enter name", type: "text", },
        { label: "email", placeholder: "enter email", type: "email" },
        { label: "mobile", placeholder: "mobile", type: "number" },
        { label: "education", placeholder: "education", type: "text" },
        { label: "skills", placeholder: "skills", type: "text" },
    ]
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            education: "",
            skills: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            mobile: yup.string().required(),
            education: yup.string().required(),
            skills: yup.string().required(),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await addStudent({
                    ...values,
                    role: "student",
                    password: values.name + `@123`
                }).unwrap()
                toast.success("student register success")
            } catch (error) {
                toast.error(error ? error.message : "unable to register")
            } finally {
                resetForm()
            }
        }
    })

    const handleRemove = async id => {
        try {
            await removeStudent(id).unwrap()
            toast.success("student delete success")
        } catch (error) {
            toast.error(error ? error.message : "unable to delete student")
        }
    }

    const handleUpdate = async studentData => {
        try {
            await updateStudent(studentData).unwrap()
            toast.success("student update success")
        } catch (error) {
            toast.error(error ? error.message : "unable to update student")
        }
    }

    return <div className='container mt-3'>
        <div className='text-end'>
            <button data-bs-toggle="modal" data-bs-target="#stud" type="button" class="btn btn-primary">+ Add Student</button>
        </div>

        {
            data && <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>education</th>
                        <th>skills</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.education}</td>
                            <td>{item.skills}</td>
                            <td>
                                {
                                    item.active
                                        ? <button onClick={e => handleUpdate({ ...item, active: false })}
                                            type="button"
                                            className="btn btn-danger btn-sm me-2">Block</button>
                                        : <button onClick={e => handleUpdate({ ...item, active: true })}
                                            type="button"
                                            className="btn btn-success btn-sm me-2">Un Block</button>
                                }

                                <button onClick={e => handleRemove(item.id)} type="button" class="btn btn-danger btn-sm">
                                    {
                                        deleteIsLoading
                                            ? <div class="spinner-border text-primary"></div>
                                            : <bi className="bi bi-trash"></bi>
                                    }

                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }


        {/* modal start */}

        <div class="modal fade" id="stud" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Students</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={formik.handleSubmit}>
                            {
                                fields.map(item => <Input
                                    {...item}
                                    className={handleClasses(formik, item.label)}
                                    {...formik.getFieldProps(item.label)}
                                />)
                            }
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        {/* modal end */}

    </div >
}

export default AdminStudents