import React, { Component } from "react";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onbuttonedit = () => {
    this.props.sendData(this.props.user.user_id);
    this.props.onProfileRouteChange("editUser");
  };

  onbuttondelete = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/deleteUser", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: this.props.user.user_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 1 || data === "1") {
          window.alert("user deleted");
          this.props.updatelist();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <tr className="o-85">
          <td> {`${user.user_id}`} </td>
          <td>{`${user.user_name}`}</td>
          <td>{`${user.user_email}`}</td>
          <td>{`${user.user_phone}`}</td>
          <td>{`${user.user_role_name}`}</td>
          <td>
            <div className="flex justify-center items-center">
              <input
                onClick={this.onbuttonedit}
                type="submit"
                value="Edit"
                className="grow mh2 pointer shadow-5 b ba b--black bg-transparent f6"
              />
              <input
                onClick={this.onbuttondelete}
                type="submit"
                value="Delete"
                className="grow mh2 pointer shadow-5 b bg-transparent f6 red ba b--red"
              />
            </div>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default User;
