import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
import { Integrals } from './Integrals';

const TrigDB = [
    {
        "integral": "\\int_a^b \\sin(cx) dx = -\\frac{1}{c}\\cos(cx)",
        "constants": ["a","b","c"],
        "query": "(1/c)*cos(c*x)",
        "plot":"sin(c*x)"
    },
    {
        "integral": "\\int_a^b \\sin^{2}(cx) dx = \\frac{x}{2}-\\frac{\\sin(2cx)}{4c}",
        "constants": ["a","b","c"],
        "query": "(x/2)-((sin(2*c*x))/(4*c))",
        "plot":"(sin(c*x))^2"
    },
    {
        "integral": "\\int_a^b \\sin^{3}(cx) dx = \\frac{3\\cos(cx)}{4c}-\\frac{\\cos(3cx)}{12c}",
        "constants": ["a","b","c"],
        "query": "(3*cos(c*x))/(4*c)-(cos(3*c*x))/(12*c)"
    },
    {
        "integral": "\\int_a^b \\cos(cx) dx = \\frac{1}{c}\\sin(cx)",
        "constants": ["a","b","c"],
        "query": "(1/c)*sin(c*x)"
    },
    {
        "integral": "\\int_a^b \\cos^{2}(cx) dx = \\frac{x}{2}+\\frac{\\sin(2cx)}{4c}",
        "constants": ["a","b","c"],
        "query": "(x/2)+(sin(2*c*x))/(4*c)"
    },
    {
        "integral": "\\int_a^b \\cos^{3}(cx) dx = \\frac{3\\sin(cx)}{4c}-\\frac{\\sin(3cx)}{12c}",
        "constants": ["a","b","c"],
        "query": "(3*sin(c*x))/(4*c)-(sin(3*c*x))/(12*c)"
    },
    {
        "integral": "\\int_a^b \\sin(Ax)\\cos(Bx) dx = \\frac{\\cos[(A-B)x]}{2(A-B)}-\\frac{\\cos[(A+B)x]}{2(A+B)}",
        "restrict":"\\textnormal{, } A \\neq B",
        "constants": ["a","b","A","B"],
        "query": "(cos((A-B)*x))/(2*(A-B))-(cos((A+B)*x))/(2*(A+B))"
    },
    {
        "integral": "\\int_a^b \\sin^{2}(Ax)\\cos(Bx) dx = \\frac{\\cos[(A-B)x]}{2(A-B)}+\\frac{\\sin(Bx)}{2B}-\\frac{\\cos[(A+B)x]}{2(A+B)}",
        "restrict":"\\textnormal{, } A \\neq B",
        "constants": ["a","b","A","B"],
        "query": "(cos((A-B)*x))/(2*(A-B))+(sin(B*x))/(2*B)-(cos((A+B)*x))/(2*(A+B))"
    },
    {
        "integral": "\\int_a^b \\sin(Ax)\\cos^{2}(Bx) dx = \\frac{\\cos[(A-B)x]}{2(A-B)}-\\frac{\\cos(Bx)}{2B}-\\frac{\\cos[(A+B)x]}{2(A+B)}",
        "restrict":"\\textnormal{, } A \\neq B",
        "constants": ["a","b","A","B"],
        "query": "(cos((A-B)*x))/(2*(A-B))+(cos(B*x))/(2*B)-(cos((A+B)*x))/(2*(A+B))"
    },
];

class TrigIntegrals extends Component {
      render() {
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">Trigonometry Integrals</h1>
                    <p className="lead my-3 font-italic">Integrals involving trigonometric functions.</p>
                  </div>
                </Jumbotron>
                <Integrals db={TrigDB} />
              </React.Fragment>
          );
      }
}

export { TrigIntegrals, TrigDB };
