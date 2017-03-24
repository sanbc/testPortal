
import React, { Component } from 'react';
import TestCaseList from './testCaseList.jsx'


class callTestCases extends Component {
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
                    <h3 className="col-md-6 commonProps">Select the required options:</h3>
                </div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="envType" className="control-label col-md-2">Env</label>
                        <div className="col-md-2">
                            <select id="envType" className="form-control " onChange={this.sdkOptionSelected}>
                                <option value="default">Env</option>
                                <option value="DEV">Dev</option>
                                <option value="SDK">SDK</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="domainType" className="control-label col-md-2">Domain</label>
                        <div className="col-md-2">
                            <select id="domainType" className="form-control " onChange={this.sdkOptionSelected}>
                                <option value="default">Domain</option>
                                <option value="irisconnect.comcast.com">irisconnect.comcast.com</option>
                                <option value="xfinityhome.comcast.com">xfinityhome.comcast.com</option>
                                <option value="xfinityvoice.comcast.com">xfinityvoice.comcast.com</option>
                                <option value="iristest.comcast.com">iristest.comcast.com</option>
                            </select>
                        </div>
                    </div>
                
                <div className="row">
                    <h4 className="col-md-6 commonProps">Test Calls Between</h4>
                </div>
                <div className="form-group col-md-6 ">
                    <div className="radio">
                        <label>
                            <input type="radio" name="fromSdk" id="fromSdk1" value="JSSDK"></input>
                            JSSDK
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="fromSdk" id="fromSdk2" value="EMBSDK"></input>
                            EMB SDK
                        </label>
                    </div>
                </div>
                    <div className="form-group col-md-6">
                        <div className="radio">
                            <label>
                                <input type="radio" name="ToSdk" id="ToSdk1" value="JSSDK"></input>
                                JSSDK
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="ToSdk" id="ToSdk2" value="EMBSDK"></input>
                                EMBSDK
                            </label>
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


export default callTestCases;