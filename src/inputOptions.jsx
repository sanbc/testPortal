import React, {Component} from 'react';

class InputOptions extends Component{
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.roomnameChange = this.roomnameChange.bind(this);
        this.participantChange = this.participantChange.bind(this);
        this.state = {};
    } 
    onSubmit(event) {
        event.preventDefault();
        this.props.submit(this.state);
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
    participantChange (event) {
        this.setState ({
            "participants" : event.target.value
        })
    }
    render() {
        console.log("this.props.testCases['TS11']",this.props.testCases[0])
        return(
            <form className="form-horizontal">
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
                    <div className={this.props.testCases.includes('TS11') ? 'form-group' : 'hidden'}>
                        <label htmlFor="roomname" className="control-label col-md-2">Roomname</label>
                        <div className=" col-md-2">
                            <input id="roomname" className="form-control" type="text"  onChange={this.roomnameChange}></input>
                        </div>
                        
                    </div>
                    <div className={this.props.testCases.includes('TS1', 'TS2', 'TS3', 'TS4') ? 'form-group' : 'hidden'}>
                        <label htmlFor="participantId" className="control-label col-md-2">ParticipantId</label>
                        <div className=" col-md-2">
                            <input id="participantId" className="form-control" type="text" onChange={this.participantChange}></input>
                        </div>
                        
                    </div>
                    <button  onClick={this.onSubmit}>Execute Test Cases</button>    
                </form>
        
        )
    }
}

export default InputOptions;