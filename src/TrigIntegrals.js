import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
import { Integrals } from './Integrals';

const TrigDB = [
    {
        "integral": "\\int_a^b \\sin(cx) dx = \\frac{1}{c}\\cos(cx)",
        "constants": ["a","b","c"],
        "query": ["integrate ","x","^","n"," from ","a"," to ","b"]
    }
];

class TrigIntegrals extends Component {
      render() {
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">Trigonometry Integrals</h1>
                    <p className="lead my-3 font-italic">Quick reference table with integrals one is likely to see often.</p>
                  </div>
                </Jumbotron>
                <Integrals db={TrigDB} />
              </React.Fragment>
          );
      }
}

export { TrigIntegrals, TrigDB };
