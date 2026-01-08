import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

const RbOffcanvas = () => {
    const [show, setShow] = useState(false)
    return <>
        <Button variant='dark' onClick={e => setShow(pre => !pre)}>click me</Button>

        <Offcanvas show={show} onHide={e => setShow(false)} placement='start'>
            <Offcanvas.Header closeButton>Signup</Offcanvas.Header>
            <Offcanvas.Body>Signup form goes here</Offcanvas.Body>
        </Offcanvas>
    </>
}

export default RbOffcanvas