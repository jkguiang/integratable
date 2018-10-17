import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import './App.css';

class Integrals extends Component {
  render() {
    return (
        <Container>
          <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
              <h1 className="display-4 font-italic">Common Integrals</h1>
              <p className="lead my-3">Quick reference table with basic integrals one is likely to see often.</p>
            </div>
          </Jumbotron>
          <div className="text-center">
              <p className="text-muted"><i>Integratable is interactive! To get a definite solution, fill in the user input form in the right column and hit enter.</i></p>
          </div>
        </Container>
    );
  }
}

export default Integrals;
