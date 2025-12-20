import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../share/utility'

const Home = () => {
    const [allBlogs, setAllBlogs] = useState([])
    const readBlogs = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/blogs`, { params: { publish: true } })
            setAllBlogs(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        readBlogs()
    }, [])
    return <>
        <div className="row">
            {
                allBlogs.map(item => <div className="col-sm-3">
                    <div class="card">
                        <img src={item.image} className='card-img-top' alt="" />
                        <div class="card-body">
                            <h6>{item.title}</h6>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </>
}

export default Home