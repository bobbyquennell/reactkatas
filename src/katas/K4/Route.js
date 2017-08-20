import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import NavMenu from './components/common/Header/NavMenu';
import Footer from './components/common/Footer/Footer';
import CourseList from './components/course/CourseList';
import {loadCourses} from './actions/courseActions';
import CourseEdit from './components/course/CourseEdit';
import {Provider} from 'react-redux';
import generateStore from './generateStore';


let K4store = generateStore();
K4store.dispatch(loadCourses());
const K4 = function() {
  /* Provider component provides the store to its child components // see details: http://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/ */
  return (
    <Provider store={K4store}>
      <Router>
        <div>
          <NavMenu/>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/courses" component={CourseList}/>
          <Route path="/course/:id" component={CourseEdit}/>
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
};

export default K4;
