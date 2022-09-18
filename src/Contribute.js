import React, { Component } from 'react';
import { debounce } from 'lodash';
import { Row, Col, Jumbotron, Container, 
         Button, Card, CardHeader, CardBody,
         Form, FormGroup, Input, Label, FormFeedback, FormText, 
         Popover, PopoverBody, UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { IntegralCard } from './Integrals';

class Contribute extends Component {
    constructor(props) {
        super(props);

        this.handleCopy = this.handleCopy.bind(this);
        this.updateDemo = this.updateDemo.bind(this);
        this.validateDemo = debounce(this.validateDemo.bind(this), 1000);
        this.handleUpdate = this.handleUpdate.bind(this);

        this.input = {
            "integrand-latex": "x^n",
            "integrand-postfix": "x^(n)",
            "result-latex": "\\frac{1}{n+1}x^{n+1}",
            "result-postfix": "(1/(n+1))*x^(n+1)",
            "constants-list": ["a","b","n"],
            "restriction-latex": "n \\neq -1"
        };
        this.state = {
            isCopied: false,
            isValid: true,
            demo: {
                "integral": "\\int_a^b x^n dx = \\frac{1}{n+1}x^{n+1}",
                "restrict": "n \\neq -1",
                "constants": ["a","b","n"],
                "query": "(1/(n+1))*x^(n+1)",
                "plot": "x^(n)"
            }
        };
    }
    handleCopy(evt) {
        this.textArea.select();
        document.execCommand('copy');
        evt.target.focus();
        this.setState({ isCopied: !this.state.isCopied });
    }
    validateDemo() {
        this.setState({
            isValid: !this.input["constants-list"].some(v => v === "")
        });
        this.integralCard.handleClear();
    }
    updateDemo() {
        this.setState({
            demo: {
                "integral": "\\int_a^b "+this.input["integrand-latex"]+" dx = "+this.input["result-latex"],
                "restrict": this.input["restriction-latex"],
                "constants": this.input["constants-list"],
                "query": this.input["result-postfix"],
                "plot": this.input["integrand-postfix"]
            }
        });
    }
    handleUpdate(evt) {
        var id = evt.target.id;
        var value = evt.target.value;
        if (id === "constants-list") {
            value = (value.replace(/(\s|[^a-zA-Z,])/g, "")                 // allow only alphabet + commas
                          .split(",")                                      // turn comma-separated into array
                          .map(v => v.slice(0,1))                          // allow only one-char names
                          .map((v, i, V) => (V.indexOf(v) === i) ? v : "") // replace duplicates with ''
                    );
        }
        this.input[id] = value;
        this.updateDemo();
        this.validateDemo();
    }
    render() {
        const demo = this.state.demo;
        const issue_url = "https://github.com/jkguiang/integratable/issues/new?assignees=&labels=new+integral&template=integral_request.md&title=New Integral"
        return (
          <React.Fragment>
            <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
              <div className="col-md-6 px-0">
                <h1 className="display-4">Integrals by the People, for the People</h1>
                <p className="lead my-3 font-italic">Open-source integrals for an open-source integral table.</p>
              </div>
            </Jumbotron>
            <Container>
              <Container>
                <Card>
                  <CardHeader>
                    <Row>
                      <Col xs={10}>Preview</Col>
                      <Col xs={2} className="text-right">
                        <Button id="toClipboardPreview" color="link" style={{padding: "0", color:"#000"}} onClick={this.handleCopy}>
                          {(this.state.isCopied) ? <FontAwesomeIcon icon="clipboard-check"/> : <FontAwesomeIcon icon="clipboard" />}
                        </Button>
                        <Popover placement="bottom" isOpen={this.state.isCopied} target="toClipboardPreview" toggle={this.handleCopy}>
                          <PopoverBody>Submission copied to clipboard!</PopoverBody>
                        </Popover>
                        <UncontrolledTooltip placement="top" target="toClipboardPreview">
                          Copy submission to clipboard
                        </UncontrolledTooltip>
                        <a href={issue_url} target="_blank" rel="noopener noreferrer">
                          <Button id="toGithub" color="link" style={{padding: "0", paddingLeft:"10px", color:"#000"}}>
                            <FontAwesomeIcon icon={["fab", "github"]} />
                          </Button>
                        </a>
                        <UncontrolledTooltip placement="top" target="toGithub">
                          Open a submission on Github
                        </UncontrolledTooltip>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <textarea ref={(textarea) => this.textArea = textarea} style={{height:"0",width:"0",opacity:"0"}} value={JSON.stringify(demo, null, 4)} readOnly />
                    <pre id="json">{JSON.stringify(demo, null, 4)}</pre>
                  </CardBody>
                </Card>
                <br/>
                <IntegralCard ref={child => this.integralCard = child} integral={demo.integral} restrict={(demo.hasOwnProperty("restrict")) ? demo.restrict : ""} constants={demo.constants} query={demo.query} plot={demo.plot} key={0} index={0} validity={this.state.isValid ? "valid" : "invalid"} />
              </Container>
              <p>
                Fill out the form below, and the interactive preview above will automatically update for valid submissions. When you are satisfied with the result, copy+paste the code above into a new <a href={issue_url}><b>Github issue</b></a>!
              </p>
              <Form>
                <FormGroup row>
                  <Label for="integrand-latex" sm={2}>Integrand LaTeX</Label>
                  <Col sm={10}>
                    <Input type="text" value={this.input["integrand-latex"]} name="integrand-latex" id="integrand-latex" placeholder="x^n" onChange={this.handleUpdate} />
                    <FormFeedback tooltip>Invalid LaTeX</FormFeedback>
                    <FormText>Integrand written in LaTeX; note that only basic LaTeX packages are supported.</FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="integrand-postfix" sm={2}>Integrand Postfix</Label>
                  <Col sm={10}>
                    <Input type="text" value={this.input["integrand-postfix"]} name="integrand-postfix" id="integrand-postfix" placeholder="x^(n)" onChange={this.handleUpdate} />
                    <FormFeedback tooltip>Invalid postfix</FormFeedback>
                    <FormText>Integrand written in postfix, i.e. what you would enter into a basic calculator.</FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="result-latex" sm={2}>Result LaTeX</Label>
                  <Col sm={10}>
                    <Input type="text" value={this.input["result-latex"]} name="result-latex" id="result-latex" placeholder="\\frac{1}{n+1}x^{n+1}" onChange={this.handleUpdate} />
                    <FormFeedback tooltip>Invalid postfix</FormFeedback>
                    <FormText>Integral result written in LaTeX; note that only basic LaTeX packages are supported.</FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="result-postfix" sm={2}>Result Postfix</Label>
                  <Col sm={10}>
                    <Input type="text" value={this.input["result-postfix"]} name="result-postfix" id="result-postfix" placeholder="(1/(n+1))*x^(n+1)" onChange={this.handleUpdate} />
                    <FormFeedback tooltip>Invalid postfix</FormFeedback>
                    <FormText>Integral result written in postfix, i.e. what you would enter into a basic calculator.</FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="constants-list" sm={2}>Constants</Label>
                  <Col sm={10}>
                    <Input type="text" value={this.input["constants-list"]} name="constants-list" id="constants-list" placeholder="a,b,n" onChange={this.handleUpdate} invalid={!this.state.isValid} />
                    <FormFeedback tooltip>Invalid list of constants</FormFeedback>
                    <FormText>A comma-separated list of constants.</FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="restriction" sm={2}>Restriction</Label>
                  <Col sm={10}>
                    <Input type="text" value={this.input["restriction-latex"]} name="restriction-latex" id="restriction-latex" placeholder="n \\neq -1" onChange={this.handleUpdate} />
                    <FormFeedback tooltip>Invalid postfix</FormFeedback>
                    <FormText>A restriction or caveat for integral written in LaTeX.</FormText>
                  </Col>
                </FormGroup>
              </Form>
            </Container>
          </React.Fragment>
        );
    }
}

export default Contribute;
