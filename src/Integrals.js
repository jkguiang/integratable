import React, { Component } from 'react';
import { Container,
         Jumbotron,
         Button,
         Card, CardHeader, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './App.css';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

var test = "\\int_a^b x^n dx = \\frac{1}{n+1}x^{n+1}, x \\neq -1";
var testtest = "n"

class IntegralCard extends Component {
    render() {
        var contStyle = {
            paddingBottom: "15px",
            paddingLeft: "0",
            paddingRight: "0"
        }
        return (
            <Container style={contStyle}>
              <div className="card">
                <CardHeader className="text-center"><BlockMath math={this.props.integral} /></CardHeader>
                <div className="card-body">
                  <CardTitle>Evaluation Parameters</CardTitle>
                  <Button outline color="success" block>Submit</Button>
                </div>
              </div>
            </Container>
        );
    }
}

class Integrals extends Component {
    render() {
        return (
            <Container>
              <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                  <h1 className="display-4">Basic Integrals</h1>
                  <p className="lead my-3 font-italic">Quick reference table with integrals one is likely to see often.</p>
                </div>
              </Jumbotron>
              <IntegralCard integral={test}/>
              <IntegralCard integral={test}/>
              <IntegralCard integral={test}/>
            </Container>
        );
    }
}

export default Integrals;
