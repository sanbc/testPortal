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
        <div>
            <nav className="navbar navbar-inverse">
                <Link className="navbar-brand" to='/'>Home</Link>
                <Link className="navbar-brand" to='/callTestCases'>Call Test Cases</Link>
                <Link className="navbar-brand" to='/apiTestCases'>API Test Cases</Link>
                <Link className="navbar-brand" to='/loadTestCases'>Load Test Cases</Link>
            </nav>
        
        
              {this.props.children}
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
             <Route path = "test/:id" component={TestPage}/>
        </Route>
    </Router>
),
    document.getElementById('container')
);