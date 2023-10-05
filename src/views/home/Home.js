import React from "react";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      // this.props.history.push("/todo");
    }, 3000);
  }
  // componentDidMount() {
  //   this.props.history.push("/todo");
  // }
  render() {
    console.log(">>> Check props", this.props);
    return "This is Home";
  }
}
export default Home;
