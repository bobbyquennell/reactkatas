import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
class CourseEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{width:"50%", margin:"10px auto"}}>
         <CourseForm />
      </div>
    );
  }
}

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseEdit);
