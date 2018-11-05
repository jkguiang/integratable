import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

class Donate extends Component {
      render() {
          var btnStyle = {
              color: "#fff"
          };
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">Better Integrals for Everyone</h1>
                    <p className="lead my-3 font-italic">Consider saving the world by direct integration!</p>
                    <Button color="success" href="https://www.patreon.com/integratable" style={btnStyle}>
                      <FontAwesomeIcon icon={['fab', 'patreon']}/> Patreon
                    </Button>
                  </div>
                </Jumbotron>
                <Container>
                  <h2><FontAwesomeIcon icon={['fab', 'patreon']}/> Our Patrons</h2>
                  <hr/>
                  <p>
                  To have your name listed here, consider becoming a patron! Some funds go towards the monthly upkeep for the site, but any overflow support will be directed to worthy causes. See our <a href="https://www.patreon.com/integratable">Patreon page</a> for more info.
                  </p>
                  <h5><FontAwesomeIcon icon="grin" /> Integral Fans</h5>
                  <p className="text-muted"><i>"Appreciates integrals and integral websites."</i></p>
                  <ul>
                    <li><i>For $1 a month, you can become the first Integral Fan!</i></li>
                  </ul>
                  <h5><FontAwesomeIcon icon="grin-hearts" /> Integral Fanatics</h5>
                  <p className="text-muted"><i>"Worrisome love of integrals, wants to see Integratable take over the world."</i></p>
                  <ul>
                    <li><i>For $5 a month, you can become the first Integral Fanatic!</i></li>
                  </ul>
                  <h5><FontAwesomeIcon icon="hands" /> Integral Devotees</h5>
                  <p className="text-muted"><i>"Unflinching devotion to the reversal of derivatives. Holds the Fundamental Theorem of Calculus close to their heart."</i></p>
                  <ul>
                    <li><i>For $10 a month, you can become the first Integral Devotee!</i></li>
                  </ul>
                  <h5><FontAwesomeIcon icon="street-view" /> Integral Dieties</h5>
                  <p className="text-muted"><i>"Non-etherial being that contributed to the inscription of the Fundamental Theorem of Calculus unto the mortal plane. Operates as the infinite sum of individual, differential consciousnesses."</i></p>
                  <ul>
                    <li><i>For $20 a month, you can become the first Integral Diety!</i></li>
                  </ul>
                </Container>
              </React.Fragment>
          );
      }
}

export default Donate;
