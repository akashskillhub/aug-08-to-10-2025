import React, { useContext } from 'react'
import { ProductContext } from '../App'

const PracticeContext = () => {
    const { products, cart, setCart } = useContext(ProductContext)
    return <div style={{ display: "flex", gap: 20 }}>
        {
            products.map(item => <div style={{ border: "2px solid gray", padding: 10 }}>
                <p>{item.id} {item.name}</p>
                <p>Price: {item.price}</p>
                <button onClick={e => setCart([...cart, item])}>Add to cart</button>
            </div>)
        }
    </div>
}

export default PracticeContext