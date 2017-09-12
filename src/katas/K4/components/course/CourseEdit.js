// @flow
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import LoadingDots from '../common/LoadingDots/LoadingDots';
import PropTypes from 'prop-types';
import _ from 'lodash';

export class CourseEdit extends React.Component {
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
      course: Object.assign({}, this.props.course),
      //when to use local state in Redux project?
      //Answer: If it's a fleeting data that the rest of the components will not care about. use local state
      submiting: false,
      errors: {}
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


  componentWillReceiveProps(nextProps){
    if(nextProps.course.id !== this.props.course.id){
      this.setState(prevState=>({
        course: Object.assign({}, nextProps.course)
      }));//--------why we need the parentheses to wrap the curly braces?
      // to return object literals in Fat Arrow Function, we need to do this, otherwise you need to use return keyword explicitly.
      // further reading via below links on "Returning object literals" secssion: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    }
  }

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
    let changedCourse = Object.assign({}, this.state.course);
    changedCourse[field] = event.target.value;

    return this.setState({course:changedCourse});
  }
  handlerCourseSubmit =(event)=>{
    event.preventDefault();
    if(!this.isFormValid()){
      return;
    }
    this.setState({submiting:true});
    this.state.course.id ? this.props.actions.updateCourse(this.state.course).then(()=>{
      this.setState({submiting:false});
      this.context.router.history.push("/courses");
    }).catch(error=>{alert(error);this.setState({submiting:false});})
    :this.props.actions.createCourse(this.state.course).then(()=>{
      this.setState({submiting:false});
      this.context.router.history.push("/courses");
    }).catch(error=>
    {
      // alert(error); server side error
      this.setState({submiting:false});
    });
    //using thunk, we can chain Promises as long as we return them.
    // see details at: https://github.com/gaearon/redux-thunk

  }
  isFormValid = ()=>{
    if(this.state.course.title.length > 5)
      return true;
    else {
      const errors = {
        title:"title must be longer than 5 charactors"
      };
      this.setState({errors: errors});
      return false;
    }

  }
  render() {
    return (

      <div style={{width:"80%", margin:"auto"}}>
        <CourseForm course={this.state.course} lecturerOptions={this.props.lecturers} onChange={this.handlerCourseChange} onSubmit={this.handlerCourseSubmit}
        submiting={this.state.submiting} errors={this.state.errors}/>
      </div>

    );
  }
}

CourseEdit.propTypes = {
  course: PropTypes.object.isRequired,
  lecturers: PropTypes.arrayOf(PropTypes.object).isRequired
};

CourseEdit.contextTypes = {
  router:PropTypes.object
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
  let id = ownProps.match.params.id;
  let index = _.findIndex(state.courseReducer, {'id':id});
  course =  index >=0 ? Object.assign({}, state.courseReducer[index]) : course;
  return {
    course: course,
    // the lecturers' structure loaded from api is different with the lecturers for dropdown list. so we need to map the data format below.
    lecturers: state.lecturerReducer.map(
      lecturer=>{
        return{
          value: lecturer.id,
          text: lecturer.name
        };
      }),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseEdit);
