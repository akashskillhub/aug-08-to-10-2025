import axios from 'axios'
import clsx from 'clsx'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import * as yup from 'yup'

const Products = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            price: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            handleCreate()
            resetForm()
        }
    })


    const handleclasses = key => clsx({
        "form-control": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    const handleCreate = async () => {
        try {
            await axios.post("http://localhost:5000/material", formik.values)
            console.log("create success")
        } catch (error) {
            console.log(error)
        }
    }

    const handleRead = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/material")
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = async () => {
        try {
            const { data } = await axios.patch("http://localhost:5000/material/1", { name: "DELL LAPTOP" })
            console.log("update success")
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        try {
            const { data } = await axios.delete("http://localhost:5000/material/1")
            console.log("delete success")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleRead()
    }, [])
    return <>

        <button onClick={handleUpdate}>update</button>
        <button onClick={handleDelete}>delete</button>

        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    type="text"
                    className={handleclasses("name")}
                    {...formik.getFieldProps("name")}
                />
                <div className="invalid-feedback">{formik.errors.name}</div>
            </div>

            <div>
                <input type="text"
                    className={handleclasses("price")}
                    {...formik.getFieldProps("price")}
                />
                <div className="invalid-feedback">{formik.errors.price}</div>
            </div>
            <button type='submit'>add</button>
        </form>
    </>
}

export default Products