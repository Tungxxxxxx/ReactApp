import React from "react";
// import "./nav.scss";
import "./nav.css";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    const { menus } = this.props;
    return (
      // <div className="container topnav">
      //   {menus.map((menu, index) => {
      //     return (
      //       <NavLink to={menu.path} exact activeClassName="active">
      //         {menu.name}
      //         {/* Kiểm tra menus có tồn tại hay không rồi mới kiểm tra length */}
      //         {menu.menus &&
      //           menu.menus.length > 0 &&
      //           menu.menus.map((item, index) => {
      //             return <NavLink to={item.path}>{item.name}</NavLink>;
      //           })}
      //       </NavLink>
      //     );
      //   })}
      // </div>

      <div class="container navbar">
        <a href="#home">Home</a>
        <div class="subnav">
          <button class="subnavbtn">
            About <i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#company">Company</a>
            <a href="#team">Team</a>
            <a href="#careers">Careers</a>
          </div>
        </div>
        <div class="subnav">
          <button class="subnavbtn">
            Services <i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#bring">Bring</a>
            <a href="#deliver">Deliver</a>
            <a href="#package">Package</a>
            <a href="#express">Express</a>
          </div>
        </div>
        <div class="subnav">
          <button class="subnavbtn">
            Partners <i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
            <a href="#link4">Link 4</a>
          </div>
        </div>
        <a href="#contact">Contact</a>
      </div>
    );
  }
}
export default Nav;
