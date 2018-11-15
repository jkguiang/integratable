import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import './App.css';
import { Enumerate } from './Evaluate';
import { ComposedChart, Line, ReferenceLine, Area, XAxis, YAxis,
         CartesianGrid, Tooltip, Legend } from 'recharts';

//<Area type='monotone' dataKey='area' fill='#8884d8' stroke='#8884d8' type={"basisClosed"}/>

class Plot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        var data = Enumerate(this.props.query, this.props.constMap, 20);
        this.setState({data: data});
    }
    render() {
        if (this.state.response !== "") {
            return (
                <React.Fragment>
                	<ComposedChart width={600} height={400} data={this.state.data}
                        margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                      <CartesianGrid stroke='#f5f5f5' strokeDasharray="3 3" />
                      <XAxis dataKey="name"/>
                      <YAxis />
                      <ReferenceLine x={Number(this.props.constMap["a"]).toFixed(2)} stoke="#000" />
                      <ReferenceLine x={Number(this.props.constMap["b"]).toFixed(2)} stoke="#000" />
                      <Line type='monotone' dataKey='func' stroke='#ff7300' dot={false} />
                      <Area type='monotone' dataKey='area' fill='#8884d8' stroke='#8884d8' type={"step"}/>
                    </ComposedChart>
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

export default Plot;
