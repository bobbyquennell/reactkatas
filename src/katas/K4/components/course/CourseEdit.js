// @flow
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import PropTypes from 'prop-types';
class CourseEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <div style={{width:"80%", margin:"auto"}}>
        <CourseForm course={this.state.course} lecturerOptions={this.props.lecturers}/>
      </div>

    );
  }
}

CourseEdit.propTypes = {
  course: PropTypes.object.isRequired,
  lecturers: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => {
  let course = {
    id: "",
    title: "",
    address: '',
    date: '',
    time: '',
    lecturer: ''
  };
  console.log(state.courseReducder);
  return {
    course: course,
    // the lecturers' structure loaded from api is different with the lecturers for dropdown list. so we need to map the data format below.
    lecturers: state.lecturerReducer.map(
      lecturer=>{
        return{
          value: lecturer.id,
          name: lecturer.name
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
