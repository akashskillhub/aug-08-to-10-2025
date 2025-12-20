import React, { useContext } from 'react'
import { TestContext } from '../App'

const Home = () => {
    const str = useContext(TestContext)
    return (
        <div>Home {str}</div>
    )
}

export default Home