import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
import { Integrals } from './Integrals';

const BasicDB = [
    {
        "integral": "\\int_a^b x^n dx = \\frac{1}{n+1}x^{n+1} \\textnormal{, } n \\neq -1",
        "constants": ["a","b","n"],
        "query": ["integrate ","x","^","n"," from ","a"," to ","b"]
    },
    {
        "integral": "\\int_a^b \\frac{1}{x} dx = \\ln(x)",
        "constants": ["a","b"],
        "query": ["integrate ","1","/","x"," from ","a"," to ","b"]
    },
    {
        "integral": "\\int_a^b \\frac{1}{Ax+B} dx = \\frac{1}{A}\\ln(x)\\biggr\\rvert Ax+B \\biggr\\rvert",
        "constants": ["a","b","A","B"],
        "query": ["integrate ","1","/","(","A","x","+","B",")"," from ","a"," to ","b"]
    },
    {
        "integral": "\\int_a^b (x+c)^n dx = \\frac{(x+c)^{n+1}}{n+1} \\textnormal{, } n \\neq -1",
        "constants": ["a","b","c","n"],
        "query": ["integrate ","(","x","+","c",")","^","n"," from ","a"," to ","b"]
    },
    {
        "integral": "\\int_a^b \\frac{1}{x+c} dx = \\ln(x+c)",
        "constants": ["a","b","c"],
        "query": ["integrate ","1","/","(","x","+","c",")"," from ","a"," to ","b"]
    }
];

class BasicIntegrals extends Component {
      render() {
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">Basic Integrals</h1>
                    <p className="lead my-3 font-italic">Some basic integrals that one is likely to see often.</p>
                  </div>
                </Jumbotron>
                <Integrals db={BasicDB} />
              </React.Fragment>
          );
      }
}

export { BasicIntegrals, BasicDB };
