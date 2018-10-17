import React, { Component } from 'react';
import { Container,
         Row, Col,
         Jumbotron,
         Button,
         Card, CardHeader, CardBody,
         Form, FormGroup, Input } from 'reactstrap';
import './App.css';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import IntegralDB from './IntegralDB';

class IntegralInput extends Component {
    render() {
        return (
            <Row form>
              <Col md={2}>
                <InlineMath math={this.props.constant+" = "} />
              </Col>
              <Col md={10}>
                <FormGroup>
                  <Input type="text" name={this.props.constant} id={this.props.constant} />
                </FormGroup>
              </Col>
            </Row>
        );
    }
}

class IntegralCard extends Component {
    render() {
        var colStyle = {
            paddingBottom: "15px"
        };
        var cardStyle = {
            width: "100%"
        }
        const inputs = (this.props.constants).map((constant, index) =>
            <IntegralInput constant={constant} key={index+10} />
        );
        return (
            <Row id={this.props.id}>
              <Col md={8} className="d-flex align-items-stretch" style={colStyle}>
                <Card style={cardStyle}>
                  <CardBody>
                    <BlockMath math={this.props.integral} />
                  </CardBody>
                </Card>
              </Col>
              <Col md={4} className="d-flex align-items-stretch" style={colStyle}>
                <Card style={cardStyle}>
                  <CardHeader className="text-center">Evaluation Parameters</CardHeader>
                  <CardBody>
                    <Form>
                      {inputs}
                    </Form>
                    <Button outline color="success" block>Submit</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
        );
    }
}

class Integrals extends Component {
    render() {
        const cards = (IntegralDB[this.props.type]).map((intObj, index) =>
            <IntegralCard integral={intObj.integral} constants={intObj.constants} key={index} id={index} />
        );
        return (
            <Container>
              <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                  <h1 className="display-4">Basic Integrals</h1>
                  <p className="lead my-3 font-italic">Quick reference table with integrals one is likely to see often.</p>
                </div>
              </Jumbotron>
              {cards}
            </Container>
        );
    }
}

export default Integrals;
