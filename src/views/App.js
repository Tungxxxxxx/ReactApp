import Nav from "./nav/Nav";
import Home from "./home/Home";
import About from "./about/About";
import TodoList from "./todo/TodoList";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
      <header class=" container jumbotron jumbotron-fluid">
        <div class="container text-center">
          <p class="lead">Best wish for you</p>
        </div>
      </header>
      <div className="container">
        <div class="row">
          <div class="col-md-12">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/todo" component={TodoList} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </div>
      {/* <!-- Phần chân trang --> */}
      <footer class="footer">
        <div class="container">
          <p>&copy; 2023 Phạm Thanh Tùng</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
