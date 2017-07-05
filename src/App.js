import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import K3 from '../src/katas/K3/K3';

class App extends Component {
    render() {
        return (
            <div className="App">
                <K3 />
            </div>
        );
    }
}

export default App;
