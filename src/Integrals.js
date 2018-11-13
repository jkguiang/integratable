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
import { Evaluate } from './Evaluate';

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
        var url = (window.location.href.split("#"));
        var base = (url.length < 3) ? window.location.href : (window.location.href).split("#"+url[url.length-1])[0];
        var isAnchored = (url[url.length-1] === String(this.props.index));
        var colStyle = {
            paddingBottom: "15px"
        };
        var cardStyle = {
            width: "100%",
        };
        var anchoredStyle = {
            width: "100%",
            borderColor: "#000"
        };
        var anchorStyle = {
            color: "#5cb85c"
        };
        const inputs = (this.props.constants).map((constant, index) =>
            <IntegralInput constant={constant} key={index+10} update={this.updateMap}/>
        );
        return (
            <React.Fragment>
              <Row id={this.props.index}>
                <Col md={8} style={colStyle}>
                  <Card style={(isAnchored) ? anchoredStyle : cardStyle}>
                    <CardBody>
                      <BlockMath math={this.props.integral+"\\biggr|_{x=a}^{x=b}"+this.props.restrict} />
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
                      <Row>
                        <Col md={2}>
                          <Button color="link" href={base+"#"+this.props.index} style={(isAnchored) ? anchorStyle : {}}>
                            <FontAwesomeIcon icon="anchor" />
                          </Button>
                        </Col>
                        <Col md={10}>
                          <Button outline color={(this.state.isGood) ? "success" : "danger"} block onClick={this.toggle} disabled={!this.state.isGood}>
                          {(this.state.isGood) ? <FontAwesomeIcon icon="check-circle" /> : <FontAwesomeIcon icon="times-circle"   />} Submit
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Modal isOpen={this.state.showModal} toggle={this.toggle} className="modal-lg">
                <ModalHeader toggle={this.toggle}>Result</ModalHeader>
                <ModalBody>
                  <IntegralResult integral={this.props.integral} query={this.props.query} constMap={this.state.constMap} />
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
            response: ""
        };
    }
    componentDidMount() {
        console.log(this.props.query);
        var query = (this.props.query).split(" ");
        for (var i in query) {
            var c = query[i];
            if (this.props.constMap.hasOwnProperty(c)){
                query[i] = this.props.constMap[c];
            }
        }
        var result = Evaluate(query, [this.props.constMap["a"], this.props.constMap["b"]]);
        this.setState({response: this.buildResponse(result)});
    }
    buildResponse(result) {
    	if (result === "inf") {
    	    return "\\textnormal{Result is too long to compute.}";
    	}
    	else {
    	    const constNeighbors = ["+","-","_","^","x","/"];
    	    const indef = (this.props.integral).split(" = ")[0];
    	    var definite = "";
    	    for (var i in indef) {
        		i = Number(i);
        		var c = indef[i];
        		if (this.props.constMap.hasOwnProperty(c)) {
        		    if (i !== indef.length-1 && constNeighbors.includes(indef[i+1])) {
        		        definite += this.props.constMap[c];
        		    }
        		    else if (i !== 0 && constNeighbors.includes(indef[i-1])) {
        		        definite += this.props.constMap[c];
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
        if (this.state.response !== "") {
            return (
                <React.Fragment>
                  <BlockMath math={this.state.response} />
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
            <IntegralCard integral={intObj.integral} restrict={(intObj.hasOwnProperty("restrict")) ? intObj.restrict : ""} constants={intObj.constants} query={intObj.query} key={index} index={index} />
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
