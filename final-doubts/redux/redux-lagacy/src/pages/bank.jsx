import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { depositMoney, widrawMoney } from '../redux/store'

const Bank = () => {
    const { balance } = useSelector(state => state.hdfc)
    const dispatch = useDispatch()
    return <>
        <div>Bank</div>
        <h1>{balance}</h1>
        <button onClick={e => dispatch(depositMoney())}>add</button>
        <button onClick={e => dispatch(widrawMoney())}>remove</button>
    </>

}

export default Bank