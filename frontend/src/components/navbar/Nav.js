import React from "react";
import "./nav.css";
import { Link } from "react-scroll";
const Navbar = (props) => {
  return (
    <nav
      id="nav"
      className="container navbar fixed-top navbar-expand"
    >
      <div id="navbarNav">
        <ul className="navbar-nav">
          <Link activeClass="active" to={props.about} spy={true} offset={-130}>
            <li className="nav-item nav-link">
                About <span className="sr-only">(current)</span>
            </li>
          </Link>
          <Link activeClass="active" to={props.projects} spy={true} offset={-90}>
            <li className="nav-item nav-link">
                Projects
            </li>
          </Link>
          <Link activeClass="active" to={props.skills} spy={true} offset={-90}>
            <li className="nav-item nav-link">
                Skills
            </li>
          </Link>
          <Link activeClass="active" to={props.experiences} spy={true} offset={-90}>
            <li className="nav-item nav-link">
                Experiences
            </li>
          </Link>
          <Link activeClass="active" to={props.contact} spy={true} offset={-90}>
            <li className="nav-item nav-link">
                Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
