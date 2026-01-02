import React from 'react'
import useLocal from '../../hooks/useLocal'
import useDynamicFrom from '../../hooks/useDynamicFrom'

const LearnCustomHooks = () => {
    const { add, remove, get } = useLocal()
    const ui = useDynamicFrom([
        { label: "fname", type: "text" },
        { label: "lname", type: "text" },
        { label: "address", type: "textarea" },
        { label: "city", type: "select", option: ["delhi", "mumbai", "pune"] },
        { label: "gender", type: "radio", option: ["male", "female"] },
        { label: "skills", type: "checkbox", option: ["react", "redux", "nextjs", "typeScript"] },
    ])
    return <>
        <div>LearnCustomHooks</div>
        <button onClick={e => add("TEST", ["dell", "hp"])}> add</button>
        <button onClick={e => remove("TEST")} >delete</button>
        <hr />
        {ui}
    </>

}

export default LearnCustomHooks