import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="logo-container">
          <span>The</span>
          <h1>Siren</h1>
        </div>
        <div className="links-container">
          <ul>
            <li>
              <Link
                style={({ isActive }) => (isActive ? {color: "brown", padding:"5px"} : {color:"black"})}
                className="link"
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link style={({ isActive }) => (isActive ? {color: "brown", padding:"5px"} : {color:"black"})} className="link" to="/register">
                Bollywood
              </Link>
            </li>

            {/* <li>
              <Link style={({ isActive }) => (isActive ? {color: "brown", padding:"5px"} : {color:"black"})} className="link" to="/technology">
                Technology
              </Link>
            </li>

            <li>
              <Link style={({ isActive }) => (isActive ? {color: "brown", padding:"5px"} : {color:"black"})} className="link" to="/hollywood">
                Hollywood
              </Link>
            </li>

            <li>
              <Link style={({ isActive }) => (isActive ? {color: "brown", padding:"5px"} : {color:"black"})} className="link" to="/fitness">
                Fitness
              </Link>
            </li>

            <li>
              <Link style={({ isActive }) => (isActive ? {color: "brown", padding:"5px"} : {color:"black"})} className="link" to="/food">
                Food
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;