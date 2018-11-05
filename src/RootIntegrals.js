import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
import { Integrals } from './Integrals';

const RootDB = [
    {
        "integral": "\\int_a^b \\frac{x}{\\sqrt{x + c}}\\textnormal{ }dx = \\frac{2}{3}(x - 2c)\\sqrt{x + c}",
        "constants": ["a","b","c"],
        "query": ["integrate ","x","/","(","x","+","c",")^(0.5)"," from ","a"," to ","b"]
    },
    {
        "integral": "\\int_a^b \\sqrt{\\frac{x}{c-x}}\\textnormal{ }dx = -\\sqrt{x(c-x)}-c\\tan^{-1}\\biggr(\\frac{\\sqrt{x(c-x)}}{x-c}\\biggr)",
        "constants": ["a","b","c"],
        "query": ["integrate ","(","x","/","(","x","-","c",")",")^(0.5)"," from ","a"," to ","b"]
    },
    {
        "integral": "\\int_a^b \\sqrt{\\frac{x}{c+x}}\\textnormal{ }dx = \\sqrt{x(c+x)}-c\\ln\\bigr(\\sqrt{x}+\\sqrt{x+c}\\bigr)",
        "constants": ["a","b","c"],
        "query": ["integrate ","(","x","/","(","x","+","c",")",")^(0.5)"," from ","a"," to ","b"]
    },
    {
        "integral": "\\int_a^b \\sqrt{x^2 + c^2}\\textnormal{ }dx = \\frac{1}{2}x\\sqrt{x^2 + c^2}+ \\frac{1}{2}c^2\\ln{\\biggr|x+\\sqrt{x^2 + c^2}\\biggr|} ",
        "constants": ["a","b","c"],
        "query": ["integrate ","(","x","^","2","+","c","^","2",")",")^(0.5)"," from ","a"," to ","b"]
    },
    {
        "integral": "\\int_a^b \\sqrt{c^2-x^2}\\textnormal{ }dx = \\frac{1}{2}x\\sqrt{c^2-x^2}+ \\frac{1}{2}c^2\\tan^{-1}\\biggr(\\frac{x}{\\sqrt{c^2-x^2}}\\biggr) ",
        "constants": ["a","b","c"],
        "query": ["integrate ","(","c","^","2","-","x","^","2",")",")^(0.5)"," from ","a"," to ","b"]
    },
    {
        "integral": "\\int_a^b \\frac{1}{\\sqrt{x^2 + c^2}}\\textnormal{ }dx = \\ln{\\biggr|x+\\sqrt{x^2 + c^2}\\biggr|}",
        "constants": ["a","b","c"],
        "query": ["integrate ","1","/","(","x","^","2","+","c","^","2",")^(0.5)"," from ","a"," to ","b"]
    },
    {
        "integral": "\\int_a^b \\frac{1}{\\sqrt{c^2-x^2}}\\textnormal{ }dx = \\sin^{-1}\\biggr(\\frac{x}{c}\\biggr)",
        "constants": ["a","b","c"],
        "query": ["integrate ","1","/","(","c","^","2","-","x","^","2",")^(0.5)"," from ","a"," to ","b"]
    },
    {
        "integral": "\\int_a^b \\frac{x^2}{\\sqrt{x^2 + c^2}}\\textnormal{ }dx = \\frac{1}{2}x\\sqrt{x^2 + c^2}- \\frac{1}{2}c^2\\ln{\\biggr|x+\\sqrt{x^2 + c^2}\\biggr|} ",
        "constants": ["a","b","c"],
        "query": ["integrate ","x","^","2","/","(","x","^","2","+","c","^","2",")^(0.5)"," from ","a"," to ","b"]
    },
    {
        "integral": "\\int_a^b \\frac{1}{(c^2+x^2)^{3/2}}\\textnormal{ }dx = \\frac{x}{c^2\\sqrt{c^2+x^2}}",
        "constants": ["a","b","c"],
        "query": ["integrate ","1","/","(","c","^","2","+","x","^","2",")^(3/2)"," from ","a"," to ","b"]
    },
];

class RootIntegrals extends Component {
      render() {
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">Root Integrals</h1>
                    <p className="lead my-3 font-italic">Integrals involving fractional powers in inconvenient places.</p>
                  </div>
                </Jumbotron>
                <Integrals db={RootDB} />
              </React.Fragment>
          );
      }
}

export { RootIntegrals, RootDB };
