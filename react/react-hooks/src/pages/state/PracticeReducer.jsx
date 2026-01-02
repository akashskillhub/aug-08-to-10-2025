import clsx from 'clsx'
import { useFormik } from 'formik'
import { useReducer, useState } from 'react';
import * as yup from 'yup'

const todoReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_TODO": return { ...state, NOTES: [...state.NOTES, payload] };
        case "DELETE_TODO": return { ...state, NOTES: state.NOTES.filter(item => item.id !== payload) };
        case "UPDATE_TODO": return;
        default: return state;
    }
}

const PracticeReducer = () => {

    const [{ NOTES }, dispatch] = useReducer(todoReducer, { NOTES: [] })

    const [user, setUser] = useState({ name: 'ross', age: 20 })

    const formik = useFormik({
        initialValues: {
            task: "Learn HTML",
            desc: "fake desc",
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch({ type: "ADD_TODO", payload: { ...values, id: NOTES.length + 1 } })
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    // return <>
    //     <pre>{JSON.stringify(user)}</pre>
    //     <button onClick={e => setUser({ name: user.name + " doe" })}>change name</button>
    // </>
    return <>
        <div className="container">


            <div class="card">
                <div class="card-header">Todo</div>
                <div class="card-body">
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input
                                type="text"
                                className={handleClasses("task")}
                                {...formik.getFieldProps("task")} />
                            <div className="invalid-feedback">{formik.errors.task}</div>
                        </div>
                        <div>
                            <input
                                type="text"
                                className={handleClasses("desc")}
                                {...formik.getFieldProps("desc")} />
                            <div className="invalid-feedback">{formik.errors.desc}</div>
                        </div>
                        <button type="submit" class="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>

            {
                NOTES && <table class="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task</th>
                            <th>Desc</th>
                            <th>actiosn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            NOTES.map(item => <tr>
                                <td>{item.id}</td>
                                <td>{item.task}</td>
                                <td>{item.desc}</td>
                                <td>
                                    <button
                                        onClick={e => dispatch({ type: "DELETE_TODO", payload: item.id })}>
                                        delete
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>
    </>
}

export default PracticeReducer

// lazy loading
// error boundary