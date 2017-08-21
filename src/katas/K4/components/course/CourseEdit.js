import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
class CourseEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: Object.assign({}, this.props.course)
    };
  }

  render() {
    return (
      <div style={{width:"80%", margin:"auto"}}>
        <CourseForm course={this.state.course} lecturers={this.props.lecturers}/>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  let course = {
    id: "",
    title: "",
    address: '',
    date: '',
    time: '',
    lecturer: ''
  };
  return {
    course: course,
    lecturers: state.lecturerReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseEdit);
