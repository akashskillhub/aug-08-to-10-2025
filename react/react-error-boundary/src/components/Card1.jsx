import React, { useState } from 'react'

const Card1 = () => {
    const [count, setCount] = useState(10)
    return <>
        <div class="card">
            <div class="card-header">card 1</div>
            <div class="card-body">
                {count}
                <button onClick={e => setCount({})}>create error</button>
            </div>
            <div class="card-footer">footer</div>
        </div>
    </>
}

export default Card1