import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { createProduct, readProduct } from '../redux/actions/product.actions'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import clsx from 'clsx'

const Products = () => {
    const [pagi, setPagi] = useState({ limit: 2, page: 1 })

    const dispatch = useDispatch()
    const { loading, error, allProducts, createSuccess, total } = useSelector(state => state.inventory)

    const formik = useFormik({
        initialValues: {
            title: "",
            price: "",
            desc: "",
            hero: "",
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            price: yup.string().required(),
            desc: yup.string().required(),
            hero: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(createProduct(values))
            resetForm()
        }
    })

    const handlePagination = () => {
        if (total) {
            const totalBtn = Math.ceil(total / pagi.limit)
            const allBtn = Array
                .from({ length: totalBtn })
                .map((item, i) => <button
                    onClick={e => setPagi({ ...pagi, page: i + 1 })}
                    type="button"
                    className={clsx({
                        "btn": true,
                        "btn-primary": pagi.page === i + 1,
                        "btn-outline-primary": pagi.page !== i + 1
                    })}>{i + 1}</button>)

            const preBtn = pagi.page === 1
                ? null
                : <button onClick={e => setPagi({
                    ...pagi,
                    page: pagi.page === 1 ? 1 : pagi.page - 1
                })}>pre</button>

            const nextBtn = pagi.page === totalBtn
                ? null
                : <button onClick={e => setPagi({
                    ...pagi,
                    page: pagi.page === totalBtn ? totalBtn : pagi.page + 1
                })}>next</button>
            allBtn.unshift(preBtn)
            allBtn.push(nextBtn)

            return allBtn

        }
    }

    useEffect(() => {
        if (createSuccess) {
            toast.success("product create success")
        }
    }, [createSuccess])

    useEffect(() => {
        dispatch(readProduct(pagi))
    }, [pagi])
    return <>
        <form onSubmit={formik.handleSubmit}>
            <div>

                <input {...formik.getFieldProps("title")} type="text" placeholder='title' />
                <div >{formik.errors.title}</div>
            </div>
            <div>

                <input {...formik.getFieldProps("price")} type="text" placeholder='price' />
                <div >{formik.errors.price}</div>
            </div>
            <div>

                <input {...formik.getFieldProps("desc")} type="text" placeholder='desc' />
                <div >{formik.errors.desc}</div>
            </div>
            <div>

                <input {...formik.getFieldProps("hero")} type="text" placeholder='hero' />
                <div >{formik.errors.hero}</div>
            </div>
            <button type='submit'>create</button>
        </form>

        <div>
            <select onChange={e => setPagi({ page: 1, limit: e.target.value })}>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
        </div>

        {handlePagination()}

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>price</th>
                    <th>desc</th>
                    <th>hero</th>
                </tr>
            </thead>
            <tbody>
                {
                    allProducts.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.desc}</td>
                        <td>
                            <img src={item.hero} height={50} alt="" />
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

        {handlePagination()}
    </>
}

export default Products