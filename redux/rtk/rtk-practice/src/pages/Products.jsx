import clsx from 'clsx'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useCreateProductMutation, useDeleteProductMutation, useReadProductsQuery, useUpdateProductMutation } from '../redux/apis/product.api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Products = () => {
    const [addProduct, { isLoading, isSuccess, isError, error }] = useCreateProductMutation()
    const {
        data,
        isLoading: readIsLoading,
        isSuccess: readIsSuccess,
        isError: readIsError,
        error: readError
    } = useReadProductsQuery()

    const [deleteProduct, {
        isLoading: deleteIsLoading,
        isSuccess: deleteIsSuccess,
        isError: deleteIsError,
        error: deleteError
    }] = useDeleteProductMutation()


    const [updateProduct, {
        isLoading: updateIsLoading,
        isSuccess: updateIsSuccess,
        isError: updateIsError,
        error: updateError
    }] = useUpdateProductMutation()

    const formik = useFormik({
        initialValues: {
            title: "fake product",
            price: "50000",
            desc: "fake desc",
            hero: "https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            price: yup.string().required(),
            desc: yup.string().required(),
            hero: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            addProduct({ ...values, publish: false })
            resetForm()
        }
    })

    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("product create success")
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            toast.error(error ? error.message : "unable to  create product")
        }
    }, [isError])

    useEffect(() => {
        if (readIsError) {
            toast.error(readError ? readError.message : "unable to read product")
        }
    }, [readIsError])


    useEffect(() => {
        if (deleteIsSuccess) {
            toast.success("product Remove success")
        }
    }, [deleteIsSuccess])

    useEffect(() => {
        if (deleteIsError) {
            toast.error(deleteError ? deleteError.message : "unable to delete product")
        }
    }, [deleteIsError])

    useEffect(() => {
        if (updateIsSuccess) {
            toast.success("product update success")
        }
    }, [updateIsSuccess])

    useEffect(() => {
        if (updateIsError) {
            toast.error(updateError ? updateError.message : "unable to update producty")
        }
    }, [updateIsError])


    if (isLoading || readIsLoading || deleteIsLoading || updateIsLoading) {
        return <div class="spinner-border text-primary"></div>
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Products</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>

                                    <input className={handleClasses("title")}  {...formik.getFieldProps("title")} type="text" placeholder='title' />
                                    <div >{formik.errors.title}</div>
                                </div>
                                <div>

                                    <input className={handleClasses("price")} {...formik.getFieldProps("price")} type="text" placeholder='price' />
                                    <div >{formik.errors.price}</div>
                                </div>
                                <div>

                                    <input className={handleClasses("desc")}  {...formik.getFieldProps("desc")} type="text" placeholder='desc' />
                                    <div >{formik.errors.desc}</div>
                                </div>
                                <div>

                                    <input className={handleClasses("hero")}  {...formik.getFieldProps("hero")} type="text" placeholder='hero' />
                                    <div >{formik.errors.hero}</div>
                                </div>
                                <button className='btn btn-primary w-100 btn-lg' type='submit'>create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <table class="table table-dark table-striped table-hover mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>price</th>
                        <th>desc</th>
                        <th>hero</th>
                        <th>publish</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map(item => <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.desc}</td>
                            <td>
                                <img src={item.hero} height={50} alt="" />
                            </td>
                            <td>
                                {item.publish ? "Publish" : "Un-Publish"}
                            </td>
                            <td>
                                {
                                    item.publish
                                        ? <button onClick={e => updateProduct({ ...item, publish: false })} className='btn btn-outline-warning me-2'>Un-Publish</button>
                                        : <button onClick={e => updateProduct({ ...item, publish: true })} className='btn btn-outline-warning me-2'>Publish</button>
                                }

                                <button onClick={e => deleteProduct(item.id)} className='btn btn-outline-danger'>Remove</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div >





    </>
}

export default Products