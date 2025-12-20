import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const [count, setCount] = useState(10)
    return <>
        <div>Home</div>
        <h1>{count}</h1>
        <button onClick={e => count === 15 ? navigate("/gallery") : setCount(count + 1)}>+1</button>
        {/* useEffect */}
    </>

}

export default Home