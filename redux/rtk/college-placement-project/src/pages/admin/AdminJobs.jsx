import React from 'react'
import { useGetCompaniesQuery, useGetStudentsQuery, useTpoApplicationsQuery, useTpoJobsQuery } from '../../redux/apis/tpo.api'
import Card from '../../components/ui/Card'

const AdminJobs = () => {
    const { data } = useTpoJobsQuery()
    const { data: companydata } = useGetCompaniesQuery()
    const { data: applicationData } = useTpoApplicationsQuery()
    const { data: studentData } = useGetStudentsQuery()
    const getCompanyById = id => companydata.find(item => item.id === id)

    const getStudeInfo = jobId => {
        return applicationData
            .filter(app => app.jid === jobId)
            .map(app => app.sid)
            .map(i => studentData.find(stud => stud.id === i))
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
        <div className="container">
            <div className="row">
                {
                    data && studentData && applicationData && companydata && data.map(item => <div className="col-sm-12 my-3">
                        <Card showFooter={false} showHeader={false} >
                            <div className="row">
                                <div className="col-sm-4">
                                    <h6>{item.title}</h6>
                                    <div>{item.desc}</div>
                                    <div>{item.skills}</div>
                                    <div>Salary : {item.salary}</div>
                                    <div>Location : {item.location}</div>
                                    <div>Experice : {item.experice}</div>
                                    <div>Job Type : {item.type}</div>
                                    <div>
                                        {
                                            item.publish
                                                ? <span class="badge text-bg-success">Publish</span>
                                                : <span class="badge text-bg-danger">un-publish</span>
                                        }
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <h6>Comapny Details</h6>
                                    <div> <img src={getCompanyById(item.company).logo} height={50} alt="" /> </div>
                                    <div>Name: {getCompanyById(item.company).name}</div>
                                    <div>email: {getCompanyById(item.company).email}</div>
                                </div>
                                <div className="col-sm-4">
                                    <h6>Applications</h6>
                                    {
                                        getStudeInfo(item.id).map(stud => <div>
                                            <ul className='list-group'>
                                                <li className='list-group-item d-flex justify-content-between my-2'>
                                                    <strong>{stud.name}</strong>
                                                    {
                                                        getStatus(applicationData.find(app => app.sid === stud.id && app.jid === item.id).status)
                                                    }
                                                </li>
                                            </ul>
                                        </div>)
                                    }
                                </div>
                            </div>

                        </Card>
                    </div>)
                }
            </div>
        </div>
    </>
}

export default AdminJobs