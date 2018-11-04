import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
import { AllIntegrals } from './Integrals';
import { BasicDB } from './BasicIntegrals';
import { RationalDB } from './RationalIntegrals';
import { RootDB } from './RootIntegrals';

class Home extends Component {
      render() {
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">All Integrals</h1>
                    <p className="lead my-3 font-italic">Quick reference table with integrals one is likely to see often.</p>
                  </div>
                </Jumbotron>
                <h4>Basic Integrals</h4><hr/>
                <AllIntegrals name="basic" db={BasicDB} />
                <h4>Rational Integrals</h4><hr/>
                <AllIntegrals name="rational" db={RationalDB} />
                <h4>Root Integrals</h4><hr/>
                <AllIntegrals name="roots" db={RootDB} />
              </React.Fragment>
          );
      }
}

export default Home;
