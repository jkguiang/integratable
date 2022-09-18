import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCalculator, faAngleDown, faAngleUp,
  faCheckCircle, faTimesCircle, faPlusCircle, faInfoCircle,
  faHeart, faDragon, faHome,
  faFistRaised, faHands, faStreetView,
  faAnchor, faCoffee, faBug,
  faSkullCrossbones, faAngleDoubleLeft, faAngleDoubleRight,
  faClipboard, faClipboardCheck, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'reactstrap';
import './App.css';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import icon from './icon.ico';
import Home from './Home';
import About from './About';
import Contribute from './Contribute';
import Donate from './Donate';
import { BasicIntegrals } from './BasicIntegrals';
import { RationalIntegrals } from './RationalIntegrals';
import { RadicalIntegrals } from './RadicalIntegrals';
import { LogIntegrals } from './LogIntegrals';
import { ExponentialIntegrals } from './ExponentialIntegrals';
import { TrigIntegrals } from './TrigIntegrals';

// Load icons
library.add(
  fab, faCalculator, faAngleDown, faAngleUp,
  faCheckCircle, faTimesCircle, faPlusCircle, faInfoCircle,
  faHeart, faDragon, faHome,
  faFistRaised, faHands, faStreetView,
  faAnchor, faCoffee, faBug,
  faSkullCrossbones, faAngleDoubleLeft, faAngleDoubleRight,
  faClipboard, faClipboardCheck, faUndoAlt );

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
                <LinkContainer to="/">
                  <div className="text-center">
                    <a className="blog-header-logo text-dark" href="/">
                      <img src={icon} alt="" style={{height: "2.25rem",verticalAlign:"top"}} />
                      <span>Integratable</span>
                    </a>
                  </div>
                </LinkContainer>
              </header>
              <div style={navStyle}>
                <Nav pills className="justify-content-center">
                  <LinkContainer to="/about">
                    <NavItem>
                      <NavLink href="/about"><FontAwesomeIcon icon="info-circle" /> About</NavLink>
                    </NavItem>
                  </LinkContainer>
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
                      <LinkContainer to="/radical">
                        <DropdownItem>Radical Functions</DropdownItem>
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
                  <LinkContainer to="/contribute">
                    <NavItem>
                      <NavLink href="/contribute"><FontAwesomeIcon icon="plus-circle" /> Contribute</NavLink>
                    </NavItem>
                  </LinkContainer>
                  <LinkContainer to="/donate">
                    <NavItem>
                      <NavLink href="/donate"><FontAwesomeIcon icon="heart" /> Donate</NavLink>
                    </NavItem>
                  </LinkContainer>
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
                <Route exact path="/radical" component={RadicalIntegrals}/>
                <Route exact path="/logs" component={LogIntegrals}/>
                <Route exact path="/exponentials" component={ExponentialIntegrals}/>
                <Route exact path="/trig" component={TrigIntegrals}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contribute" component={Contribute}/>
                <Route exact path="/donate" component={Donate}/>
                <hr/>
                <p className="text-muted text-center"><i><FontAwesomeIcon icon="bug" /> Please report any errors or post feature requests <a href="https://github.com/jkguiang/integratable/issues" target="_blank" rel="noopener noreferrer"><b>here</b></a>, thanks!</i></p>
              </Container>
            </Router>
        );
    }
}

export default App;
