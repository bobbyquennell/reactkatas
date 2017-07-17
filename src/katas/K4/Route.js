import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './components/home/Home.js';
import About from './components/about/About.js';
import NavMenu from './components/common/NavMenu.js';
const K4 = function(){
    return(
        <div>
            <Router>
                <div>
                    <NavMenu/>
                    <hr/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About} />
                </div>
            </Router>
        </div>
    );
};

export default K4;
