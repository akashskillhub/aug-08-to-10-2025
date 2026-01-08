import React from 'react'

const Test = () => {
    return <>
        <div>Test</div>
        <Button varient={"red"}>Hello</Button>
        <Button varient={"blue"}>save</Button>

    </>

}


const Button = ({ varient, children }) => {
    return <button style={{ backgroundColor: varient }}>{children}</button>
}

export default Test