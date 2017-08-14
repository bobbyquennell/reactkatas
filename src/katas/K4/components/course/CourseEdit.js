import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CourseEdit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Course Edit Page
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
