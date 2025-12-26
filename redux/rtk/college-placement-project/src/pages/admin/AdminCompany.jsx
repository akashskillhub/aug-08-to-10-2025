import { toast } from 'react-toastify'
import { useGetCompaniesQuery, useHandleCompanyMutation } from '../../redux/apis/tpo.api'

const AdminCompany = () => {
    const { data } = useGetCompaniesQuery()
    const [handleComapny, { isLoading }] = useHandleCompanyMutation()

    const handleBlockUnblockComapny = async companyData => {
        try {
            await handleComapny(companyData).unwrap()
            toast.success("company status update")
        } catch (error) {
            toast.error(error ? error.message : "unable to update status")
        }
    }
    return <div className='container mt-3'>
        {
            data && <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>address</th>
                        <th>logo</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => <tr className={`${item.active ? "table-success" : "table-danger"} `}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.address}</td>
                            <td> <img src={item.logo} height={50} alt="" /> </td>
                            <td>
                                {
                                    item.active
                                        ? <button
                                            onClick={e => handleBlockUnblockComapny({ ...item, active: false })}
                                            type="button"
                                            className="btn btn-danger">block</button>
                                        : <button
                                            onClick={e => handleBlockUnblockComapny({ ...item, active: true })}
                                            type="button"
                                            className="btn btn-success">un block</button>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </div>
}

export default AdminCompany