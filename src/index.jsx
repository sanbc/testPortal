import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link} from 'react-router';
import { browserHistory, IndexRoute } from 'react-router';
import callTestCases from './callTestCases.jsx';
import apiTestCases from './apiTestCases.jsx';
import loadTestCases from './loadTestCases.jsx';

import TestCases from './callTestCases.jsx';

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
                                    <Link className="navbar-brand" to='/callTestCases'>Call Test Cases</Link>
                                </li>
                                <li>
                                    <Link className="navbar-brand" to='/apiTestCases'>API Test Cases</Link>
                                    <ul >
                                        <li>
                                             <Link className="navbar-brand" to='/apiTestCases/EventManager'>EventManager</Link>
                                        </li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link className="navbar-brand" to='/loadTestCases'>Load Test Cases</Link>
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
             <Route path = "callTestCases" component={callTestCases}/>
             <Route path = "apiTestCases" component={apiTestCases}/>
             <Route path = "loadTestCases" component={loadTestCases}/>
             <Route path = "apiTestCases/:id" component={apiTestCases}/>
        </Route>
    </Router>
),
    document.getElementById('container')
);