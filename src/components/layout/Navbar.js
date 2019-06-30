import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar bg-dark'>
        <h2>
          <i className='fas fa-tasks' /> TaskMgr
        </h2>

        <ul>
          <li style={{ margin: ".5rem" }}>Home</li>
          <li style={{ margin: ".5rem" }}>About</li>
          <li style={{ margin: ".5rem" }}>Log out</li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
