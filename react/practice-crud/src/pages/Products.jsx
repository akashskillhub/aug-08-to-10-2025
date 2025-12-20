/*
    task 1 : handle this with formik and yup
    task 2 : show error messages appropriatly
    task 3 : create handleClasses to handle className
*/

import clsx from "clsx"
import { useFormik } from "formik"
import * as yup from "yup"
import Center from "../components/Center"
import axios from "axios"
import { useEffect, useState } from "react"
const Products = () => {
    const [allProducts, setAllProducts] = useState([])
    const API_URL = "http://localhost:5000/products"
    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            desc: "",
            category: "",
            stock: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            price: yup.string().required(),
            desc: yup.string().required(),
            category: yup.string().required(),
            stock: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            createProduct()
            readProducts()
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    const createProduct = async () => {
        try {
            await axios.post(API_URL, formik.values)
            console.log("product create success")
        } catch (error) {
            console.log(error)
        }
    }

    const readProducts = async () => {
        try {
            const { data } = await axios.get(API_URL)
            setAllProducts(data)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteProduct = async id => {
        try {
            await axios.delete(`${API_URL}/${id}`)
            console.log("product delete success")
            readProducts()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        readProducts()
    }, [])

    return <Center>

        <form onSubmit={formik.handleSubmit}>

            <input className={handleClasses("name")} {...formik.getFieldProps("name")} type="text" placeholder='name' />
            <span className="invalid-feedback">{formik.errors.name}</span>

            <input className={handleClasses("price")} {...formik.getFieldProps("price")} type="number" placeholder='price' />
            <span className="invalid-feedback">{formik.errors.price}</span>

            <input className={handleClasses("desc")} {...formik.getFieldProps("desc")} type="text" placeholder='desc' />
            <span className="invalid-feedback">{formik.errors.desc}</span>

            <select className={handleClasses("category")} {...formik.getFieldProps("category")}   >
                <option value="">choose category</option>
                <option value="clothing">clothing</option>
                <option value="shoe">shoe</option>
                <option value="electronics">electronics</option>
            </select>
            <span className="invalid-feedback">{formik.errors.category}</span>

            <input className={handleClasses("stock")} {...formik.getFieldProps("stock")} type="number" placeholder='stock' />
            <span className="invalid-feedback">{formik.errors.stock}</span>

            <button type="submit">add</button>
        </form >

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>desc</th>
                    <th>category</th>
                    <th>stock</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allProducts.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.desc}</td>
                        <td>{item.category}</td>
                        <td>{item.stock}</td>
                        <td>
                            <button onClick={e => deleteProduct(item.id)}>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

    </Center>

}

export default Products