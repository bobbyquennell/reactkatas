import React from 'react';
import Style from './CourseTableItem-styles';
const CourseTableItem = ({title, lecturer, address, date, time})=>{
    return (
        <tr>
            <td style={Style.td}>{title}</td>
            <td style={Style.td}>{lecturer}</td>
            <td style={Style.td}>{address}</td>
            <td style={Style.td}>{date}</td>
            <td style={Style.td}>{time}</td>
        </tr>
    );
};

export default CourseTableItem;
