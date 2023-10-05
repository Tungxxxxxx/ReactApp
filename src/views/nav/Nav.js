import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    const { menus } = this.props;
    return (
      <div className="container topnav">
        {menus.map((menu, index) => {
          return (
            <div key={menu.id}>
              <NavLink to={menu.path} exact activeClassName="active">
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={() => this.props.hadleSetCountDownBegin()}
                >
                  {menu.name}
                </button>

                {/* Kiểm tra menus có tồn tại hay không rồi mới kiểm tra length */}
                {menu.menus &&
                  menu.menus.length > 0 &&
                  menu.menus.map((item, index) => {
                    return <NavLink to={item.path}>{item.name}</NavLink>;
                  })}
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Nav;
