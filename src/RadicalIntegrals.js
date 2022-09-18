import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
import { Integrals } from './Integrals';

const RadicalDB = [
    {
        "integral": "\\int_a^b \\frac{x}{\\sqrt{x+c}}\\textnormal{ }dx = \\frac{2}{3}(x-2c)\\sqrt{x+c}",
        "constants": ["a","b","c"],
        "query": "(2/3)*(x-2*c)*((x+c)^(1/2))",
        "plot": "x/((x+c)^(1/2))"
    },
    {
        "integral": "\\int_a^b \\sqrt{\\frac{x}{c-x}}\\textnormal{ }dx = -\\sqrt{x(c-x)}-c\\tan^{-1}\\biggr(\\frac{\\sqrt{x(c-x)}}{x-c}\\biggr)",
        "restrict": "a,b < c",
        "constants": ["a","b","c"],
        "query": "(0-1)*(((x*(c-x))^(1/2))-c*atan(((x*(c-x))^(1/2))/(x-c)))",
        "plot": "((x)/(c-x))^(1/2)"
    },
    {
        "integral": "\\int_a^b \\sqrt{\\frac{x}{c+x}}\\textnormal{ }dx = \\sqrt{x(c+x)}-c\\ln\\bigr(\\sqrt{x}+\\sqrt{x+c}\\bigr)",
        "constants": ["a","b","c"],
        "query": "((x*(c+x))^(1/2))-c*ln(((x)^(1/2))+((x+c)^(1/2)))",
        "plot": "((x)/(c+x))^(1/2)"
    },
    {
        "integral": "\\int_a^b \\sqrt{x^2+c^2}\\textnormal{ }dx = \\frac{1}{2}x\\sqrt{x^2 + c^2}+ \\frac{1}{2}c^2\\ln{\\biggr|x+\\sqrt{x^2 + c^2}\\biggr|} ",
        "constants": ["a","b","c"],
        "query": "(1/2)*x*((x^2+c^2)^(1/2))",
        "plot": "(x^2+c^2)^(1/2)"
    },
    {
        "integral": "\\int_a^b \\sqrt{c^2-x^2}\\textnormal{ }dx = \\frac{1}{2}x\\sqrt{c^2-x^2}+ \\frac{1}{2}c^2\\tan^{-1}\\biggr(\\frac{x}{\\sqrt{c^2-x^2}}\\biggr) ",
        "restrict": "a,b < c",
        "constants": ["a","b","c"],
        "query": "(1/2)*x*((c^2-x^2)^(1/2))+(1/2)*atan(x/((c^2-x^2)^(1/2)))",
        "plot": "(c^2-x^2)^(1/2)"
    },
    {
        "integral": "\\int_a^b \\frac{1}{\\sqrt{x^2+c^2}}\\textnormal{ }dx = \\ln{\\biggr|x+\\sqrt{x^2+c^2}\\biggr|}",
        "constants": ["a","b","c"],
        "query": "ln(abs((x^2+c^2)^(1/2)))",
        "plot": "1/((x^2+c^2)^(1/2))"
    },
    {
        "integral": "\\int_a^b \\frac{1}{\\sqrt{c^2-x^2}}\\textnormal{ }dx = \\sin^{-1}\\biggr(\\frac{x}{c}\\biggr)",
        "restrict": "a,b < c",
        "constants": ["a","b","c"],
        "query": "asin(x/c)",
        "plot": "1/((c^2-x^2)^(1/2))"
    },
    {
        "integral": "\\int_a^b \\frac{x^2}{\\sqrt{x^2+c^2}}\\textnormal{ }dx = \\frac{1}{2}x\\sqrt{x^2+c^2}- \\frac{1}{2}c^2\\ln{\\biggr|x+\\sqrt{x^2+c^2}\\biggr|} ",
        "constants": ["a","b","c"],
        "query": "(1/2)*x*((x^2+c^2)^(1/2))-(1/2)*(c^2)*ln(abs(x+((x^2+c^2)^(1/2))))",
        "plot": "(x^2)/((x^2+c^2)^(1/2))"
    },
    {
        "integral": "\\int_a^b \\frac{1}{(c^2+x^2)^{3/2}}\\textnormal{ }dx = \\frac{x}{c^2\\sqrt{c^2+x^2}}",
        "constants": ["a","b","c"],
        "query": "x/((c^2)*((c^2+x^2)^(1/2)))",
        "plot": "1/((c^2+x^2)^(3/2))"
    },
];

class RadicalIntegrals extends Component {
      render() {
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">Radical Integrals</h1>
                    <p className="lead my-3 font-italic">Integrals involving fractional powers in inconvenient places.</p>
                  </div>
                </Jumbotron>
                <Integrals db={RadicalDB} />
              </React.Fragment>
          );
      }
}

export { RadicalIntegrals, RadicalDB };
