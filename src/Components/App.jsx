import React from 'react';
import './App.css';
import { Button } from 'reactstrap';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            artistProfile: null
        }
    }
    
    render() {
        return (
            <div className="App">
            <div className="row">
            <div className="col-12">
                <div className="col-6">
                <Button color="danger">Danger!</Button>

                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default App;