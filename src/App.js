import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import K2 from '../src/katas/K2/K2';

class App extends Component {
    render() {
        return (
            <div className="App">
                <K2 />
            </div>
        );
    }
}

export default App;
