import React from 'react';

class CourseList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            courseName: ""
        };
    }

    submitHandler = (event)=>{
        event.preventDefault();
        alert(`adding course: ${this.state.courseName}`);
    }
    onChangeHandler = (event)=>{
        this.setState({
            courseName: event.target.value
        });
    }

    render(){
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
export default CourseList;
