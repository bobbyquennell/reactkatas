import React from 'react';
import Style from './CourseTableItem-styles';
import {Link} from 'react-router-dom';
import _ from 'lodash';
const CourseTableItem = ({
  id,
  title,
  lecturerId,
  address,
  date,
  time,
  lecturers
}) => {
  const index = _.findIndex(lecturers, (lecturer)=>{ return lecturer.id === lecturerId; });
  const lecturerName =  index >=0 ? lecturers[index].name : "";
  return (
    <tr style={Style.tr}>
      <td style={Style.td}>
        <Link to={`/course/${id}`}>{title}</Link>
      </td>
      <td style={Style.td}>{lecturerName}</td>
      <td style={Style.td}>{address}</td>
      <td style={Style.td}>{date}</td>
      <td style={Style.td}>{time}</td>
    </tr>
  );
};

export default CourseTableItem;
