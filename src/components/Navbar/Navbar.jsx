import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import homeLogo from '../../assets/home.svg';

const Navigation = () => {
    return (
        <div>
          <Navbar bg="dark" variant="dark" expand="md"  fluid="true" fixed="top">
  <Container>
  <Navbar.Brand href="/">
        <img
          alt=""
          src= {homeLogo}
          width="40"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      HOME INSURANCE
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/newquote">New Quote</Nav.Link>
        <Nav.Link href="/billing">Billing</Nav.Link>
        <Nav.Link href="/contactus">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>  
        </div>
    )
}

export default Navigation
