import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeTodo, readEmployeeTodo } from '../redux/actions/employee.actions'
import { toast } from 'react-toastify'

const EmployeeDashboard = () => {
    const { employeeTodos, updateSuccess, loading, error } = useSelector(state => state.employee)
    const { employee } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readEmployeeTodo(employee.id))
    }, [])

    useEffect(() => {
        if (updateSuccess) {
            toast.success("task complete")
            dispatch(readEmployeeTodo(employee.id))
        }
    }, [updateSuccess])

    return <>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>task</th>
                    <th>desc</th>
                    <th>priority</th>
                    <th>complete</th>
                </tr>
            </thead>
            <tbody>
                {
                    employeeTodos && employeeTodos.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.task}</td>
                        <td>{item.desc}</td>
                        <td>{item.priority}</td>
                        <td>
                            {
                                item.complete
                                    ? <span class="badge text-bg-success">Complete</span>
                                    : <button onClick={e => dispatch(completeTodo({ id: item.id, complete: true }))} type="button" class="btn btn-outline-light">Mark Complete</button>
                            }
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default EmployeeDashboard