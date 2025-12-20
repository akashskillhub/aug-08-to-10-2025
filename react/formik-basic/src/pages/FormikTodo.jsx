import clsx from 'clsx'
import { useFormik } from 'formik'
import * as yup from "yup"

const FormikTodo = () => {


    const formik = useFormik({
        initialValues: { task: "", desc: "", priority: "" },
        validationSchema: yup.object({
            task: yup.string().required("Task chi value kon takel?").min(2, "atleast 2 char t tak"),
            desc: yup.string().required(),
            priority: yup.string().required()
        }),
        onSubmit: () => {
            console.log("form submitted")
        }
    })

    return <div className="container">
        <form onSubmit={formik.handleSubmit}>
            <pre>{JSON.stringify(formik.values, null, 2)}</pre>
            <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
            <pre>{JSON.stringify(formik.touched, null, 2)}</pre>
            <div>
                <input
                    className={`form-control my-2 ${formik.errors.task && 'is-invalid'} ${formik.touched.task && !formik.errors.task && 'is-valid'}`}
                    type="text"
                    name="task"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <span className="invalid-feedback">{formik.errors.task}</span>
            </div>
            <div>
                <textarea
                    onBlur={formik.handleBlur}
                    className={`form-control my-2 ${formik.errors.desc && 'is-invalid'} ${formik.touched.desc && !formik.errors.desc && 'is-valid'}`}
                    name="desc"
                    onChange={formik.handleChange}></textarea>
                <span className="invalid-feedback">{formik.errors.desc}</span>
            </div>
            <div>
                <select
                    onBlur={formik.handleBlur}
                    className={`form-control my-2 ${formik.errors.priority && 'is-invalid'} ${formik.touched.priority && !formik.errors.priority && 'is-valid'}`}
                    name="priority"
                    onChange={formik.handleChange}>
                    <option value="">Choose priority</option>
                    <option value="high">high</option>
                    <option value="meduim">meduim</option>
                    <option value="low">low</option>
                </select>
                <span className="invalid-feedback">{formik.errors.priority}</span>
            </div>
            <button type='submit'>Add</button>
        </form>
    </div>
}

export default FormikTodo