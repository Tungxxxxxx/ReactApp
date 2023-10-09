import React from "react";
import "./title.scss";
import bg from "../../assets/images/bg1.png";
class Title extends React.Component {
  render() {
    // const { countDown } = this.props;
    return (
      <div>
        <img
          src={bg}
          alt="ssssssss"
          style={{ width: "100%", height: "auto", borderRadius: "5px 5px" }}
        />
        {/* <p style={{ fontSize: 40 }}>{countDown}</p> */}
      </div>
    );
  }
}
export default Title;
