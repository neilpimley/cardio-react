import React, { Component } from 'react';
import ReactGA from 'react-ga4';
import { Link as ScrollLink } from 'react-scroll';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../images/logo-white.png';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState((s) => ({ isOpen: !s.isOpen }));
  }

  handleNavClick(label) {
    // analytics
    ReactGA.event({ category: 'Navigation', action: 'Clicked Link', label });

    // close the menu on mobile after navigation
    if (this.state.isOpen) this.setState({ isOpen: false });
  }

  render() {
    return (
      <Navbar fixed="top" className="site-navbar navbar-dark navbar-expand-md">
        <NavbarBrand href="/" className="brand-mark">
          <img alt="Belfast Cardiology Clinic" src={logo} />
        </NavbarBrand>

        <NavbarToggler onClick={this.toggle} className="navbar-toggle" />

        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ms-auto site-nav-links" navbar>
            <NavItem>
              <NavLink tag="span" className="nav-link">
                <ScrollLink
                  to="profile"
                  smooth
                  duration={400}
                  offset={-80}
                  onClick={() => this.handleNavClick('Professional Profile')}
                >
                  Professional Profile
                </ScrollLink>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag="span" className="nav-link">
                <ScrollLink
                  to="patient-information"
                  smooth
                  duration={400}
                  offset={-80}
                  onClick={() => this.handleNavClick('Patient Information')}
                >
                  Patient Information
                </ScrollLink>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag="span" className="nav-link">
                <ScrollLink
                  to="contact"
                  smooth
                  duration={400}
                  offset={-80}
                  onClick={() => this.handleNavClick('Contact')}
                >
                  Contact
                </ScrollLink>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag="span" className="nav-link nav-cta">
                <ScrollLink
                  to="booking"
                  smooth
                  duration={400}
                  offset={-80}
                  onClick={() => this.handleNavClick('Book Appointment')}
                >
                  Book Appointment
                </ScrollLink>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
