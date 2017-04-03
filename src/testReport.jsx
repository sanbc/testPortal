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
                    <td>{this.props.list.name}</td>
                    <td>{this.props.list.state}</td>
                    <td>{this.props.list.testCase}</td>
                    
                </tr>
                                
          
        );
    }
}

export default TestReport;