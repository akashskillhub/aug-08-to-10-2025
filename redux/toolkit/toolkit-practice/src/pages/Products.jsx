import { useDispatch, useSelector } from "react-redux"
import { createProduct, deleteProduct, readProduct, updateProduct } from "../redux/actions/product.actions"
import { useEffect } from "react"

const Products = () => {
    const {
        loading,
        error,
        createSuccess,
        updateSuccess,
        deleteSuccess,
        allProducts } = useSelector(state => state.products)

    const dispatch = useDispatch()
    const values = {
        title: "fake product",
        price: 500,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=799&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }


    useEffect(() => {
        dispatch(readProduct())
    }, [])

    useEffect(() => {
        if (createSuccess || updateSuccess || deleteSuccess) {
            dispatch(readProduct())
        }
    }, [createSuccess, updateSuccess, deleteSuccess])


    if (loading) {
        return <div class="spinner-border text-primary"></div>
    }

    return <>
        <button onClick={e => dispatch(createProduct(values))}>create</button>



        <hr />
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>price</th>
                    <th>image</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allProducts.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td> <img src={item.image} height={50} alt="" /> </td>
                        <td>
                            <button onClick={e => dispatch(updateProduct({ ...item, title: "dell laptop" }))}>update</button>
                            <button onClick={e => dispatch(deleteProduct(item.id))}>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Products