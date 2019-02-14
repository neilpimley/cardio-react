import React, { Component } from 'react';
import ReactGA from 'react-ga';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

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
          <Navbar color="dark" fixed="top" className="navbar-dark">
            <NavbarToggler onClick={this.toggle} className="mr-2" />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink className="js-scroll-trigger" href="#profile">Professional Profile</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="js-scroll-trigger" href="#gp-information">GP Information</NavLink>
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
