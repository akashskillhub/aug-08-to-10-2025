import React, { useEffect } from 'react'
import { useGetPublicProductsQuery } from '../redux/apis/public.api'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cart.slice'

const Home = () => {
    const { data, isLoading, isError, error } = useGetPublicProductsQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isError) {
            toast.error(error ? error.message : "unable to fetch data")
        }
    }, [isError])


    if (isLoading) {
        return <div class="spinner-border text-primary"></div>
    }
    return <>
        <div className="container">
            <div className="row">
                {
                    data && data.map(item => <div className="col-sm-4">
                        <div class="card">
                            <img src={item.hero} className='img-fluid' alt="" />
                            <div class="card-body">
                                <h6>{item.title}</h6>
                                <p>{item.price}</p>
                                <p>{item.desc}</p>
                                <button onClick={e => dispatch(addToCart(item))} type="button" class="btn btn-primary">Add To Cart</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </>
}

export default Home