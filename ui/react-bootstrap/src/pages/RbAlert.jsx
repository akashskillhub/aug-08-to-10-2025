import React from 'react'
import { Alert } from 'react-bootstrap'

const RbAlert = () => {
    return <>
        <Alert>primary</Alert>
        <Alert variant='danger' dismissible>danger</Alert>
    </>
}

export default RbAlert