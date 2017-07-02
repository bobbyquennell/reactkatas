import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import K1 from '../src/katas/K1/K1';

class App extends Component {
    render() {
        return (
            <div className="App">
                <K1 />
            </div>
        );
    }
}

export default App;
