import React from "react";
import { withRouter } from "react-router";
class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/todo");
    }, 5000);
  }
  render() {
    // console.log(">>> Check props", this.props);
    return "This is Home";
  }
}
export default withRouter(Home);
