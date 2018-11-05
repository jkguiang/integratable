import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
import { AllIntegrals } from './Integrals';
import { BasicDB } from './BasicIntegrals';
import { RationalDB } from './RationalIntegrals';
import { RootDB } from './RootIntegrals';
import { LogDB } from './LogIntegrals';
import { ExponentialDB } from './ExponentialIntegrals';
import { TrigDB } from './TrigIntegrals';

class Home extends Component {
      render() {
          return (
              <React.Fragment>
                <Jumbotron className="p-3 p-md-5 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4">Welcome</h1>
                    <p className="lead my-3 font-italic">Click on any integral to navigate to its interactive counterpart.</p>
                  </div>
                </Jumbotron>
                <AllIntegrals header="Basic" name="basic" db={BasicDB} />
                <AllIntegrals header="Rational Functions" name="rational" db={RationalDB} />
                <AllIntegrals header="Roots" name="roots" db={RootDB} />
                <AllIntegrals header="Logarithms" name="logs" db={LogDB} />
                <AllIntegrals header="Exponentials" name="exponentials" db={ExponentialDB} />
                <AllIntegrals header="Trig Functions" name="trig" db={TrigDB} />
              </React.Fragment>
          );
      }
}

export default Home;
