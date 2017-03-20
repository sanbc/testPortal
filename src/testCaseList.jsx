import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router';

class TestCaseList extends Component{
    constructor(props) {
        super(props);
        
    }
    render(props) {
        console.log("list",this.props.list.testId);
        return (
        
          
                <tr>
                    <td>{this.props.list.testId}</td>
                    <td><Link to={`/test/${this.props.list.testName}`}>{this.props.list.testName}</Link></td>
                </tr>
                                
          
        );
    }
}

export default TestCaseList;