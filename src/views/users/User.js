import React from "react";
import axios from "axios";
import "./user.scss";
import { withRouter } from "react-router-dom";
class User extends React.Component {
  state = {
    users: [],
    error: null,
  };
  async componentDidMount() {
    try {
      const res1 = await axios.get("https://reqres.in/api/users?page=1");
      this.setState({
        users: res1.data.data,
      });
      const res2 = await axios.get("https://reqres.in/api/users?page=2");
      const combinedUsers = [...res1.data.data, ...res2.data.data];
      this.setState({
        users: combinedUsers,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        error: error.message,
      });
    }
  }
  // componentDidMount() {
  //   axios
  //     .get("https://reqres.in/api/users?page=1")
  //     .then((res1) => {
  //       const users1 = res1.data.data;

  //       axios
  //         .get("https://reqres.in/api/users?page=2")
  //         .then((res2) => {
  //           const users2 = res2.data.data;
  //           //Kết hợp 2 mảng thành 1
  //           const combinedUsers = [...users1, ...users2];
  //           this.setState({
  //             users: combinedUsers,
  //           });
  //         })
  //         .catch((error2) => {
  //           this.setState({
  //             error: error2.message + " : page2",
  //           });
  //         });
  //       this.setState({
  //         users: users1,
  //       });
  //     })
  //     .catch((error1) => {
  //       this.setState({
  //         error: error1.message + " : page1",
  //       });
  //     });
  // }

  handleOnclickImg = (id) => {
    console.log(id);
    this.props.history.push(`/user/${id}`);
  };
  render() {
    const { users, error } = this.state;
    if (error) {
      return <>{error}</>;
    } else {
      return (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Avatar</th>
              <th>Email</th>
              <th>Full Name</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user, i) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      {" "}
                      <img
                        src={user.avatar}
                        alt={user.avatar}
                        onClick={() => this.handleOnclickImg(user.id)}
                      />
                    </td>
                    <td>{user.email}</td>
                    <td>{`${user.first_name} ${user.last_name}`}</td>
                  </tr>
                );
              })
            ) : (
              <>
                <tr>
                  <td>Không tìm thấy user nào</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      );
    }
  }
}
export default withRouter(User);
