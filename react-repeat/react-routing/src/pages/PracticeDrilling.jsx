import React from 'react'

const PracticeDrilling = ({ fn, num }) => {
    return <>
        <div>PracticeDrilling</div>
        <button onClick={e => fn(num + 1)}>+1</button>
        <hr />
        <Child x={fn} y={num} />
    </>
}

const Child = ({ x, y }) => {
    return <>
        <div>child</div>
        <button onClick={e => x(y - 1)}>-1</button>
    </>
}

export default PracticeDrilling