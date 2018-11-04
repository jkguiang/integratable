import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
import Integrals from './Integrals';

class BasicIntegrals extends Component {
      render() {
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">Basic Integrals</h1>
                    <p className="lead my-3 font-italic">Quick reference table with integrals one is likely to see often.</p>
                  </div>
                </Jumbotron>
                <Integrals type="basic" />
              </React.Fragment>
          );
      }
}

class RationalIntegrals extends Component {
      render() {
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">Rational Integrals</h1>
                    <p className="lead my-3 font-italic">Quick reference table with integrals one is likely to see often.</p>
                  </div>
                </Jumbotron>
                <Integrals type="rational" />
              </React.Fragment>
          );
      }
}

export {
    BasicIntegrals,
    RationalIntegrals
};
