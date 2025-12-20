import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [allProducts, setAllProducts] = useState([])
    const API_URL = "http://localhost:5000/products"

    const readProducts = async () => {
        try {
            const { data } = await axios.get(API_URL)
            setAllProducts(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        readProducts()
    }, [])
    return <>
        <div className="container">
            <div className="row">
                {
                    allProducts.map(item => <div className="col-sm-4">
                        <div class="card">
                            <div class="card-header">{item.name}</div>
                            <div class="card-body">
                                <ul>
                                    <li>{item.price}</li>
                                    <li>{item.desc}</li>
                                    <li>{item.category}</li>
                                    <li>{item.stock}</li>
                                </ul>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </>
}

export default Home