// @flow
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import PropTypes from 'prop-types';
import _ from 'lodash';

class CourseEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //why we need a state course? can't we use the props.course directly?
      //in order to handle the form data, which is changable/editable.
      // we cannot use props.course. because props data are immutable/unchangable.
      // instead, we need to create a local state to store the form editing course.
      //should we put the local course state in Redux store?
      //see https://goshakkk.name/should-i-put-form-state-into-redux/
      // however, if we use redux-form, it is another story. TO-DO: learn redux-form later
      course: Object.assign({}, this.props.course)
    };
  }
  state:Object;//make flow happy way 1): https://github.com/facebook/flow/issues/1594
  /* //make flow happy way 2): https://stackoverflow.com/questions/36860349/flow-react-native-is-giving-me-errors-for-using-this-state
  state:
  {
    courseName: string;
  }
  //for more details, see: https://flow.org/en/docs/types/classes/
  */

  //we are using the 'controlled component' method to handle the form  elements in React
  // see more details for 'controlled component' at :https://facebook.github.io/react/docs/forms.html
  // 'uncontrolled component':https://facebook.github.io/react/docs/uncontrolled-components.html
  // 'controlled' V.S. 'uncontrolled' see: https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/

  /* in the 'controlled' way, we need to wire up the onChange handler to the form elements
    below function is a generic way to handle all input elements for the course form,
    so that we donnot have to bind different onChange handler to each input element.
  */
  handlerCourseChange = (event)=>{
    const field = event.target.name;
    console.log(`event.tartget.name:${field}`);
    console.log(`event.target.value: ${event.target.value}`);
    let changedCourse = Object.assign({}, this.state.course);
    console.log(changedCourse);
    changedCourse[field] = event.target.value;
    console.log(JSON.stringify(changedCourse));

    return this.setState({course:changedCourse});
  }
  handlerCourseSubmit =(event)=>{
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    console.log("form submited, saving course");
  }
  render() {
    console.log("rendering form:" + JSON.stringify(this.state.course));
    return (
      <div style={{width:"80%", margin:"auto"}}>
        <CourseForm course={this.state.course} lecturerOptions={this.props.lecturers} onChange={this.handlerCourseChange} onSubmit={this.handlerCourseSubmit}/>
      </div>

    );
  }
}

CourseEdit.propTypes = {
  course: PropTypes.object.isRequired,
  lecturers: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state, ownProps) => {
  let course = {
    id: "",
    title: "",
    address: '',
    date: '',
    time: '',
    lecturerId: ''
  };
  console.log(state.courseReducder);
  let id = ownProps.match.params.id;
  let index = _.findIndex(state.courseReducer, {'id':id});
  course =  index >=0 ? Object.assign({}, state.courseReducer[index]) : course;
  console.log(JSON.stringify(course));
  return {
    course: course,
    // the lecturers' structure loaded from api is different with the lecturers for dropdown list. so we need to map the data format below.
    lecturers: state.lecturerReducer.map(
      lecturer=>{
        return{
          value: lecturer.id,
          text: lecturer.name
        };
      })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseEdit);
