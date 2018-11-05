import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
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
                  Integratable is an interactive integral table. As a service, we have two goals. First, we aim to provide useful integrals on an interactive, modern platform. There are many static, PDF integral tables out there, but Integratable uses React to make integrals easier to find and more pleasing to look at. We also utilize the Wolfram Alpha API to make every integral on this website evaluatable as a definite integral. Second, we are also a non-profit organization hoping to channel support from interested individuals to worthy causes. More info on this is provided below.
                  </p>
                  <h2><FontAwesomeIcon icon="calculator" /> How do I use it?</h2>
                  <hr/>
                  <p>
                  The <a href="https://www.integratable.info">Home</a> page can be used like any ordinary integral table. However, you may also click any integral to be navigated to its interactive counterpart. There, you will be able to enter values for any variables and have the now definite integral solved by Wolfram Alpha for you!
                  </p>
                  <h2><FontAwesomeIcon icon="heart" /> How can I help?</h2>
                  <hr/>
                  <p>
                  As mentioned at the top, Integratable is a non-profit organization. We are always looking for charitable individuals to help us make Integratable a better service. However, moving this website to more scalable backend technologies is not very expensive. Thus, should we garner enough support, we plan to direct the generosity of our patrons to worthy causes with a focus on furthering the extent and equity of education. For more information, please visit our <a href="https://www.patreon.com/integratable">Patreon page</a>. All of the names of our patrons can be found on the <a href="https://www.integratable.info/#/donate">Donate</a> page.
                  </p>
                </Container>
              </React.Fragment>
          );
      }
}

export default About;
