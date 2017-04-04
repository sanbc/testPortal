
import React, { Component } from 'react';
import TestCaseList from './testCaseList.jsx';
import TestReport from './testReport.jsx'
import InputOptions from './inputOptions.jsx';

class loadTestCases extends Component {
    constructor(props) {
        super(props);
        
        this.sdkOptionSelected = this.sdkOptionSelected.bind(this);
        this.executeTestCases = this.executeTestCases.bind(this);
        this.testCasesSelected = this.testCasesSelected.bind(this);
        this.selectedtest = [];
        this.envOptionSelected = this.envOptionSelected.bind(this);
        this.domainOptionSelected = this.domainOptionSelected.bind(this);
   //     this.testCases = '';
        this.state = {
                    'testCases':  '',
                    'testReport':'',
                    'sdk': '',
                    'showInputs': '',
                    'envOption': 'SDK',
                    'domainOption': 'iristest.comcast.com'
                }
    }
    sdkOptionSelected(event){
        var sdk =  event.target.value;
        self = this;
        this.setState({
                    'sdk':  sdk
                })
        if(sdk !== 'default'){
            Manager.getTestCases(this.state.envOption, this.state.domainOption, sdk, function(testCaseResp) {
                //testCaseResp = testCaseResp['data']['data'];
                //console.log("testCaseResp",testCaseResp['testSuites']);
                testCaseResp = testCaseResp['data'];
                testCaseResp = JSON.parse(testCaseResp)
                console.log("testCaseResp",testCaseResp);
                
                console.log("testCaseResp",testCaseResp["testsuites"]);
                self.setState({
                    'testCases':  testCaseResp['testsuites']
                })

                
               // testCases = testCaseResp;
                });
        }
    }
    testCasesSelected(event){
        if(event.target.checked) {
            this.selectedtest.push(event.target.value);
        } else {
            var index = this.selectedtest.indexOf(event.target.value)
            this.selectedtest.splice(index, 1);
        }
        this.setState({
                    'showInputs':  true
                })
        
    }
    envOptionSelected(event) {
        this.setState({
                    'envOption':  event.target.value
                })
    }
    domainOptionSelected(event) {
        this.setState({
                    'domainOption':  event.target.value
                })
    }
    executeTestCases(data) {
        console.log("this.props",this.selectedtest);
        var details = {
            "envOption" : this.state.envOption,
            "domainOption" : this.state.domainOption,
            "sdk" : this.state.sdk,
            "testSuites" : this.selectedtest,
            "roomname" : data.roomname,
            "deviceId" : data.deviceId,
            "participants" : data.participants,
            "type" : data.type,
            "sessionId" : data.sessionId,
            "fromTN" : data.fromTN,
            "toTN" : data.toTN,
            "userName" : data.userName,
            "password" : data.password,
            
        }
        var self = this;
        Manager.executeTestCases(details, function(testCaseResp) {
            console.log("testCaseResp",testCaseResp);
            testCaseResp = testCaseResp['data'];
            console.log("testCaseResp",testCaseResp);
                
            console.log("testCaseResp",testCaseResp["testReport"]);
            self.setState({
                    'testReport':  testCaseResp['testReport']
                })
            Manager.pushToDb(testCaseResp['testReport'], function() {
                
            });
        });
    }
    render (){
         console.log("this.testCases", this.testCases);
            
        return (
           <div className="container">
                <div className="row">
                    <h3 className="col-md-6 commonProps">Select the required options:</h3>
                </div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="envType" className="control-label col-md-2">Env</label>
                        <div className="col-md-2">
                            <select id="envType" className="form-control " onChange={this.envOptionSelected}>
                                <option value="SDK">SDK</option>
                                <option value="PROD">PROD</option>
                                
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="domainType" className="control-label col-md-2">Domain</label>
                        <div className="col-md-2">
                            <select id="domainType" className="form-control " onChange={this.domainOptionSelected}>
                                <option value="iristest.comcast.com">iristest.comcast.com</option>
                                <option value="irisconnect.comcast.com">irisconnect.comcast.com</option>
                                <option value="xfinityhome.comcast.com">xfinityhome.comcast.com</option>
                                <option value="xfinityvoice.comcast.com">xfinityvoice.comcast.com</option>
                                
                            </select>
                        </div>
                    </div>
                
                    <div className="row">
                        <h4 className="col-md-6 commonProps">Test SDK APIs</h4>
                    </div>
                    <div className="form-group col-md-6 ">
                        <div className="radio" onChange={this.sdkOptionSelected}>
                            <label>
                                <input type="radio" name="fromSdk" id="fromSdk1" value="JSSDK"></input>
                                JSSDK
                            </label>
                        </div>
                        <div className="radio"  onChange={this.sdkOptionSelected}>
                            <label>
                                <input type="radio" name="fromSdk" id="fromSdk2" value="EmbSDK"></input>
                                EMB SDK
                            </label>
                        </div>
                    </div>
                </form>
                <table className={this.state.sdk ? 'table' : 'hidden'}>
                    <thead>
                        <tr>
                        <th>Select</th>
                        <th>TestCase</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...this.state.testCases].map((x, i) =>
                            x.type == 'LoadTesting' ? <TestCaseList key={i} list={x} onChange={this.testCasesSelected}></TestCaseList> : <tr key={i}></tr>
                        
                        )}
                    </tbody>
                </table>
                { this.state.showInputs ? <InputOptions submit={this.executeTestCases} testCases={this.selectedtest}></InputOptions> : null}
                
                <table className={this.state.testReport ? 'table' : 'hidden'}>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>State</th>
                        <th>testCase</th>
                        </tr>
                    </thead>
                    <tbody>
                       {[...this.state.testReport].map((x, i) =>
                        <TestReport key={i} list={x} ></TestReport>
                        )} 
                    </tbody>
                </table>
            </div>
        );
    }
}


export default loadTestCases;