import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
import { Integrals } from './Integrals';

const ExponentialDB = [
    {
        "integral": "\\int_a^b e^{cx} dx = \\frac{1}{c}e^{cx}",
        "constants": ["a","b","c"],
        "query": ["integrate ","e","^","(","c","x",")"," from ","a"," to ","b"]
    },
    {
        "integral": "\\int_a^b x^{n}e^{cx} dx = \\frac{x^{n}e^{cx}}{c}-\\frac{n}{c}\\int_a^b x^{n-1}e^{cx} dx",
        "constants": ["a","b","c","n"],
        "query": ["integrate ","x","^","n","e","^","(","c","x",")"," from ","a"," to ","b"]
    }
];

class ExponentialIntegrals extends Component {
      render() {
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">Exponential Integrals</h1>
                    <p className="lead my-3 font-italic">Integrals involving exponential functions.</p>
                  </div>
                </Jumbotron>
                <Integrals db={ExponentialDB} />
              </React.Fragment>
          );
      }
}

export { ExponentialIntegrals, ExponentialDB };
