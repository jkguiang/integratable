import React, { Component } from 'react';
import { Jumbotron, Container,
         Dropdown, DropdownToggle,
         DropdownMenu, DropdownItem  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

class About extends Component {
      render() {
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">The Modern Integral Table</h1>
                    <p className="lead my-3 font-italic">Welcome to Integratable, the first interactive integral table! </p>
                  </div>
                </Jumbotron>
                <Container>
                  <h2><FontAwesomeIcon icon="info-circle" /> What is this?</h2>
                  <hr/>
                  <p>
                  Integratable is an interactive integral table. There are many static, PDF integral tables out there, but Integratable uses React to make integrals easier to find and more pleasing to look at. All of the integrals on this website are already solved, so any integral can be easily evaluated without any fancy numerical approximations or other operations usually handled by advanced backend software. All of this websites main dependencies are listed below.
                  </p>
                  <h2 className="text-center">
                    <FontAwesomeIcon icon="angle-double-right" />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://reactjs.org/"><FontAwesomeIcon icon={['fab', 'react']}/></a>&nbsp;
                    <a href="https://nodejs.org/en/"><FontAwesomeIcon icon={['fab', 'node-js']}/></a>&nbsp;
                    <a href="https://github.com/"><FontAwesomeIcon icon={['fab', 'github']}/></a>&nbsp;
                    <a href="https://fontawesome.com/"><FontAwesomeIcon icon={['fab', 'font-awesome-flag']}/></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon="angle-double-left" />
                  </h2>
                  <p className="text-center">
                    <a href="https://reactstrap.github.io/"><b>Reactstrap</b></a>&nbsp; | &nbsp;
                    <a href="http://recharts.org/en-US/"><b>Recharts</b></a>&nbsp; | &nbsp;
                    <a href="http://integral-table.com/"><b>Integral-Table</b></a>
                  </p>
                  <h2><FontAwesomeIcon icon="calculator" /> How do I use it?</h2>
                  <hr/>
                  <p>
                  The <a href="https://www.integratable.info"><b>Home</b></a> page can be used like any ordinary integral table. However, you may also click any integral to be navigated to its interactive counterpart. There, you may simply enter the proper values for each constant and the answer will be computed for you!
                  </p>
                  <p><br /></p>
                  <h2><FontAwesomeIcon icon="heart" /> How can I help?</h2>
                  <hr/>
                  <p>
                  Integratable is entirely free to host, since the website is entirely static. However, if you really enjoy the page, or just feel exceptionally generous, you can buy me a coffee on my <a href="https://ko-fi.com/jguiang#"><b>Ko-fi</b></a> page. All of the names of those who have funded my caffeine addiction can be found on the <a href="https://www.integratable.info/#/donate"><b>Donate</b></a> page. Thanks for using Integratable!
                  </p>
                </Container>
              </React.Fragment>
          );
      }
}

export default About;
