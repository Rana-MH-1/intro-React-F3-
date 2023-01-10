/* import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav' */
import {Navbar,Container,Nav} from 'react-bootstrap'
const NavBar2 = ()=>{
    return(<div>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Introduction to React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>)
}

export default NavBar2