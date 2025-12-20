import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { depositMoney, widrawMoney } from './redux/bank.slice'

const Bank = () => {
    const { balance } = useSelector(state => state.hdfc)
    const dispatch = useDispatch()
    return <>
        <h1>{balance}</h1>
        <button onClick={e => dispatch(depositMoney(100))}>add</button>
        <button onClick={e => dispatch(widrawMoney(10))}>remove</button>
    </>
}

export default Bank