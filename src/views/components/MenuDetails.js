import React from "react";
import Todo from "./Todo";
// import { toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";

class MenuDetails extends React.Component {
  state = {
    task: "",
    arrTasks: [
      { id: 1, title: "Task số 1" },
      { id: 2, title: "Task số 2" },
      { id: 3, title: "Task số 3" },
    ],
    editTask: {},
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
    toast.success("Delete success");
  };
  handleOnClickEdit = (item) => {
    if (Object.keys(this.state.editTask).length === 0) {
      this.setState({
        editTask: item,
      });
    } else {
      //Copy mảng arrTasks - Không nên sửa trực tiếp trên state
      let arrTasksCopy = [...this.state.arrTasks];
      //Lấy index phần tử cần sửa
      let editIndex = arrTasksCopy.findIndex((task) => task.id === item.id);
      //Set title cho phần tử editIndex
      if (arrTasksCopy[editIndex].title === this.state.editTask.title) {
        //Set lại state
        this.setState({
          //Đạt lại giá trị empty cho editTask
          editTask: {},
        });
        toast.info("No change");
      } else {
        arrTasksCopy[editIndex].title = this.state.editTask.title;
        //Set lại state
        this.setState({
          arrTasks: arrTasksCopy,
          //Đạt lại giá trị empty cho editTask
          editTask: {},
        });
        toast.success("Edit success");
      }
    }
  };
  handleOnchangeEditTask = (event, item) => {
    console.log(">>>Đây là on change task");
    this.setState({
      editTask: {
        id: item.id,
        title: event.target.value,
      },
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
              handleOnClickEdit={this.handleOnClickEdit}
              handleOnchangeEditTask={this.handleOnchangeEditTask}
            />
            <ToastContainer
              position="top-right"
              autoClose={500}
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
