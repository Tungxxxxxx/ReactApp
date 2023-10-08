import React from "react";
import "./title.scss";
class Title extends React.Component {
  render() {
    const { countDown } = this.props;
    return (
      <div>
        <p style={{ fontSize: 40 }}>{countDown}</p>
      </div>
    );
  }
}
export default Title;
