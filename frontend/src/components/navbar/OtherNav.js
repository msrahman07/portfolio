import React from "react";
import "./nav.css";
import { Link, useLocation } from "react-router-dom";
const OtherNavbar = (props) => {
    const location = useLocation();
    return (
    <nav id="nav" className="container navbar fixed-top navbar-expand">
      <div id="navbarNav">
        <ul className="navbar-nav">
          <Link className="nav-item nav-link" to="/">
            Home
          </Link>
          {(location.pathname !=="/projects/" && location.pathname !=="/projects") && <Link className="nav-item nav-link" to="/projects">
            Projects
          </Link>}
          {(location.pathname !=="/experiences" && location.pathname !=="/experiences/") && <Link className="nav-item nav-link" to="/experiences">
            Experiences
          </Link>}
        </ul>
      </div>
    </nav>
  );
};

export default OtherNavbar;
