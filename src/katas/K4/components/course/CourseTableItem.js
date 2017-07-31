import React from 'react';
import Style from './CourseTableItem-styles';
import {Link} from 'react-router-dom';
const CourseTableItem = ({id, title, lecturer, address, date, time})=>{
    return (
        <tr style={Style.tr}>
            <td style={Style.td}><Link to={`/courses/${id}`}>{title}</Link></td>
            <td style={Style.td}>{lecturer}</td>
            <td style={Style.td}>{address}</td>
            <td style={Style.td}>{date}</td>
            <td style={Style.td}>{time}</td>
        </tr>
    );
};

export default CourseTableItem;
