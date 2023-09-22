import React from "react";
import Todo from "./Todo";

class MenuDetails extends React.Component {
  state = {
    task: "",
    arrTasks: [],
  };
  handleOnchangeTask = (event) => {
    this.setState({
      task: event.target.value,
    });
  };
  handleOnclickAdd = () => {
    let taskObj = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.task,
    };
    this.setState({
      task: "",
      arrTasks: [...this.state.arrTasks, taskObj],
    });
  };
  handleOnClickDel = (id) => {
    this.setState({
      arrTasks: this.state.arrTasks.filter((item) => item.id !== id),
    });
  };
  render() {
    let { menuObj } = this.props;
    let { arrTasks } = this.state;
    console.log(arrTasks);
    switch (menuObj.menu) {
      case "home":
        return (
          <>
            <p>Homeeeeeeeeeeeeeeeee</p>
          </>
        );
      case "todo":
        return (
          <>
            <Todo
              task={this.state}
              handleOnclickAdd={this.handleOnclickAdd}
              handleOnClickDel={this.handleOnClickDel}
              handleOnchangeTask={this.handleOnchangeTask}
            />
          </>
        );
      default:
        break;
    }
  }
}
export default MenuDetails;
