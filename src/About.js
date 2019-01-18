import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { IntegralCard } from './Integrals';

class About extends Component {
    render() {
        const demo = {
            "integral": "\\int_a^b x^n dx = \\frac{1}{n+1}x^{n+1}",
            "restrict": "\\textnormal{, } n \\neq -1",
            "constants": ["a","b","n"],
            "query": "(1/(n+1))*x^(n+1)",
            "plot": "x^(n)"
        };
        return (
          <React.Fragment>
            <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
              <div className="col-md-6 px-0">
                <h1 className="display-4">The Modern Integral Table</h1>
                <p className="lead my-3 font-italic">Welcome to Integratable, the first interactive integral table! </p>
              </div>
            </Jumbotron>
            <Container>
              <h2><FontAwesomeIcon icon="info-circle" /> What is this?</h2>
              <hr/>
              <p>
              Integratable is an interactive integral table. There are many static, PDF integral tables out there, but Integratable uses React to make integrals easier to find and more pleasing to look at on top of some basic Javascript mathematics functions that can evaluate any integral here in its definite form. All essential dependencies and other development resources are listed below.
              </p>
              <h2 className="text-center">
                <FontAwesomeIcon icon="angle-double-right" />&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://reactjs.org/"><FontAwesomeIcon icon={['fab', 'react']}/></a>&nbsp;
                <a href="https://nodejs.org/en/"><FontAwesomeIcon icon={['fab', 'node-js']}/></a>&nbsp;
                <a href="https://github.com/"><FontAwesomeIcon icon={['fab', 'github']}/></a>&nbsp;
                <a href="https://fontawesome.com/"><FontAwesomeIcon icon={['fab', 'font-awesome-flag']}/></a>
                &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon="angle-double-left" />
              </h2>
              <p className="text-center">
                <a href="https://reactstrap.github.io/"><b>Reactstrap</b></a>&nbsp; | &nbsp;
                <a href="http://recharts.org/en-US/"><b>Recharts</b></a>&nbsp; | &nbsp;
                <a href="http://integral-table.com/"><b>Integral-Table</b></a>
              </p>
              <h2><FontAwesomeIcon icon="calculator" /> How do I use it?</h2>
              <hr/>
              <p>
              The <a href="https://www.integratable.info"><b>Home</b></a> page can be used like any ordinary integral table. However, you may also click any integral to be navigated to its interactive counterpart like the one displayed below. To evaluate the integral, simply enter the desired values for each constant in their corresponding boxes and hit submit. Additionally, you can anchor (<FontAwesomeIcon icon="anchor"/>) the integral to the URL (this highlights the integral on your screen and automatically scrolls anyone else that loads that URL to the same integral), copy (<FontAwesomeIcon icon="clipboard"/>) its LaTeX to your clipboard, or easily clear (<FontAwesomeIcon icon="undo-alt"/>) the input form. Try it out!
              </p>
              <Container>
                <IntegralCard integral={demo.integral} restrict={(demo.hasOwnProperty("restrict")) ? demo.restrict : ""} constants={demo.constants} query={demo.query} plot={demo.plot} key={0} index={0} />
              </Container>
              <h2><FontAwesomeIcon icon="heart" /> How can I help?</h2>
              <hr/>
              <p>
              Integratable is entirely free to host, since the website is entirely static. However, if you really enjoy the page, or just feel exceptionally generous, you can buy me a coffee on my <a href="https://ko-fi.com/jguiang#" target="_blank" rel="noopener noreferrer"><b>Ko-fi</b></a> page. All of the names of those who have funded my caffeine addiction can be found on the <a href="https://www.integratable.info/#/donate"><b>Donate</b></a> page. You can also help by suggesting additional integrals <a href="https://github.com/jkguiang/integratable/issues" target="_blank" rel="noopener noreferrer"><b>here</b></a>, provided you have a Github account and a knowledge or desire to learn LaTeX.
              </p>
            </Container>
          </React.Fragment>
        );
    }
}

export default About;
