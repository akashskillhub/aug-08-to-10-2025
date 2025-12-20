import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../share/utility'
import { toast } from 'react-toastify'

const AdminAuther = () => {
    const [allAuthers, setAllAuthers] = useState([])

    const getAllAuthers = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/users`, { params: { role: "auther" } })
            setAllAuthers(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleAutherAccount = async (id, status) => {
        try {
            await axios.patch(`${API_URL}/users/${id}`, { active: status })
            getAllAuthers()
            toast.success("Account update success")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllAuthers()
    }, [])
    return <>
        <table className="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Email</th>
                    <th>Active</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allAuthers.map(item => <tr className={`${item.active ? "table-success" : "table-danger"}`}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                            <img
                                className='rounded-circle'
                                src={item.photo}
                                height={50}
                                width={50}
                            />
                        </td>
                        <td>{item.email}</td>
                        <td>{item.active ? "Active" : "in Active"}</td>
                        <td>
                            {
                                item.active
                                    ? <button onClick={e => handleAutherAccount(item.id, false)} type="button" class="btn btn-outline-danger">
                                        <i className="bi bi-ban"></i>
                                    </button>
                                    : <button onClick={e => handleAutherAccount(item.id, true)} type="button" class="btn btn-outline-success">
                                        <i className="bi bi-unlock"></i>
                                    </button>
                            }
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default AdminAuther