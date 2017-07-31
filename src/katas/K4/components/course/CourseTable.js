import React from 'react';
import CourseTableItem from './CourseTableItem';
import Style from './CourseTable-style';
const CourseTable = (props)=>{
    return (
        <table style={Style.root}>
            <tr>
                <th style={Style.th}>Title</th>
                <th style={Style.th}>Lecturer</th>
                <th style={Style.th}>Address</th>
                <th style={Style.th}>Date</th>
                <th style={Style.th}>Time</th>
            </tr>
            { props.courses.map((course, index)=>{ return <CourseTableItem  key={index} {...course}/>; })}
        </table>
    );
};

export default CourseTable;
