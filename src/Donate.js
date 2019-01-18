import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

class Donate extends Component {
      render() {
          var btnStyle = {
              border:"0",
              height:"36px",
          };
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">Better Integrals for Everyone</h1>
                    <p className="lead my-3 font-italic">Thanks for using the website!</p>
                    <a href='https://ko-fi.com/N4N6M2CZ' target="_blank" rel="noopener noreferrer"><img height='36' style={btnStyle} src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
                  </div>
                </Jumbotron>
                <Container>
                  <h2><FontAwesomeIcon icon="coffee" /> Supporters</h2>
                  <hr/>
                  <p>
                  To have your name listed here, buy me a coffee! Know, however, that this website is entirely free to host, so please feel no obligation to send money my way. Thanks for using Integratable!
                  </p>
                  <h5><FontAwesomeIcon icon="street-view" /> Integral Deities</h5>
                  <p className="text-muted"><i>"Non-etherial beings that contributed to the inscription of the Fundamental Theorem of Calculus unto the mortal plane. Operate as the infinite sum of individual, differential consciousnesses."</i></p>
                  <ul>
                    <li>Gabriel Hernandez</li>
                  </ul>
                  <h5><FontAwesomeIcon icon="hands" /> Integral Paladins</h5>
                  <p className="text-muted"><i>"Holy knights fiercely committed to the Path of the Integral. Provided at birth with nth-dimensional clairvoyance such that the indefinite integrals of all functions are made clear."</i></p>
                  <ul>
                    <li><i>For one coffee, you can become the first Integral Paladin!</i></li>
                  </ul>
                  <h5><FontAwesomeIcon icon="dragon" /> Antiderivative Daemons</h5>
                  <p className="text-muted"><i>"Non-euclidian entities tasked only with the ceaseless reversal of all derivatives. Dispense the secrets of the Antiderivative for a price..."</i></p>
                  <ul>
                    <li>Joey Incandela</li>
                  </ul>
                  <h5><FontAwesomeIcon icon="fist-raised" /> Antiderivative Champions</h5>
                  <p className="text-muted"><i>"Warrior of Direct Integration imbued with an ability of numerical integration unrivaled by any mortal. Knows only the glory of battle in the endless struggle against derivation."</i></p>
                  <ul>
                    <li><i>For one coffee, you can become the first Antiderivative Champion!</i></li>
                  </ul>
                </Container>
              </React.Fragment>
          );
      }
}

export default Donate;
