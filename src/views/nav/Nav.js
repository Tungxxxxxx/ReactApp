import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="container topnav">
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/todo" activeClassName="active">
          Todo
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </div>
    );
  }
}
export default Nav;
