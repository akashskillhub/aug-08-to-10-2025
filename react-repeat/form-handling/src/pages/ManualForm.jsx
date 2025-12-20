import { useState } from "react"

const ManualForm = () => {
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const handleSubmit = () => console.log(name, mobile)

    return <>
        <input type="text" placeholder="name" onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="mobile" onChange={e => setMobile(e.target.value)} />
        <button onClick={handleSubmit}>Add</button>
    </>
}

export default ManualForm