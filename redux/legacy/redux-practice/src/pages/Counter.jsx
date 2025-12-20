import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc, reset } from '../redux/actions/counterActions'
// import { dec, inc, reset } from '../redux/store'

const Counter = () => {
    //                             👇store value      👇 from combinedReducer
    const { count } = useSelector(kahipn => kahipn.counter)
    const dispatch = useDispatch()


    return <>
        <h1>{count}</h1>
        <button onClick={e => dispatch(inc())}>+1</button>
        <button onClick={e => dispatch(dec())}>-1</button>
        <button onClick={e => dispatch(reset())}>reset</button>
    </>
}

export default Counter