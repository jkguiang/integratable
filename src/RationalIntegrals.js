import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
import { Integrals } from './Integrals';

const RationalDB = [
    {
        "integral": "\\int_a^b (x+c)^n dx = \\frac{(x+c)^{n+1}}{n+1}",
        "restrict": "\\textnormal{, } n \\neq -1",
        "constants": ["a","b","c","n"],
        "query": "((x+c)^(n+1))/(n+1)",
        "plot": "(x+c)^(n)"
    },
    {
        "integral": "\\int_a^b x(x+c)^n dx = \\frac{(x+c)^{n+1}((n+1)x-c)}{(n+1)(n+2)}",
        "constants": ["a","b","c","n"],
        "query": "(((x+c)^(n+1))*((n+1)*x-c))/((n+1)*(n+2))",
        "plot": "x*((x+c)^n)"
    },
    {
        "integral": "\\int_a^b \\frac{1}{1+x^2} dx = \\tan^{-1}(x)",
        "constants": ["a","b"],
        "query": "atan(x)",
        "plot": "1/(1+x^2)"
    },
    {
        "integral": "\\int_a^b \\frac{1}{c^2+x^2} dx = \\frac{1}{c}\\tan^{-1}\\biggr(\\frac{x}{c}\\biggr)",
        "constants": ["a","b","c"],
        "query": "(1/c)*atan(x/c)",
        "plot": "1/(c^2+x^2)"
    },
    {
        "integral": "\\int_a^b \\frac{x}{c^2+x^2} dx = \\frac{1}{2}\\ln{\\bigr| c^2 + x^2 \\bigr|}",
        "constants": ["a","b","c"],
        "query": "(1/2)*ln(abs(c^2+x^2))",
        "plot": "x/(c^2+x^2)"
    },
    {
        "integral": "\\int_a^b \\frac{x^2}{c^2+x^2} dx = x-c\\tan^{-1}\\biggr(\\frac{x}{c}\\biggr)",
        "constants": ["a","b","c"],
        "query": "x-c*atan(x/c)",
        "plot": "(x^2)/(c^2+x^2)"
    },
    {
        "integral": "\\int_a^b \\frac{x^3}{c^2+x^2} dx = \\frac{1}{2}x^2-\\frac{1}{2}c^2\\ln{\\bigr| c^2 + x^2 \\bigr|}",
        "constants": ["a","b","c"],
        "query": "(1/2)*(x^2)-(1/2)*(c^2)*ln(abs(c^2+x^2))",
        "plot": "(x^3)/(c^2+x^2)"
    },
    {
        "integral": "\\int_a^b \\frac{1}{Ax^2+Bx+C} dx = \\frac{2}{\\sqrt{4AC-B^2}}\\tan^{-1}\\biggr(\\frac{2Ax+B}{\\sqrt{4AC+B^2}}\\biggr)",
        "constants": ["a","b","A","B","C"],
        "query": "(4/((4*A*C-B^2)^(1/2))*atan((2*A*x+B)/((4*A*C+B^2)^(1/2)))",
        "plot": "1/(A*(x^2)+B*x+C)"
    }
];

class RationalIntegrals extends Component {
      render() {
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">Rational Integrals</h1>
                    <p className="lead my-3 font-italic">Integrals involving complicated rational expressions.</p>
                  </div>
                </Jumbotron>
                <Integrals db={RationalDB} />
              </React.Fragment>
          );
      }
}

export { RationalIntegrals, RationalDB };
