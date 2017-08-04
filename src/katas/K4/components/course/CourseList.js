// @flow
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as  api from '../../api/courseApi';
import CourseTable from './CourseTable';

class CourseList extends Component{

  constructor(props){
    super(props);
    this.state = {
      courseName: ""
          // courseList:[]
    };
  }
  state: Object;//make flow happy way 1): https://github.com/facebook/flow/issues/1594
  /* //make flow happy way 2): https://stackoverflow.com/questions/36860349/flow-react-native-is-giving-me-errors-for-using-this-state
  state:
  {
    courseName: string;
  }
  */
  submitHandler = (event)=>{
    event.preventDefault();
      //alert(`adding course: ${this.state.courseName}`);
      /* 1) add course to course List in a react way, without Redux*/
      // this.setState((prevState)=>{
      //     return({
      //         // courseList: [...prevState.courseList,
      //         //     this.state.courseName],
      //         courseList: prevState.courseList.concat(this.state.courseName),
      //         courseName: ""
      //     });
      // });

      /* 2) add course to course List in a redux way A: the most verbose way*/
      //this.props.dispatch(courseActions.createCourse(this.state.courseName));
      /* 3) add course to course list in a redux way B: utilize mapDispatchToProps function*/
      //this.props.createCourse(this.state.courseName);
      /* 3.1) using redux helper: bindActionCreators in mapDispatchToProps function */
      /* bind actions to props by using a redux helper: bindActionCreators*/
    api.loadCourses().then(result=>{
      console.log(result);
    }).catch(result=>{
      console.log(result);
    });
    this.props.actions.createCourse(this.state.courseName);
    this.setState({
      courseName: ""
    });

  }
  onChangeHandler = (event)=>{
    this.setState({
      courseName: event.target.value
    });
  }
  // courseRow(course, index){
  //     return <div key={index}>{course.title}</div>;
  // }

  render(){
    console.log(this.props.courseList);
    return(

          <div>
              <h2>CourseList Page</h2>
              <form onSubmit={this.submitHandler}>
                  <input type="text" placeholder="course name" value={this.state.courseName} onChange={this.onChangeHandler} required/>
                  <button type="submit">Add Course</button>
              </form>
              <h4>course list:</h4>
              <CourseTable courses={this.props.courseList}/>
              {/* {this.props.courseList.map(this.courseRow)} */}
          </div>
    );
  }

}

// using react-redux connect function to connect your component to the redux store
//see: https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
function mapStateToProps(state){
  return{
    courseList: state
  };
}
function mapDispatchToProps(dispatch){// the function's name can be anything, does not have to be mapDispatchToProps
  return{
      //createCourse: course=>dispatch(courseActions.createCourse(course))
      /* bind actions to props by using a redux helper: bindActionCreators*/
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
