import React from "react";
import MenuDetails from "./MenuDetails";
class MenuList extends React.Component {
  state = {
    menu: "",
    clickedTodo: false,
    clickedHome: false,
  };
  handleOnClickHome = () => {
    this.setState({
      clickedTodo: false,
      clickedHome: true,
    });
    this.setState({
      menu: "home",
    });
  };
  handleOnClickTodo = () => {
    this.setState({
      clickedTodo: true,
      clickedHome: false,
    });
    this.setState({
      menu: "todo",
    });
  };
  render() {
    const { clickedTodo, clickedHome } = this.state;
    const textStyleHome = clickedHome ? { color: "red" } : {};
    const textStyleTodo = clickedTodo ? { color: "red" } : {};
    return (
      <>
        <div>
          <ul className="breadcrumb">
            <li>
              <a
                href="#a"
                onClick={() => {
                  this.handleOnClickHome();
                }}
                style={textStyleHome}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#a"
                onClick={() => {
                  this.handleOnClickTodo();
                }}
                style={textStyleTodo}
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
