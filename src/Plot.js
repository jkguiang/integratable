import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import './App.css';
import { Enumerate } from './Evaluate';
import { ComposedChart, Area, XAxis, YAxis,
         CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

//<Area type='monotone' dataKey='area' fill='#8884d8' stroke='#8884d8' type={"basisClosed"}/>

class Plot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        var data = Enumerate(this.props.query, this.props.constMap, 50);
        this.setState({data: data});
    }
    render() {
        if (this.state.response !== "") {
            return (
                <ResponsiveContainer width="100%" height={400}>
                	<ComposedChart data={this.state.data} width={600} height={400}
                        margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                      <CartesianGrid stroke='#f5f5f5' strokeDasharray="3 3" />
                      <XAxis dataKey="x"/>
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="y" fill="#8884d8" stroke="#8884d8" strokeWidth={2} activeDot={true} />
                    </ComposedChart>
                </ResponsiveContainer>
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

export default Plot;
