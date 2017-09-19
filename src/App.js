import React, {Component} from 'react';
import logo from './logo.svg';
//import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import K4 from '../src/katas/K4/Route';

class App extends Component {
  render() {
    if (process.env.NODE_ENV === 'development') {
      console.log('development environment');
    }
    return (
      <div className="App">
        <K4/>
        You are running this application in <b>{process.env.NODE_ENV}</b>
      </div>
    );
  }
}

export default App;
