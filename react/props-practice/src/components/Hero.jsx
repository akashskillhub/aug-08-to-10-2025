import React from 'react'

const Hero = ({ arr, cart, setCart }) => {
    return <>
        <div className="container">
            <div className="row">
                {
                    arr.map(item => <div className="col-sm-4 mb-3">
                        <div class="card">
                            <img src={item.image} className='img-fluid' alt="" />
                            <div class="card-body">
                                <h6>{item.name}</h6>
                                <p>{item.price}</p>
                                <button onClick={e => setCart([...cart, item])} type="button" class="btn btn-primary">Add To Cart</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </>
}

export default Hero