import React from 'react';

class CourseList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            courseName: "",
            courseList:[]
        };
    }

    submitHandler = (event)=>{
        event.preventDefault();
        //alert(`adding course: ${this.state.courseName}`);
        this.setState((prevState)=>{
            return({
                courseList: [...prevState.courseList,
                    this.state.courseName],
                courseName: ""
            });
        });
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
                <h4>course list:</h4>
                {this.state.courseList.map(this.courseRow)}
            </div>
        );
    }

}

export default CourseList;
