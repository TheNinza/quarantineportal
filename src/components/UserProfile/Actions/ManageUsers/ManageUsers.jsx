import React, { Component } from "react";
import User from "./User";

class ManageUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  updatelist = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/user")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    fetch("https://enigmatic-journey-77724.herokuapp.com/user")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users: users });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { sendData, onProfileRouteChange } = this.props;
    return (
      <div>
        <div className="new-center">
          <div
            onClick={() => {
              onProfileRouteChange("newUser");
            }}
            className="w-10 tc pa2 mt3 br3 grow bg-blue white b pointer shadow-5"
          >
            Add New User
          </div>
        </div>
        {this.state.users.length === 0 ? (
          <div className="f3 mt3 fw6 pa2 o-50">Loading...</div>
        ) : (
          <div className="scroll">
            <table className="mt3">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => {
                  return (
                    <User
                      key={user.user_id}
                      sendData={sendData}
                      user={user}
                      onProfileRouteChange={onProfileRouteChange}
                      updatelist={this.updatelist}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default ManageUsers;
