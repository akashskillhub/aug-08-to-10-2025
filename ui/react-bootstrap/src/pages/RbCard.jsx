import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const RbCard = () => {
    return <>
        <Card>
            <Card.Header>Login</Card.Header>
            <Card.Body>
                <ListGroup>
                    <ListGroupItem active>Dell</ListGroupItem>
                    <ListGroupItem>Hp</ListGroupItem>
                    <ListGroupItem>Apple</ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card >
    </>
}

export default RbCard