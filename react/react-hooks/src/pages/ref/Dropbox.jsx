import React, { useRef, useState } from 'react'

const Dropbox = () => {
    const drop = useRef()
    const fancyCheckbox = useRef()
    const [isChecked, setIsChecked] = useState(false)

    const handleClick = () => {
        drop.current.click()
    }
    return <>
        <div className="container">

            <input type="file" ref={drop} className='d-none' />

            <div className='alert alert-primary my-3' onClick={handleClick}>

                <div style={{
                    height: "100px",
                    border: "2px dashed red",
                    borderRadius: "10px",

                }}></div>

            </div>

            <input type="checkbox" ref={fancyCheckbox} className='d-none' />
            <div
                onClick={e => {
                    fancyCheckbox.current.checked = !fancyCheckbox.current.checked
                    setIsChecked(fancyCheckbox.current.checked)
                }}
                className='bg-success'
                style={{ width: '50px', height: "25px" }}>
                {isChecked ? "ON" : "OFF"}
            </div>

        </div >
    </>
}

export default Dropbox