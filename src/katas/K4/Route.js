import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './components/home/Home.js';
import About from './components/about/About.js';
import NavMenu from './components/common/NavMenu.js';
import CourseList from './components/course/CourseList.js';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();
const K4 = function(){
    return(
            <Provider>
                <Router>
                    <div>
                        <NavMenu/>
                        <hr/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About} />
                        <Route path="/courses" component={CourseList}/>
                    </div>
                </Router>
            </Provider>
    );
};

export default K4;
