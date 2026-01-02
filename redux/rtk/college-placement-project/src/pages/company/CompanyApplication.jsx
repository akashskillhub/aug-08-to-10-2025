import React from 'react'
import { useSelector } from 'react-redux'
import { useCompanyJobQuery, useGetCompanyApplicationQuery, useGetCompanyStudentsQuery, useUpdateApplicationMutation } from '../../redux/apis/company.api'
import Card from '../../components/ui/Card'
import { toast } from 'react-toastify'

const CompanyApplication = () => {
    const { company } = useSelector(state => state.auth)
    const { data } = useCompanyJobQuery(company.id)
    const { data: applicationData } = useGetCompanyApplicationQuery()
    const { data: studentData } = useGetCompanyStudentsQuery()

    const [updateApplication] = useUpdateApplicationMutation()

    const getStudeInfo = jobId => {
        return applicationData
            .filter(app => app.jid === jobId)
            .map(app => app.sid)
            .map(i => studentData.find(stud => stud.id === i))
    }
    const handleStatus = async appData => {
        try {
            await updateApplication(appData).unwrap()
            toast.success("application status update success")
        } catch (error) {
            toast.error(error ? error.message : "unable to update application status")
        }
    }
    return <div className="container">
        <div className="row">
            {
                data && studentData && applicationData && data.map(item => <div className="col-sm-12">
                    <Card showHeader={false} showFooter={false}>
                        <div className="row">
                            <div className="col-sm-6">
                                <h6>Job</h6>
                                <div>{item.id} : {item.title}  </div>
                                <div>{item.desc}</div>
                            </div>
                            <div className="col-sm-6">
                                <h6>Application</h6>
                                {
                                    getStudeInfo(item.id).map(stud => <Card showFooter={false} showHeader={false}>
                                        <div>
                                            <div> name: {stud.name}</div>
                                            <div> skills: {stud.skills}</div>
                                            <div> education: {stud.education}</div>
                                            <select onChange={e => handleStatus({
                                                id: applicationData.find(a => a.sid === stud.id && a.jid === item.id).id,
                                                status: e.target.value
                                            })} class="form-select">
                                                <option selected>Open this select menu</option>
                                                <option value="hire">Hire</option>
                                                <option value="reject">Reject</option>
                                            </select>
                                        </div>
                                    </Card>)
                                }
                            </div>
                        </div>
                    </Card>
                </div>)
            }
        </div>
    </div>
}

export default CompanyApplication