import React, {Component} from 'react';

class TestPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <form className="form-inline">
                <div className="form-group">
                    <label htmlFor="exampleInputName2">Enter the Env</label>
                    <input id="exampleInputName2" className="form-control" type="text"></input>
                </div>
            </form>
            
        )
    }
}

export default TestPage;