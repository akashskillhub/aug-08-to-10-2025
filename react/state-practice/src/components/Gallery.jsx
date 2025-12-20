import React, { useState } from 'react'

const Gallery = () => {
    const [pic, setPic] = useState("")
    const [album, setAlbum] = useState([
        "https://images.unsplash.com/photo-1761839257661-c2392c65ea72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",

        "https://plus.unsplash.com/premium_photo-1760995720217-54aef3fa0218?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",

        "https://images.unsplash.com/photo-1761839258803-21515f43190c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
    ])
    const handleDelete = arg => {
        // const filtered = album.filter(item => item !== arg)
        // setAlbum(filtered)
        // OR
        setAlbum(album.filter(item => item !== arg))
    }
    return <>
        {/* CONTROLLED INPUT */}
        <input value={pic} type="text" onChange={e => setPic(e.target.value)} />
        <button onClick={e => {
            setAlbum([...album, pic])
            setPic("")
        }}>add</button>
        <table border={1}>
            <thead>
                <tr>
                    <th>Images</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    album.map(item => <tr>
                        <td> <img src={item} height={50} alt="" /> </td>
                        <td> <button onClick={e => handleDelete(item)}>Remove</button> </td>
                        {/* <td> <button onClick={handleDelete}>Remove</button> </td> */}
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Gallery