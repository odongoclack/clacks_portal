import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, user, logout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Clacks University</Link>
      </div>
      <ul className="navbar-menu">
        {isAuthenticated ? (
          <>
            <li className="navbar-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="navbar-item">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="navbar-item">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="navbar-item">
              <button onClick={logout} className="btn-logout">Logout</button>
            </li>
            <li className="navbar-item user-greeting">
              Hello, {user?.name.split(' ')[0]}
            </li>
          </>
        ) : (
          <>
            <li className="navbar-item">
              <Link to="/login">Login</Link>
            </li>
            <li className="navbar-item">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;