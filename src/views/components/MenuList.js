import React from "react";
import MenuDetails from "./MenuDetails";
class MenuList extends React.Component {
  state = {
    menu: "",
  };
  handleOnlickHome = () => {
    this.setState({
      menu: "home",
    });
  };
  handleOnlickTodo = () => {
    this.setState({
      menu: "todo",
    });
  };
  render() {
    return (
      <>
        <div>
          <ul className="breadcrumb">
            <li>
              <a
                href="#"
                onClick={() => {
                  this.handleOnlickHome();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  this.handleOnlickTodo();
                }}
              >
                Todo
              </a>
            </li>
          </ul>
        </div>
        <div>
          <MenuDetails menuObj={this.state} />
        </div>
      </>
    );
  }
}
export default MenuList;
