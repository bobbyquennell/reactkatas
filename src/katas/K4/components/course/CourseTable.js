import React from 'react';
import CourseTableItem from './CourseTableItem';
import Style from './CourseTable-style';
const CourseTable = (props)=>{
    return (
        <table style={Style.root}>
            <tbody>{/*<tr> cannot appear as a child of <table> https://github.com/facebook/react/issues/5652 */}
            <tr>
                <th style={Style.th}>Title</th>
                <th style={Style.th}>Lecturer</th>
                <th style={Style.th}>Address</th>
                <th style={Style.th}>Date</th>
                <th style={Style.th}>Time</th>
            </tr>
            { props.courses.map((course, index)=>{ return <CourseTableItem  key={index} {...course}/>; })}
            </tbody>
        </table>
    );
};

export default CourseTable;
