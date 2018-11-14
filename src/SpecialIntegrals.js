import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
import { Integrals } from './Integrals';

const SpecialDB = [
    {
        "integral": "\\int_{-\\infty}^{\\infty} e^{-A(x+B)^2} dx = \\sqrt{\\frac{\\pi}{A}}",
        "constants": ["A","B"],
        "query": "(pi/A)^(1/2)"
    },
];

class SpecialIntegrals extends Component {
      render() {
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">Special Integrals</h1>
                    <p className="lead my-3 font-italic">Some Special integrals that one is likely to see often.</p>
                  </div>
                </Jumbotron>
                <Integrals db={SpecialDB} />
              </React.Fragment>
          );
      }
}

export { SpecialIntegrals, SpecialDB };
