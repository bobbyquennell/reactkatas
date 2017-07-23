import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CourseList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            courseName: ""
        };
    }

    submitHandler = (event)=>{
        event.preventDefault();
        //alert(`adding course: ${this.state.courseName}`);
        this.props.dispatch(courseActions.AddCourse(this.state.courseName));
    }
    onChangeHandler = (event)=>{
        this.setState({
            courseName: event.target.value
        });
    }
    courseRow(courseName, index){
        return <div key={index}>{courseName}</div>;
    }

    render(){
        console.log(this.props.courses);
        return(

            <div>
                <h2>CourseList Page</h2>

                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="course name" value={this.state.courseName} onChange={this.onChangeHandler} required/>
                    <button type="submit">Add Course</button>
                </form>
                <p>the courses will listed below</p>
            </div>
        );
    }

}
function mapStateToProps(state, ownProps){
    console.log(state);
    return {
        courses: state.CourseReducer
    };
}
export default connect(mapStateToProps)(CourseList);
