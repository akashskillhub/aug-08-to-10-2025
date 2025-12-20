import React from 'react'

// const LearnProps = props => {

//                 👇 Object Destructuring
const LearnProps = ({ name, age }) => {
    return <>
        {/* <h1>{props.name}</h1> */}
        {/* <h1>{props.age}</h1> */}
        <h1>{name}</h1>
        <h1>{age}</h1>
    </>
}

export default LearnProps