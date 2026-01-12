import React from 'react'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'

const Rbgrid = () => {
    return <>

        <Container>
            <Row>
                <Col sm={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Header>Login</Card.Header>
                        <Card.Body>fake body</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col sm={4} md={12} lg={3}>
                    <Alert variant='primary'>primary</Alert>
                </Col>
                <Col sm={4} md={6} lg={3}>
                    <Alert variant='danger'>danger</Alert>
                </Col>
                <Col sm={4} md={6} lg={3}>
                    <Alert variant='warning'>warning</Alert>
                </Col>
                <Col sm={12} md={12} lg={3}>
                    <Alert variant='success'>success</Alert>
                </Col>
            </Row>
        </Container>
    </>
}

export default Rbgrid