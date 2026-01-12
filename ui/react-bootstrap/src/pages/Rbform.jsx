import React from 'react'
import { Card, Col, Container, FloatingLabel, Form, FormFloating, Row } from 'react-bootstrap'

const Rbform = () => {
    return <>
        <Container>
            <Row>
                <Col sm={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Header>Form</Card.Header>
                        <Card.Body>
                            <Form.Control placeholder='Enter Name'></Form.Control>
                            <Form.Control placeholder='Enter age' type='number'></Form.Control>
                            <Form.Control placeholder='xxxxxx' type='password'></Form.Control>
                            <Form.Control placeholder='xxxxxx' type='date'></Form.Control>

                            <Form.Control as="textarea"></Form.Control>

                            <Form.Select>
                                <option>Choose city</option>
                                <option>Pune</option>
                                <option>London</option>
                            </Form.Select>


                            <Form.Check type='radio' name='gender' id="male" label="male"></Form.Check>
                            <Form.Check type='radio' name='gender' id="female" label="female"></Form.Check>

                            {
                                ["react", "redux", "rtk"]
                                    .map(item => <Form.Check
                                        type='checkbox'
                                        label={item}
                                        id={item}></Form.Check>)
                            }

                            <h1>Floating Input</h1>

                            <FloatingLabel label="Enter Your Name">
                                <Form.Control type='text' placeholder='Full Name'></Form.Control>
                            </FloatingLabel>

                            <Form.Control isValid={true} placeholder='Enter name'></Form.Control>

                            <Form.Control isInvalid={true} placeholder='Enter name'></Form.Control>
                            <Form.Control.Feedback type='invalid'>Name is required</Form.Control.Feedback>

                            <hr />
                            <Form.Control size='lg' placeholder='Enter name'></Form.Control>
                            <Form.Control placeholder='Enter name'></Form.Control>
                            <Form.Control size='sm' placeholder='Enter name'></Form.Control>
                            <hr />

                            <Form.Check type='switch' id='motivation' label="motivation"></Form.Check>
                            <Form.Check type='switch' id='test' label="test"></Form.Check>


                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}

export default Rbform