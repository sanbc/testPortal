import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router';

class TestReport extends Component{
    constructor(props) {
        super(props);
       
    }
    
    render(props) {
        console.log("list",this.props);
        return (
        
          
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.list.testCase}</td>
                    <td>{this.props.list.state}</td>
                    <td>{this.props.list.testExecutionTime}</td>
                    <td>{this.props.list.error}</td>
                </tr>
                                
          
        );
    }
}

export default TestReport;