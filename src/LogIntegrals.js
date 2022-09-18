import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
import { Integrals } from './Integrals';

const LogDB = [
    {
        "integral": "\\int_a^b \\ln(cx) dx = x\\ln(cx)-x",
        "constants": ["a","b","c"],
        "query": "x*ln(c*x)-x",
        "plot": "ln(c*x)"
    },
    {
        "integral": "\\int_a^b x^n\\ln(cx) dx = x^{n+1}\\biggr(\\frac{\\ln(x)}{n+1}-\\frac{1}{(n+1)^2}\\biggr)",
        "restrict": "n \\neq -1",
        "constants": ["a","b","c","n"],
        "query": "(x^(n+1))*((ln(x))/(n+1)-(1)/((n+1)^2))",
        "plot": "(x^n)*ln(c*x)"
    },
    {
        "integral": "\\int_a^b \\frac{\\ln(cx)}{x} dx = \\frac{1}{2}\\bigr(\\ln(cx)\\bigr)^2",
        "constants": ["a","b","c"],
        "query": "(1/2)*(ln(c*x))^2",
        "plot": "(ln(c*x))/(x)"
    },
    {
        "integral": "\\int_a^b \\frac{\\ln(cx)}{x^2} dx = \\frac{1}{x}-\\frac{\\ln(cx)}{x}",
        "constants": ["a","b","c"],
        "query": "(1/x)-((ln(c*x))/(x))",
        "plot": "(ln(c*x))/(x^2)"
    },
    {
        "integral": "\\int_a^b \\ln\\bigr(x^2+c^2\\bigr) dx = x\\ln\\bigr(x^2+c^2\\bigr)+2c\\tan^{-1}\\biggr(\\frac{x}{c}\\biggr)-2x",
        "constants": ["a","b","c"],
        "query": "x*ln(x^2+c^2)+2*c*atan(x/c)-2*x",
        "plot": "ln((x^2)+(c^2))"
    },
    {
        "integral": "\\int_a^b \\ln\\bigr(x^2-c^2\\bigr) dx = x\\ln\\bigr(x^2-c^2\\bigr)+c\\ln\\biggr(\\frac{x+c}{x-c}\\biggr)-2x",
        "restrict": "a,b > c",
        "constants": ["a","b","c"],
        "query": "x*ln(x^2-c^2)+c*ln((x+c)/(x-c))-2*x",
        "plot": "ln((x^2)-(c^2))"
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
