import "./Headercss.css";
import logo from "../images/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar className="Header__Navbar" variant="dark" bg="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img height={40} src={logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="px-4" href="#">
            Home
          </Nav.Link>
          <Nav.Link className="px-4" href="#">
            About Me
          </Nav.Link>
          <Nav.Link className="px-4" href="#">
            Projects
          </Nav.Link>
          <Nav.Link className="px-4" href="#">
            Contact Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
