import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Badge, Button } from "react-bootstrap";
import "../css/app.css";
import imageLogo from "../image_resources/logo.svg";
// import TimeFunctions from "../utility_functions/time";

class HEADER extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
      unreadMessages: ["unstable release", "update packages"],
    };
    this.loginClick = this.loginClick.bind(this);
  }

  loginClick() {
    this.setState((previous) => {
      return {
        login: !previous.login,
      };
    });
  }

  render() {
    // let time = new TimeFunctions();

    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        {/* // <Nav.Item>Good// {time.getTimeOfDay()} </Nav.Item> */}
        <Navbar.Brand href="#home">
          <img src={imageLogo} width="40" height="40" alt="test" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Resume</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">About Me</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Journey</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Lineage</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button variant="success" onClick={this.loginClick}>
                {this.state.login ? `Login` : "Log out"}
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HEADER;
