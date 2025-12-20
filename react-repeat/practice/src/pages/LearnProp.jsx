import React from 'react'

const LearnProp = () => {
    return <>
        <div>LearnProp</div>

        {/*      👇 Props */}
        <Child brand="hp" city="london" />
    </>
}

const Child = ({ brand, city }) => {
    return <>
        <div>Child</div>
        <h1>{brand}</h1>
        <h1>{city}</h1>
    </>
}


export default LearnProp