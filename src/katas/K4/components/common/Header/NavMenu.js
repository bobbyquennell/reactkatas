import React from 'react';
import {Link} from 'react-router-dom';
import styles from './NavMenu.scss';
const NavMenu = function(){
  return (
    <nav className={styles.root}>
      <Link className={styles.item} to="/">Home</Link>
      {" | "}
      <Link className={styles.item} to="/about">About</Link>
      {" | "}
      <Link className={styles.item} to="/courses">Courses</Link>
    </nav>
  );
};

export default NavMenu;
