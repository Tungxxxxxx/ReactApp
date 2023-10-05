import React from "react";

class Title extends React.Component {
  render() {
    const { countDown } = this.props;
    return (
      <>
        <p style={{ fontSize: 40 }}>{countDown}</p>
      </>
    );
  }
}
export default Title;
