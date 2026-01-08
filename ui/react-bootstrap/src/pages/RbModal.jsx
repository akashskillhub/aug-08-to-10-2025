import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const RbModal = () => {
    const [show, setShow] = useState(false)
    return <>
        <Button onClick={e => setShow(true)}>show</Button>

        <Modal show={show} onHide={e => setShow(false)}>
            <Modal.Header closeButton>Login Form</Modal.Header>
            <Modal.Body>hello</Modal.Body>
        </Modal >
    </>
}

export default RbModal