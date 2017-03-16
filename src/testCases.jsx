
import React, { Component } from 'react';



class TestCases extends Component {
    constructor(props) {
        super(props);
        
        this.sdkOptionSelected = this.sdkOptionSelected.bind(this);
    
    }
    sdkOptionSelected(){
        alert( this.value)
    Manager.getTestCases(function(testCaseResp) {
        
    });
    }
    render (){
        return (
            <div>
                <label>Choose the SDK</label>
                <select id="sdkType" onChange={this.sdkOptionSelected}>
                    <option>JSSDK</option>
                    <option>EMB SDK</option>
                </select>
                
            </div>
        );
    }
}


export default TestCases;