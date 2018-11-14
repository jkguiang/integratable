import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
import { Integrals } from './Integrals';

const ExponentialDB = [
    {
        "integral": "\\int_a^b e^{cx} dx = \\frac{1}{c}e^{cx}",
        "constants": ["a","b","c"],
        "query": "(1/c)*e^(c*x)"
    },
    {
        "integral": "\\int_a^b xe^{cx} dx = (\\frac{x}{c}-\\frac{1}{c^2})e^{cx}",
        "constants": ["a","b","c"],
        "query": "(x/c-1/(c^2))*e^(c*x)"
    },
    {
        "integral": "\\int_a^b x^{2}e^{cx} dx = (\\frac{x^2}{c}-\\frac{2x}{c^2}+\\frac{2}{c^3})e^{cx}",
        "constants": ["a","b","c"],
        "query": "((x^2)/c-(2*x)/(c^2)+2/(c^3))*e^(c*x)"
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
