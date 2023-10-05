import React from "react";
import Nav from "./nav/Nav";
import Home from "./home/Home";
import About from "./about/About";
import TodoList from "./todo/TodoList";
import Title from "./title/Title";
import Apps from "./apps/Apps";
import WatchVideo from "./apps/watchVideo/WatchVideo";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      milliseconds: 5000, // Giá trị đếm ngược ban đầu
    };
  }
  componentDidMount() {
    this.countDown(this.state.milliseconds);
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
    { path: "/", component: Home, name: "Home" },

    {
      path: "/apps",
      component: Apps,
      name: "Apps",
      menus: [
        {
          path: "/apps/todo",
          component: TodoList,
          name: "Todo",
        },
        {
          path: "/apps/watchVideo",
          component: WatchVideo,
          name: "WatchVideo",
        },
      ],
    },
    { path: "/about", component: About, name: "About" },
  ];
  render() {
    return (
      <Router>
        <Nav menus={this.menus} />
        <header className=" container jumbotron jumbotron-fluid">
          <div className="container text-center">
            <Title countDown={this.state.milliseconds} />
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route path="/" exact>
                  <Home countDown={this.state.milliseconds} />
                </Route>
                {this.menus.map((menu, index) => {
                  return (
                    <>
                      {index > 0 && (
                        <>
                          <Route path={menu.path} component={menu.component} />
                        </>
                      )}
                    </>
                  );
                })}
              </Switch>
            </div>
          </div>
        </div>
        {/* <!-- Phần chân trang --> */}
        <footer className="footer">
          <div className="container">
            <p>&copy; 2023 Phạm Thanh Tùng</p>
          </div>
        </footer>
      </Router>
    );
  }
}
export default App;
