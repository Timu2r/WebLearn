import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Уже импортирован
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Navbar.css';

export default function Navibar() {
  return (
    <>
      <Navbar 
        collapseOnSelect 
        expand='lg' 
        className="custom-navbar"
      >
        <Container>
          <Navbar.Brand className='navbar-brand-custom'>
            <Link to="/" style={{ textDecoration: 'none' }}>WebLearn</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' className="navbar-toggler-custom" />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/home' className="nav-link-custom">
                JavaScript
              </Nav.Link>
              <Nav.Link as={Link} to='/Introduction' className="nav-link-custom">
                Gallery
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='main-content'></div>
    </>
  );
}