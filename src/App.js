import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCalculator,
  faAngleDoubleRight,
  faHome,
  faCheckCircle,
  faExternalLinkSquareAlt,
  faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'reactstrap';
import './App.css';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import Home from './Home';
import { BasicIntegrals } from './BasicIntegrals';
import { RationalIntegrals } from './RationalIntegrals';
import { RootIntegrals } from './RootIntegrals';
import { LogIntegrals } from './LogIntegrals';
import { ExponentialIntegrals } from './ExponentialIntegrals';
import { TrigIntegrals } from './TrigIntegrals';

// Load icons
library.add(
  fab,
  faCalculator,
  faAngleDoubleRight,
  faHome,
  faCheckCircle,
  faExternalLinkSquareAlt,
  faTimesCircle );

class MainNavbar extends Component {
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
        <React.Fragment>
          <header className="blog-header py-3">
            <div className="text-center">
              <a className="blog-header-logo text-dark" href="#">Integratable</a>
            </div>
          </header>
          <div style={navStyle}>
            <Nav pills className="justify-content-center">
              <LinkContainer to="/">
                <NavItem>
                  <NavLink href="/"><FontAwesomeIcon icon="home" /> Home</NavLink>
                </NavItem>
              </LinkContainer>
              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav caret>
                  Integrals
                </DropdownToggle>
                <DropdownMenu>
                  <LinkContainer to="/basic">
                    <DropdownItem>Basic</DropdownItem>
                  </LinkContainer>
                  <DropdownItem divider />
                  <LinkContainer to="/rational">
                    <DropdownItem>Rational Functions</DropdownItem>
                  </LinkContainer>
                  <LinkContainer to="/roots">
                    <DropdownItem>Roots</DropdownItem>
                  </LinkContainer>
                  <LinkContainer to="/logs">
                    <DropdownItem>Logarithms</DropdownItem>
                  </LinkContainer>
                  <LinkContainer to="/exponentials">
                    <DropdownItem>Exponentials</DropdownItem>
                  </LinkContainer>
                  <LinkContainer to="/trig">
                    <DropdownItem>Trig Functions</DropdownItem>
                  </LinkContainer>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <NavLink href="https://github.com/jkguiang/integratable"><FontAwesomeIcon icon={['fab', 'github']}/> Github</NavLink>
              </NavItem>
            </Nav>
          </div>
        </React.Fragment>
    );
  }
}

class App extends Component {
    render() {
        var appStyle = {
            minWidth: "768px"
        }
        return (
            <Router>
              <Container style={appStyle}>
                <MainNavbar/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/basic" component={BasicIntegrals}/>
                <Route exact path="/rational" component={RationalIntegrals}/>
                <Route exact path="/roots" component={RootIntegrals}/>
                <Route exact path="/logs" component={LogIntegrals}/>
                <Route exact path="/exponentials" component={ExponentialIntegrals}/>
                <Route exact path="/trig" component={TrigIntegrals}/>
                <hr/>
                <p clasName="text-muted">Last Updated: Nov. 4th, 2018</p>
              </Container>
            </Router>
        );
    }
}

export default App;
