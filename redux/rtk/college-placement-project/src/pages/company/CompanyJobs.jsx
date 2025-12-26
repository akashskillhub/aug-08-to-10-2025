import { useFormik } from 'formik'
import * as yup from 'yup'
import Input from '../../components/ui/Input'
import { handleClasses } from '../../share/utility'
import { useCompanyJobQuery, useCreateJobMutation, useDeleteJobMutation, useUpdateJobMutation } from '../../redux/apis/company.api'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const CompanyJobs = () => {
    const { data } = useCompanyJobQuery()
    const [createJob] = useCreateJobMutation()
    const [updateJob] = useUpdateJobMutation()
    const [deleteJob] = useDeleteJobMutation()

    const { company } = useSelector(state => state.auth)

    const fields = [
        { label: "title", placeholder: "enter title", type: "text", },
        { label: "desc", placeholder: "enter description", type: "text" },
        { label: "skills", placeholder: "enter skills", type: "text" },
        { label: "salary", placeholder: "enter salary", type: "text" },
        { label: "experice", placeholder: "enter experience", type: "number" },
        { label: "location", placeholder: "enter location", type: "text" },
        { label: "type", placeholder: "enter job type", type: "text" },
    ]
    const formik = useFormik({
        initialValues: {
            title: "jr frontend developer",
            desc: "React and Nextjs Developer",
            skills: "html,css,js,react",
            salary: "25000",
            experice: "0",
            location: "pune",
            type: "fulltime",
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            desc: yup.string().required(),
            skills: yup.string().required(),
            salary: yup.string().required(),
            experice: yup.string().required(),
            location: yup.string().required(),
            type: yup.string().required(),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await createJob({ ...values, publish: false, company: company.id }).unwrap()
                toast.success("new job create success")
            } catch (error) {
                toast.error(error ? error.message : "unable to create new job")
            } finally {
                resetForm()
            }
        }
    })

    const handleRemoveJOb = async (id) => {
        try {
            await deleteJob(id).unwrap()
            toast.success("job delete success")
        } catch (error) {
            toast.error(error ? error.message : "unable to delete new job")
        }
    }
    const handleJobStatus = async (jobData) => {
        try {
            await updateJob(jobData).unwrap()
            toast.success("job update success")
        } catch (error) {
            toast.error(error ? error.message : "unable to update new job")
        }
    }
    return <>
        <div className="container mt-3">
            <div className="text-end">
                <button
                    data-bs-toggle="modal"
                    data-bs-target="#job"
                    type="button"
                    className="btn btn-primary">+ Post New Job</button>
            </div>

            {
                data && <table class="table table-dark table-striped table-hover mt-3">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>title</th>
                            <th>desc</th>
                            <th>skills</th>
                            <th>salary</th>
                            <th>experice</th>
                            <th>location</th>
                            <th>type</th>
                            <th>publish</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => <tr className={`${item.publish ? "table-success" : "table-danger"}`}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.desc}</td>
                                <td>{item.skills}</td>
                                <td>{item.salary}</td>
                                <td>{item.experice}</td>
                                <td>{item.location}</td>
                                <td>{item.type}</td>
                                <td>{item.publish ? "Publish" : "Un-Publish"}</td>
                                <td>
                                    {
                                        item.publish
                                            ? <button
                                                onClick={e => handleJobStatus({ ...item, publish: false })}
                                                type="button"
                                                className="btn btn-sm btn-danger">un-publish</button>
                                            : <button
                                                onClick={e => handleJobStatus({ ...item, publish: true })}
                                                type="button"
                                                className="btn btn-sm btn-success">publish</button>
                                    }
                                    <button onClick={e => handleRemoveJOb(item.id)} type="button" className="ms-2 btn btn-sm btn-danger">
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>

        {/* modal start */}

        <div class="modal fade" id="job" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New Job</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="row">
                                {
                                    fields.map(item => <div className="col-sm-6">
                                        <Input
                                            {...item}
                                            className={handleClasses(formik, item.label)}
                                            {...formik.getFieldProps(item.label)}
                                            invalidFeedback={formik.errors[item.label]}
                                        />
                                    </div>)
                                }
                            </div>
                            <button data-bs-dismiss="modal" type="submit" class="btn btn-primary">Add New Job</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        {/* modal end */}
    </>
}

export default CompanyJobs