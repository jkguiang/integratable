import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
import { Integrals } from './Integrals';

const LogDB = [
    {
        "integral": "\\int_a^b \\ln(cx) dx = x\\ln(cx)-x",
        "constants": ["a","b","c"],
        "query": ["integrate","ln","(","c","x",")","from","a","to","b"]
    },
    {
        "integral": "\\int_a^b x^{n}\\ln(cx) dx = x^{n+1}\\biggr(\\frac{\\ln(x)}{n+1}-\\frac{1}{(n+1)^2}\\biggr) \\textnormal{, } n \\neq -1",
        "constants": ["a","b","c","n"],
        "query": ["integrate","x","^","n","ln","(","c","x",")","from","a","to","b"]
    },
    {
        "integral": "\\int_a^b \\frac{\\ln(cx)}{x} dx = \\frac{1}{2}\\bigr(\\ln(cx)\\bigr)^2",
        "constants": ["a","b","c"],
        "query": ["integrate","ln","(","c","x",")","/","x","from","a","to","b"]
    },
    {
        "integral": "\\int_a^b \\frac{\\ln(cx)}{x^2} dx = \\frac{1}{x}-\\frac{\\ln(cx)}{x}",
        "constants": ["a","b","c"],
        "query": ["integrate","ln","(","c","x",")","/","x","^","2","from","a","to","b"]
    },
    {
        "integral": "\\int_a^b \\ln\\bigr(x^2+c^2\\bigr) dx = x\\ln\\bigr(x^2+c^2\\bigr)+2c\\tan^{-1}\\biggr(\\frac{x}{c}\\biggr)-2x",
        "constants": ["a","b","c"],
        "query": ["integrate","ln","(","x","^","2","+","c","^","2",")","from","a","to","b"]
    },
    {
        "integral": "\\int_a^b \\ln\\bigr(x^2-c^2\\bigr) dx = x\\ln\\bigr(x^2-c^2\\bigr)+c\\ln\\biggr(\\frac{x+c}{x-c}\\biggr)-2x",
        "constants": ["a","b","c"],
        "query": ["integrate","ln","(","x","^","2","-","c","^","2",")","from","a","to","b"]
    },
];

class LogIntegrals extends Component {
      render() {
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">Logarithm Integrals</h1>
                    <p className="lead my-3 font-italic">Integrals involving logarithms.</p>
                  </div>
                </Jumbotron>
                <Integrals db={LogDB} />
              </React.Fragment>
          );
      }
}

export { LogIntegrals, LogDB };
