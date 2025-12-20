import React from 'react'

const PracticeProps = ({ brand, country, est, demo, dummy, skillhub }) => {
    return <>
        <h1>brand {brand}</h1>
        <h1>country {country}</h1>
        <h1>est {est}</h1>
        {
            demo.map(item => <h1>{item}</h1>)
        }
        <h1>{dummy.name}</h1>
        <h1>{dummy.city}</h1>
        <button onClick={skillhub}>click  me</button>
    </>
}

export default PracticeProps