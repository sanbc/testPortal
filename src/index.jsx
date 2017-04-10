import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link} from 'react-router';
import { browserHistory, IndexRoute } from 'react-router';
import callTestCases from './callTestCases.jsx';
import apiTestCases from './apiTestCases.jsx';
import loadTestCases from './loadTestCases.jsx';

import TestCases from './callTestCases.jsx';
<a href="/apiTestCases/EventManager" style="
    color: #9d9d9d;
">EventManager</a>
import Home from './Home.jsx';
import TestPage from './testPage.jsx';
//render(<Home />, document.getElementById('container'));
class App extends React.Component {
   render() {
      return (
          <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3 col-md-3 col-lg-2">
                    <div className="navbar navbar-inverse navbar-fixed-side navbarMenu">
                        <div className="container">
                            <Link className="navbar-brand" to='/'>Home</Link>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li>
                                    <div className="navbar-brand">End to End Test </div>
                                    <div className="collapse navbar-collapse">
                                        <ul className="navColor">
                                            <li>
                                                <Link className="navColor" to='/callTestCases/VideoCall'>Video Call</Link>
                                            </li>
                                            <li>
                                                <Link className="navColor" to='/callTestCases/PSTNInbound'>PSTN Inbound</Link>
                                            </li>
                                            <li>
                                                <Link className="navColor" to='/callTestCases/PSTNOutbound'>PSTN Outbound</Link>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="navbar-brand" >API Test </div>
                                    <div className="collapse navbar-collapse">
                                        <ul className="navColor">
                                            <li>
                                                <Link className="navColor" to='/apiTestCases/EventManager'>EventManager</Link>
                                            </li>
                                            <li>
                                                <Link className="navColor" to='/apiTestCases/Authmanager'>Authmanager</Link>
                                            </li>
                                            <li>
                                                <Link className="navColor" to='/apiTestCases/CloudCode'>CloudCode</Link>
                                            </li>
                                            <li>
                                                <Link className="navColor" to='/apiTestCases/NotificationManager'>NotificationManager</Link>
                                            </li>
                                            <li>
                                                <Link className="navColor" to='/apiTestCases/IdentityManager'>IdentityManager</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="navbar-brand">Load Test Cases </div>
                                    <div className="collapse navbar-collapse">
                                        <ul className="navColor">
                                            <li>
                                                <Link className="navColor" to='/loadTestCases/EndToEndVideoCall'>VideoCall</Link>
                                            </li>
                                            <li>
                                                <Link className="navColor" to='/loadTestCases/XMPPServerWebsocketConnections'>Websocket Connection</Link>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-9 col-md-9 col-lg-10">
                    {this.props.children}
                </div>
            </div>
          </div>
        
      )
   }
}

export default App;


render((
    <Router history={browserHistory} >
        <Route path = "/" component = {App}>
            <IndexRoute component = {Home} />   
            <Route path = "home" component = {Home} />
            <Route path = "callTestCases/:id" component={callTestCases}/>
            <Route path = "apiTestCases/:id" component={apiTestCases}/>
            <Route path = "loadTestCases/:id" component={loadTestCases}/>
        </Route>
    </Router>
),
    document.getElementById('container')
);