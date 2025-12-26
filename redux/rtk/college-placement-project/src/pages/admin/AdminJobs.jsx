import React from 'react'
import { useGetCompaniesQuery, useTpoJobsQuery } from '../../redux/apis/tpo.api'
import Card from '../../components/ui/Card'

const AdminJobs = () => {
    const { data } = useTpoJobsQuery()
    const { data: companydata } = useGetCompaniesQuery()

    const getCompanyById = id => companydata.find(item => item.id === id)

    return <>
        <div className="container">
            <div className="row">
                {
                    data && companydata && data.map(item => <div className="col-sm-12 my-3">
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