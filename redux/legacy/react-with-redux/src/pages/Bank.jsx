import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { dec, inc } from '../redux/store'

const Bank = () => {
    const [amount, setAmount] = useState(0)
    const { balance } = useSelector(state => state) //  👈 same as  getState

    return <>
        <h1>{balance}</h1>
        <input
            type="number"
            placeholder='Enter Amount'
            onChange={e => setAmount(+e.target.value)} />

        <button onClick={e => inc(amount)}>Deposit</button>
        <button onClick={e => dec(amount)}>Widraw</button>

    </>

}

export default Bank