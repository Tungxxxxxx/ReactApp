import React from "react";
import Nav from "./nav/Nav";
import Home from "./home/Home";
import About from "./about/About";
import TodoList from "./todo/TodoList";
import Title from "./title/Title";
import User from "./users/User";
import DetailUser from "./users/DetailUser";

// import Apps from "./apps/Apps";
// import WatchVideo from "./apps/watchVideo/WatchVideo";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      milliseconds: 5000, // Giá trị đếm ngược ban đầu
    };
  }
  hadleSetCountDownBegin = () => {
    // console.log(">>>Check click Home");
    // this.setState({
    //   milliseconds: 5000,
    // });
    // console.log(">>>Check click Home", this.state.milliseconds);
    // this.countDown(5000);
  };
  componentDidMount() {
    // this.countDown(this.state.milliseconds);
  }
  countDown = (s) => {
    // Sử dụng setInterval để lặp lại đoạn mã, hàm
    // {
    //   if (s > 0) {
    //     this.setState({
    //       s: s,
    //     });
    //     s = s - 1;
    //   } else {
    //     clearInterval(intervalId);
    //   }
    // }
    // sau mỗi 1000 milliseconds (1 giây) được truyền vào
    const intervalId = setInterval(() => {
      if (s >= 0) {
        s = s - 10;
        this.setState({
          milliseconds: s,
        });
      } else {
        this.setState({
          milliseconds: s,
        });
        // Để dừng lặp lại, bạn có thể sử dụng clearInterval với intervalId
        clearInterval(intervalId);
      }
    }, 10);
  };
  menus = [
    { id: 1, path: "/", component: Home, name: "Home" },
    { id: 2, path: "/todo", component: TodoList, name: "Todo" },
    { id: 3, path: "/about", component: About, name: "About" },
    { id: 4, path: "/user", component: User, name: "User" },
  ];
  render() {
    return (
      <Router>
        <Nav
          menus={this.menus}
          hadleSetCountDownBegin={this.hadleSetCountDownBegin}
          countDown={this.countDown}
        />
        {/* <header className=" container jumbotron jumbotron-fluid"> */}
        <div
          className="container text-center"
          style={{ margin: "5px auto", opacity: 0.8, padding: 0 }}
        >
          <Title countDown={this.state.milliseconds} />
        </div>
        {/* </header> */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route path="/" exact>
                  <Home countDown={this.state.milliseconds} />
                </Route>
                <Route path="/todo" exact>
                  <TodoList />
                </Route>
                <Route path="/about" exact>
                  <About />
                </Route>
                <Route path="/user" exact>
                  <User />
                </Route>
                <Route path="/user/:id">
                  <DetailUser />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        {/* <!-- Phần chân trang --> */}
        <footer className="footer">
          <div className="container" style={{ backgroundColor: "#ebebeb" }}>
            <p style={{ textAlign: "center" }}>
              Copyright © 2023 Phạm Thanh Tùng
            </p>
          </div>
        </footer>
      </Router>
    );
  }
}
export default App;
