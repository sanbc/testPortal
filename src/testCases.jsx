
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
           <div className="container">
                <div className="row">
                    <h3 className="col-md-6">Select the required options:</h3>
                </div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="envType" className="control-label col-md-2">SDK</label>
                        <div className="col-md-2">
                            <select id="envType" className="form-control " onChange={this.sdkOptionSelected}>
                                <option value="default">Env</option>
                                <option value="DEV">Dev</option>
                                <option value="EMBSDK">SDK</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="envType" className="control-label col-md-2">SDK</label>
                        <div className="col-md-2">
                            <select id="envType" className="form-control " onChange={this.sdkOptionSelected}>
                                <option value="default">Env</option>
                                <option value="DEV">Dev</option>
                                <option value="EMBSDK">SDK</option>
                            </select>
                        </div>
                    </div>
                </form>
                <table className="table">
                    <thead>
                        <tr>
                        <th>TestID</th>
                        <th>TestCase</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...this.state.testCases].map((x, i) =>
                        <TestCaseList key={i} list={x}></TestCaseList>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default TestCases;