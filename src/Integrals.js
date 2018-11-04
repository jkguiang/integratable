import React, { Component } from 'react';
import { Container,
         Row, Col,
         Jumbotron,
         Button, Progress,
         Card, CardHeader, CardBody,
         Form, FormGroup, Input,
         Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './App.css';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import IntegralDB from './IntegralDB';

class IntegralInput extends Component {
    constructor(props) {
      super(props);

      this.check = this.check.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.state = {
        isGood: false
      };
    }
    check() {
      this.setState({
        isGood: true
      });
    }
    handleInput(evt) {
        this.props.update(evt.target.id, evt.target.value);
    }
    render() {
        return (
            <Row form>
              <Col md={2}>
                <InlineMath math={this.props.constant+" = "} />
              </Col>
              <Col md={10}>
                <FormGroup>
                  <Input type="text" name={this.props.constant} id={this.props.constant} onChange={this.handleInput} />
                </FormGroup>
              </Col>
            </Row>
        );
    }
}

class IntegralCard extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.updateMap = this.updateMap.bind(this);
        var initMap = {};
        for (var c in this.props.constants) {
            initMap[this.props.constants[c]] = undefined;
        }

        this.state = {
            showModal: false,
            isGood: false,
            constMap: initMap
        };
    }
    toggle() {
        this.setState({
            showModal: !this.state.showModal
        });
    }
    updateMap(constant, value) {
        var newMap = this.state.constMap;
        newMap[constant] = value;
        var filled = true;
        for (var c in newMap) {
            if (typeof(newMap[c]) === "undefined" || isNaN(newMap[c])) {
                filled = false;
            }
        }
        this.setState({
            isGood: filled,
            constMap: newMap
        });
    }
    render() {
        var colStyle = {
            paddingBottom: "15px"
        };
        var cardStyle = {
            width: "100%"
        };
        const inputs = (this.props.constants).map((constant, index) =>
            <IntegralInput constant={constant} key={index+10} update={this.updateMap}/>
        );

        return (
            <React.Fragment>
              <Row id={this.props.index}>
                <Col md={8} className="" style={colStyle}>
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
                      <Button outline color="success" block onClick={this.toggle} disabled={!this.state.isGood}>Submit</Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Modal isOpen={this.state.showModal} toggle={this.toggle} className="modal-lg">
                <ModalHeader toggle={this.toggle}>Result</ModalHeader>
                <ModalBody>
                  <IntegralResult query={this.props.query} constMap={this.state.constMap} />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </React.Fragment>
        );
    }
}

class IntegralResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ""
        };
    }
    componentDidMount() {
        var x = new XMLHttpRequest();
        var waQuery = "";
        for (var i in this.props.query) {
            var q = this.props.query[i];
            if (this.props.constMap.hasOwnProperty(q)) {
                waQuery += this.props.constMap[q];
            }
            else {
                waQuery += encodeURIComponent(q);
            }
        }
        console.log(waQuery);
        const scope = this;
        x.open("GET", `https://cors-anywhere.herokuapp.com/http://api.wolframalpha.com/v2/query?appid=P5HRRU-GRAQ5ALWWL&input=${waQuery}&podtitle=Definite+integral&format=image&output=json`, true);
        console.log(x);
        x.onload = x.onerror = function() {
            var response = JSON.parse(x.responseText);
            console.log(response.queryresult.pods[0].subpods[0].img);
            scope.setState({result:response.queryresult.pods[0].subpods[0].img.src});
        }
        x.send();
    }
    render() {
        if (this.state.result !== "") {
            return (
                <React.Fragment>
                  <img src={this.state.result} alt="missing"/>
                </React.Fragment>
            );
        }
        else {
            return (
                <React.Fragment>
                  <Progress animated color="info" value="100" />
                </React.Fragment>
            );
        }

    }
}

class Integrals extends Component {
    render() {
        const cards = (IntegralDB[this.props.type]).map((intObj, index) =>
            <IntegralCard integral={intObj.integral} constants={intObj.constants} query={intObj.query} key={index} index={index} />
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
