import React from "react";
import Todo from "./Todo";
// import { toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";

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
    toast.success("Add success");
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
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {/* Same as */}
            <ToastContainer />
          </>
        );
      default:
        break;
    }
  }
}
export default MenuDetails;
