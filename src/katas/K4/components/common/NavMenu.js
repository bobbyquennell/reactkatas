import React from 'react';
import {Link} from 'react-router-dom';
import styles from './NavMenu.scss';
const NavMenu = function(){
  console.log(styles.root);
  return (
  <nav className={styles.root}>
    <Link to="/">Home</Link>
    {" | "}
    <Link to="/about">About</Link>
    {" | "}
    <Link to="/courses">Courses</Link>
  </nav>
  );
};

export default NavMenu;
