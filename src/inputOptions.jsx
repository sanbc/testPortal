import React, {Component} from 'react';

class InputOptions extends Component{
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.roomnameChange = this.roomnameChange.bind(this);
        this.participantChange = this.participantChange.bind(this);
        this.deviceIdChange = this.deviceIdChange.bind(this);
        this.fromTNChange = this.fromTNChange.bind(this);
        this.toTNChange = this.toTNChange.bind(this);
        this.loadCountChange =this.loadCountChange.bind(this);
        this.state = {};
    } 
    onSubmit(event) {
        event.preventDefault();
        this.props.submit(this.state);
    }
    loadCountChange(event) {
        this.setState ({
            "loadCount" : event.target.value
        })
    }
    usernameChange(event) {
        this.setState ({
            "userName" : event.target.value
        })
    }
    passwordChange(event) {
        this.setState ({
            "password" : event.target.value
        })
    }
    roomnameChange(event) {
        this.setState ({
            "roomname" : event.target.value,
        })
    }
    participantChange(event) {
        this.setState ({
            "participants" : event.target.value
        })
    }
    deviceIdChange(event) {
        this.setState ({
            "deviceId" : event.target.value
        })
    }
    fromTNChange(event) {
        this.setState ({
            "fromTN" : event.target.value
        })
    }
    toTNChange(event) {
        this.setState ({
            "toTN" : event.target.value
        })
    }
    render() {
        console.log("this.props.testCases", this.props.testCases);
        return(
            <form className="form-horizontal">
                    {/*
                    <div className={this.props.testCases.includes('TS1', 'TS2', 'TS3', 'TS4') ? 'form-group' : 'hidden'}>
                        <label htmlFor="username" className="control-label col-md-2">Username</label>
                        <div id="username" className=" col-md-2">
                            <input className="form-control"  type="text" onChange={this.usernameChange}></input>
                        </div>
                        
                    </div>
                    <div className={this.props.testCases.includes('TS1', 'TS2', 'TS3', 'TS4') ? 'form-group' : 'hidden'}>
                        <label htmlFor="password" className="control-label col-md-2">Password</label>
                        <div id="password" className=" col-md-2">
                            <input className="form-control" type="text" onChange={this.passwordChange}></input>
                        </div>
                        
                    </div>
                    <div className={this.props.testCases.includes('TS11','TS12') ? 'form-group' : 'hidden'}>
                        <label htmlFor="roomname" className="control-label col-md-2">Roomname</label>
                        <div className=" col-md-2">
                            <input id="roomname" className="form-control" type="text"  onChange={this.roomnameChange}></input>
                        </div>
                        
                    </div>
                    <div className={this.props.testCases.includes('TS8') ? 'form-group' : 'hidden'}>
                        <label htmlFor="participantId" className="control-label col-md-2">ParticipantId</label>
                        <div className=" col-md-2">
                            <input id="participantId" className="form-control" type="text" onChange={this.participantChange}></input>
                        </div>
                    </div>
                    <div className={this.props.testCases.includes('TS7', 'TS13', 'TS22') ? 'form-group' : 'hidden'}>
                        <label htmlFor="deviceId" className="control-label col-md-2">deviceId</label>
                        <div className=" col-md-2">
                            <input id="deviceId" className="form-control" type="text" onChange={this.deviceIdChange}></input>
                        </div>
                        
                    </div>
                    <div className={this.props.testCases.includes('TS22') ? 'form-group' : 'hidden'}>
                        <label htmlFor="fromTN" className="control-label col-md-2">fromTN</label>
                        <div className=" col-md-2">
                            <input id="fromTN" className="form-control" type="text" onChange={this.fromTNChange}></input>
                        </div>
                        
                    </div>
                    <div className={this.props.testCases.includes('TS22') ? 'form-group' : 'hidden'}>
                        <label htmlFor="participantId" className="control-label col-md-2">toTN</label>
                        <div className=" col-md-2">
                            <input id="toTN" className="form-control" type="text" onChange={this.toTNChange}></input>
                        </div>
                        
                    </div> */}
                    <div className={this.props.testCases.some(r => ['TS20', 'TS23'].includes(r)) ? 'form-group' : 'hidden'}>
                        <label htmlFor="loadCount" className="control-label col-md-2">Load Count</label>
                        <div className=" col-md-2">
                            <input id="loadCount" className="form-control" type="text" onChange={this.loadCountChange}></input>
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <button  onClick={this.onSubmit}>Execute Test Cases</button>    
                    </div>
                    
                </form>
        
        )
    }
}

export default InputOptions;