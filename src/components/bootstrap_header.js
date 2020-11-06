import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../css/app.css";
import imageLogo from "../image_resources/logo.svg";
import TimeFunctions from "../utility_functions/time";

class HEADER extends React.Component {

  constructor(){
    super();
    this.state = {
      login: "Login"
    }
  }

  render() {
    const time = new TimeFunctions();

    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Nav.Item>Good {time.getTimeOfDay()}</Nav.Item>
        <Navbar.Brand href="#home">
          <img src={imageLogo} width="40" height="40" alt="test" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Resume</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {this.state.login}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HEADER;
