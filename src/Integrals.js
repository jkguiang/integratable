import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container,
         Row, Col,
         Button, Progress,
         Collapse,
         Card, CardHeader, CardBody,
         Form, FormGroup, Input,
         Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

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
                  <Input type="text" name={this.props.constant} id={this.props.constant} onKeyUp={this.handleInput} />
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
            if (typeof(newMap[c]) === "undefined" || isNaN(newMap[c]) || newMap[c] === "" || newMap[c].indexOf(" ") >= 0) {
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
                <Col md={8} style={colStyle}>
                  <Card style={cardStyle}>
                    <CardBody>
                      <BlockMath math={this.props.integral} />
                    </CardBody>
                  </Card>
                </Col>
                <Col md={4} className="d-flex align-items-stretch" style={colStyle}>
                  <Card style={cardStyle}>
                    <CardHeader className="text-center"><FontAwesomeIcon icon="calculator" /> Evaluation Parameters</CardHeader>
                    <CardBody>
                      <Form>
                        {inputs}
                      </Form>
                      <Button outline color={(this.state.isGood) ? "success" : "danger"} block onClick={this.toggle} disabled={!this.state.isGood}>
                        {(this.state.isGood) ? <FontAwesomeIcon icon="check-circle" /> : <FontAwesomeIcon icon="times-circle" />} Submit
                      </Button>
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
                  <Button color="secondary" onClick={this.toggle} size="sm">
                    <FontAwesomeIcon icon="times-circle" /> Close
                  </Button>
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
        const cards = (this.props.db).map((intObj, index) =>
            <IntegralCard integral={intObj.integral} constants={intObj.constants} query={intObj.query} key={index} index={index} />
        );
        return (
            <Container>
              {cards}
            </Container>
        );
    }
}

class AllIntegrals extends Component {
    constructor(props) {
        super(props);
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.state = {
            isCollapsed: false
        };
    }
    toggleCollapse() {
        this.setState({isCollapsed: !this.state.isCollapsed});
    }
    render() {
        var rowStyle = {
            paddingBottom: "15px"
        };
        const cards = (this.props.db).map((intObj, index) =>
              <Link smooth to={"/"+this.props.name+"#"+index} key={index}>
                <Card>
                  <CardBody>
                    <BlockMath math={intObj.integral} />
                  </CardBody>
                </Card>
              </Link>
        );
        return (
            <React.Fragment>
              <Button block outline color="secondary" style={{ marginBottom: '1rem' }} onClick={this.toggleCollapse}>
                <h4>{this.props.header} {(this.state.isCollapsed) ? <FontAwesomeIcon icon="angle-down" /> : <FontAwesomeIcon icon="angle-up" />}</h4>
              </Button>
              <Container>
                <Collapse isOpen={!this.state.isCollapsed}>
                  <hr/>
                  <Row style={rowStyle}>
                    {cards}
                  </Row>
                </Collapse>
              </Container>
            </React.Fragment>
        );
    }
}

export { Integrals, AllIntegrals };
