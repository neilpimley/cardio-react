import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import logo from '../images/logo-white.png';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  onNavigate() {
    ReactGA.event({
      category: 'Navigation',
      action: 'Clicked Link',
    });
  }
  render() {
    return (
      <Navbar color="dark" fixed="top" className="navbar-dark navbar-expand-md">
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={logo}
            style={{
              height: 60,
            }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} className="mr-2" />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink className="js-scroll-trigger" href="#profile">Professional Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="js-scroll-trigger" href="#patient-information">Patient Information</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="js-scroll-trigger" href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
