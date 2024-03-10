import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"
import { Link } from 'react-router-dom';

// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
  
    <div className='header'>
    <Navbar expand="lg" >
    <Container>
        <Navbar.Brand as = {Link} to="/">INQUEST OF KERALA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to="/">Home</Nav.Link>
            <Nav.Link  as = {Link} to="/history">History</Nav.Link>
            <Nav.Link  as = {Link} to="/geography">Geography</Nav.Link>
            <Nav.Link as = {Link} to="/economy">Economy</Nav.Link>
            <Nav.Link as = {Link} to="/culture">Culture</Nav.Link>
            
            
            
          </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
   
  );
}

export default Header;