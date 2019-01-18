import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container,
         Row, Col,
         Button, Progress,
         Collapse,
         Card, CardHeader, CardBody,
         Form, FormGroup, Input,
         Modal, ModalHeader, ModalBody, ModalFooter, Alert,
         Popover, PopoverBody, UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { Enumerate } from './Evaluate';
import Plot from './Plot'

class IntegralCard extends Component {
    constructor(props) {
        super(props);

        this.handleCopy = this.handleCopy.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.toggle = this.toggle.bind(this);
        this.updateMap = this.updateMap.bind(this);

        this.state = {
            showModal: false,
            isGood: false,
            input: this.initMap(),
            constMap: this.initMap(),
            isCopied: false
        };
    }
    initMap() {
        var initMap = {};
        for (var c in this.props.constants) {
            initMap[this.props.constants[c]] = "";
        }
        return initMap;
    }
    handleCopy = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        e.target.focus();
        this.setState({ isCopied: !this.state.isCopied });
    }
    handleClear() {
        this.setState({
            isGood: false,
            input: this.initMap(),
            constMap: this.initMap()
        });
    }
    toggle() {
        this.setState({
            showModal: !this.state.showModal
        });
    }
    updateMap(evt) {
        var constant = evt.target.id;
        var value = evt.target.value;
        var newMap = this.state.constMap;
        var newInput = this.state.input;
        var passed = true;
        newMap[constant] = value;
        newInput[constant] = value;
        for (var c in newMap) {
            var val = newMap[c];
            if (isNaN(val) || val === "") {
                if (val === "" || typeof(val) === "undefined") {
                    passed = false;
                    break;
                }
                else if ((val).indexOf(" ") >= 0) {
                    passed = false;
                    break;
                }
                else if (val.includes("pi")) {
                    if (val.includes("*")) {
                        var splitVal = (typeof(val === "object")) ? val : val.split("*");
                        if (isNaN(splitVal[0]) || splitVal[splitVal.length-2] !== "pi") {
                            passed = false;
                            break;
                        }
                    }
                    else {
                        var coeff = value.substring(0, val.length-2);
                        if (isNaN(coeff)) {
                            if (coeff === "-") {
                                newMap[c] = ["0","1","-","pi","*"];
                            }
                            else {
                                passed = false;
                                break;
                            }
                        }
                        else {
                            newMap[c] = (coeff === "") ? ["pi"] : [coeff,"pi","*"];
                        }
                    }
                }
                else {
                    passed = false;
                    break;
                }
            }
        }
        this.setState({
            isGood: passed,
            constMap: newMap,
            input: newInput
        });
        return;
    }
    componentDidMount() {
        var url = (window.location.href.split("#"));
        if (url[url.length-1] === String(this.props.index)) {
            const element = document.getElementById(this.props.index);
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
    render() {
        var url = (window.location.href.split("#"));
        var base = (url.length < 3) ? window.location.href : (window.location.href).split("#"+url[url.length-1])[0];
        var isAnchored = (url[url.length-1] === String(this.props.index));
        var cardStyle = {
            width: "100%",
            overflowX: "auto"
        };
        var anchoredStyle = {
            width: "100%",
            overflowX: "auto",
            borderColor: "#000"
        };
        var anchorStyle = {
            color: "#5cb85c",
            paddingTop: "0"
        };
        const inputs = (this.props.constants).map((constant, index) =>
            <Row form key={constant+String(index)} >
              <Col md={2}>
                <InlineMath math={constant+" = "} />
              </Col>
              <Col md={10}>
                <FormGroup>
                  <Input value={this.state.input[constant]} type="text" name={constant} id={constant} onChange={this.updateMap} key={constant+String(index)} />
                </FormGroup>
              </Col>
            </Row>
        );
        return (
            <React.Fragment>
              <Row id={this.props.index}>
                <Col md={8} style={{paddingBottom: "15px"}}>
                  <Card style={(isAnchored) ? anchoredStyle : cardStyle}>
                    <CardBody>
                      <BlockMath math={this.props.integral+"\\biggr|_{x=a}^{x=b}"+this.props.restrict} />
                    </CardBody>
                  </Card>
                </Col>
                <Col md={4} className="d-flex align-items-stretch" style={{paddingBottom: "15px"}}>
                  <Card style={cardStyle}>
                    <CardHeader className="text-center"><FontAwesomeIcon icon="calculator" /> Evaluation Parameters</CardHeader>
                    <CardBody>
                      <Form ref={(f) => this.form = f}>
                        {inputs}
                        <textarea ref={(textarea) => this.textArea = textarea} style={{height:"0",width:"0",opacity:"0"}} value={this.props.integral+"\\biggr|_{x=a}^{x=b}"+this.props.restrict} readOnly />
                      </Form>
                      <Row className="text-center">
                          <Col xs={4}>
                            <Button id={"toAnchor"+this.props.index} color="link" href={base+"#"+this.props.index} style={(isAnchored) ? anchorStyle : {paddingTop: "0"}}>
                              <FontAwesomeIcon icon="anchor" />
                            </Button>
                            <UncontrolledTooltip placement="top" target={"toAnchor"+this.props.index}>
                              Anchor to URL
                            </UncontrolledTooltip>
                          </Col>
                          <Col xs={4}>
                            <Button id={"toClipboard"+this.props.index} color="link" style={{paddingTop: "0", color:"#000"}} onClick={this.handleCopy}>
                              {(this.state.isCopied) ? <FontAwesomeIcon icon="clipboard-check" /> : <FontAwesomeIcon icon="clipboard" />}
                            </Button>
                            <Popover placement="bottom" isOpen={this.state.isCopied} target={"toClipboard"+this.props.index} toggle={this.handleCopy}>
                              <PopoverBody>LaTeX copied to clipboard!</PopoverBody>
                            </Popover>
                            <UncontrolledTooltip placement="top" target={"toClipboard"+this.props.index}>
                              Copy LaTeX to clipboard
                            </UncontrolledTooltip>
                          </Col>
                          <Col xs={4}>
                            <Button id={"toClear"+this.props.index} color="link" style={{paddingTop: "0", color:"#000"}} onClick={this.handleClear}>
                              <FontAwesomeIcon icon="undo-alt" />
                            </Button>
                            <UncontrolledTooltip placement="top" target={"toClear"+this.props.index}>
                              Clear input form
                            </UncontrolledTooltip>
                          </Col>
                      </Row>
                       <Button outline color={(this.state.isGood) ? "success" : "danger"} block onClick={this.toggle} disabled={!this.state.isGood}>
                         {(this.state.isGood) ? <FontAwesomeIcon icon="check-circle" /> : <FontAwesomeIcon icon="times-circle"   />} Submit
                       </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Modal isOpen={this.state.showModal} toggle={this.toggle} className="modal-lg">
                <ModalHeader toggle={this.toggle}>Result</ModalHeader>
                <ModalBody style={{width:"100%"}}>
                  <IntegralResult integral={this.props.integral} query={this.props.query} plot={this.props.plot} constMap={this.state.constMap} />
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
            response: {"data":"", "success":true}
        };
    }
    componentDidMount() {
        const evaluated = Enumerate(this.props.query, this.props.constMap, 1);
        try {
            const result = evaluated[1].y - evaluated[0].y;
            this.setState({response: {"data":this.buildResponse(result), "success":true}});
        }
        catch(err) {
            this.setState({response: {"data":err.stack, "success":false}});
        }
    }
    buildResponse(result) {
    	if (result === "inf") {
    	    return "\\textnormal{Result is too long to compute.}";
    	}
    	else {
            const constNeighbors = "+-_^/*x";
    	    const indef = (this.props.integral).split(" = ")[0];
    	    var definite = ""
    	    for (var i = 0; i < indef.length; i++) {
        		var c = indef[i];
        		if (this.props.constMap.hasOwnProperty(c)) {
                    var replace = this.props.constMap[c];
        		    if (i !== indef.length-1 && constNeighbors.includes(indef[i+1])) {
        		        definite += "{"+replace+"}";
        		    }
        		    else if (i !== 0 && constNeighbors.includes(indef[i-1])) {
        		        definite += "{"+replace+"}";
        		    }
        		    else {
            			definite += c;
        		    }
        		}
        		else {
        		    definite += c;
        		}
    	    }
    	    return `${definite} = ${result}`;
    	}
    }
    render() {
        if (this.state.response.data !== "") {
            if (this.state.response.success === false) {
                return (
                    <React.Fragment>
                      <h4><FontAwesomeIcon icon="skull-crossbones" /> Oh no!</h4>
                      <p>
                        Something went wrong, so sorry! If you can, please submit the intricate details of the torture you have subjected my poor website to <a href="https://github.com/jkguiang/integratable/issues"><b>here</b></a>, you horrible monster. Just kidding, but please do file an error report, it would be very helpful, thanks!
                      </p>
                      <p><b>Error Report:</b></p>
                      <Alert color="dark"><pre><code>{this.state.response.data}</code></pre></Alert>
                    </React.Fragment>
                );
            }
            else {
                return (
                    <React.Fragment>
                      <BlockMath math={this.state.response.data} />
                      <Plot query={this.props.plot} constMap={this.props.constMap} />
                    </React.Fragment>
                );
            }
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
            <IntegralCard integral={intObj.integral} restrict={(intObj.hasOwnProperty("restrict")) ? intObj.restrict : ""} constants={intObj.constants} query={intObj.query} plot={intObj.plot} key={index} index={index} />
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

export { Integrals, AllIntegrals, IntegralCard };
