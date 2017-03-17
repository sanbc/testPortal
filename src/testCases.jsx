
import React, { Component } from 'react';
import TestCaseList from './testCaseList.jsx'


class TestCases extends Component {
    constructor(props) {
        super(props);
        
        this.sdkOptionSelected = this.sdkOptionSelected.bind(this);
   //     this.testCases = '';
        self = this;
        self.state = {
                    'testCases':  ''
                }
    }
    sdkOptionSelected(event){
        var sdk =  event.target.value;
        if(sdk !== 'default'){
            Manager.getTestCases(sdk, function(testCaseResp) {
                //testCaseResp = testCaseResp['data']['data'];
                //console.log("testCaseResp",testCaseResp['testSuites']);
                testCaseResp = testCaseResp['data'];
                testCaseResp = JSON.parse(testCaseResp)
                console.log("testCaseResp",testCaseResp);
                
                console.log("testCaseResp",testCaseResp["testSuites"]);
                self.setState({
                    'testCases':  testCaseResp['testSuites']
                })
                
               // testCases = testCaseResp;
                });
        }
    }
    
    render (){
         console.log("this.testCases", this.testCases);
            
        return (
           <div>
                <label>Choose the SDK</label>
                <select id="sdkType" onChange={this.sdkOptionSelected}>
                    <option value="default">SDK</option>
                    <option value="JSSDK">JSSDK</option>
                    <option value="EMBSDK">EMB SDK</option>
                </select>
                {[...this.state.testCases].map((x, i) =>
                <TestCaseList key={i} list={x}></TestCaseList>
                )}
            </div>
        );
    }
}


export default TestCases;