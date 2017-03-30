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
                    <td>
                        <div className="checkbox" onChange={this.props.onChange}>
                            <label>
                                <input type="checkbox" name="fromSdk" id="fromSdk1" value={this.props.list.id}></input>
                                
                            </label>
                        </div>
                    </td>
                    <td>{this.props.list.name}</td>
                </tr>
                                
          
        );
    }
}

export default TestReport;