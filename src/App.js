import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Integrals from './Integrals';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

class App extends Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }

    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  render() {
      var navStyle = {
          paddingTop: "5px",
          paddingBottom: "15px"
      }
    return (
        <Container>
          <header className="blog-header py-3">
            <div className="text-center">
              <a className="blog-header-logo text-dark" href="#">Integratable</a>
            </div>
          </header>
          <div style={navStyle}>
            <Nav pills className="justify-content-center">
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav caret>
                  Integrals
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Basic</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Rational Functions</DropdownItem>
                  <DropdownItem>Roots</DropdownItem>
                  <DropdownItem>Logarithms</DropdownItem>
                  <DropdownItem>Exponentials</DropdownItem>
                  <DropdownItem>Trig Functions</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <NavLink href="https://github.com/jkguiang/integratable">Github</NavLink>
              </NavItem>
            </Nav>
          </div>
          <Integrals type="basic" />
        </Container>
    );
  }
}

export default App;
