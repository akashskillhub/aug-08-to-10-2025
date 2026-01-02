import React from 'react'
import { useApplyJobMutation, useCheckApplyQuery, useLazyCheckApplyQuery, useReadStudentComapnyQuery, useReadStudentJobQuery } from '../../redux/apis/student.api'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const StudentJobs = () => {
    const { data: applicationData } = useCheckApplyQuery()
    const { data } = useReadStudentJobQuery()
    const { data: companyData } = useReadStudentComapnyQuery()
    const [applyJob] = useApplyJobMutation()
    const { student } = useSelector(state => state.auth)

    const findById = id => companyData.find(item => item.id === id)

    const handleJobApply = async jobId => {
        try {
            await applyJob({ sid: student.id, jid: jobId, status: "pending" }).unwrap()
            toast.success("job apply success")
        } catch (error) {
            toast.error(error ? error.message : "unable to apply job")
        }
    }
    const getStatus = status => {
        switch (status) {
            case "hire": return <span class="badge text-bg-success">Hire</span>
            case "pending": return <div class="spinner-border text-primary"></div>
            case "reject": return <span class="badge text-bg-danger">Rejected</span>
            default: break;
        }
    }

    return <>

        <div className="container mt-3">
            <div className="row">
                {
                    data && companyData && data.map(item => <div className="col-sm-12">
                        <div className="card mb-2">
                            <div
                                className="card-header d-flex justify-content-between"
                                data-bs-toggle="collapse"
                                data-bs-target={`#job-${item.id}`}>
                                {item.title}  by {findById(item.company).name}

                                {
                                    applicationData.find(app => app.sid === student.id && app.jid === item.id)
                                        ? getStatus(applicationData.find(app => app.sid === student.id && app.jid === item.id).status)
                                        : <button onClick={e => handleJobApply(item.id)} type="button" class="btn btn-primary btn-sm">Apply</button>
                                }

                            </div>
                            <div className="collapse" id={`job-${item.id}`}>
                                <div className="card-body">
                                    <div> {item.desc} </div>
                                    <div> salary : {item.salary} </div>
                                    <div> Skills : {item.skills} </div>
                                    <div> Location : {item.location} </div>
                                    <div> Experice  : {item.experice} </div>
                                    <div> Type  : {item.type} </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </>
}

export default StudentJobs