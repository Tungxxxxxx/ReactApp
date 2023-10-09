import React from "react";
import { connect } from "react-redux";
class About extends React.Component {
  handleOnCreate = () => {};
  handleOnDelete = (user) => {
    console.log(">>>Check user delete: ", user);
  };
  render() {
    const { reduxData } = this.props;
    console.log(">>>>>>", this.props);
    return (
      <>
        <p>About Redux</p>
        {reduxData && reduxData.length > 0 && (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {reduxData.map((user, i) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>
                        <button
                          className="btn-primary"
                          onClick={() => {
                            this.handleOnCreate();
                          }}
                        >
                          Add
                        </button>
                        <button
                          className="btn-primary"
                          onClick={() => {
                            this.handleOnDelete(user);
                          }}
                        >
                          Del
                        </button>
                        <button className="btn-primary">Update</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </>
    );
  }
}
// Gửi dữ liệu từ state của redux vào props của component
const mapStateToProps = (state) => {
  return { reduxData: state.users };
};
// gửi actions tới store của redux và thêm nó vào props của component, sau khi gửi thì redux nhận action ở hàm rootReducer(state,action) đã import tại index.js
const mapDispatchToProps = (disPatch) => {
  //Trả về một đối tượng
  return {
    // dispatch 1 đối tượng có thuộc tính type: tên action và payload
    deleteUserAction: (user) =>
      disPatch({ type: "DELETE-USER", payload: user }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
