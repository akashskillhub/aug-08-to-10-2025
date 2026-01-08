import React from 'react'
import { publicRoutes } from '../routes/AppRoutes'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'


// carousel
// form
// grid
const PublicNavbar = () => {
    return <>
        <Navbar expand="lg" className="bg-dark navbar-dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                            publicRoutes.map(item => <Link
                                className='nav-link'
                                style={{ marginRight: "5px", textDecoration: "none" }}
                                key={`nav-${item.label}`}
                                to={item.path}
                            >
                                {item.label}
                            </Link>)
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    return <>
        <div>
            {
                publicRoutes.map(item => <Link
                    style={{ marginRight: "5px", textDecoration: "none" }}
                    key={`nav-${item.label}`}
                    to={item.path}
                >
                    {item.label}
                </Link>)
            }
        </div>
    </>
}

export default PublicNavbar