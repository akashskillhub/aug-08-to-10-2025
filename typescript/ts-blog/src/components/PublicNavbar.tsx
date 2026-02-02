import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function PublicNavbar() {
    return (
        <Navbar expand="lg" className="bg-primary navbar-dark">
            <Container>
                <Navbar.Brand href="#home">Ts Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/signin" className='nav-link'>Login</Link>
                        <Link to="/signup" className='nav-link'>Register</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PublicNavbar