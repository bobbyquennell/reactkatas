// @flow
import React from 'react';
import CourseTableItem from './CourseTableItem';
import Style from './CourseTable-style';
import PropTypes from 'prop-types';
const CourseTable = ({courses, lecturers}) => {
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
        {courses.map((course, index) => {
          return <CourseTableItem key={index} {...course} lecturers={lecturers}/>;
        })}
      </tbody>
    </table>
  );
};

CourseTable.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
  lecturers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CourseTable;
