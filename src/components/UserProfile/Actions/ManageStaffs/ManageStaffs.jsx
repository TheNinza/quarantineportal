import React, { Component } from "react";
import Staff from "./Staff";

class ManageStaffs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: [],
      center_id: "",
    };
  }

  setCenterId = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/getcenteruser", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: this.props.user.user_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ center_id: data.center_id });
      })
      .catch((err) => console.log("error", err));
  };

  updatelist = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/staff")
      .then((response) => response.json())
      .then((staffs) => {
        this.setState({ staffs });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.setCenterId();
    fetch("https://enigmatic-journey-77724.herokuapp.com/staff")
      .then((response) => response.json())
      .then((staffs) => {
        if (this.props.profileRoute === "centerStaffs") {
          const temp = staffs.filter(
            (staff) => staff.center_id === this.props.data
          );
          this.setState({ staffs: temp });
        } else this.setState({ staffs: staffs });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { user, sendData, onProfileRouteChange, profileRoute } = this.props;
    return (
      <div>
        {user.role !== "Center Manager" && profileRoute !== "centerStaffs" ? (
          <div className="newstaff">
            <div
              onClick={() => {
                onProfileRouteChange("newStaff");
              }}
              className="w-10 tc pa2 mt3 br3 grow bg-blue white b pointer shadow-5"
            >
              Add New Staff
            </div>
          </div>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        {this.state.staffs.length === 0 ? (
          <div className="f3 mt3 fw6 pa2 o-50">Loading...</div>
        ) : (
          <div className="scroll">
            <table className="mt3">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Contact Number</th>
                  <th>Quarantine Center</th>
                  <th>Role</th>
                  <th>Working-Hours</th>
                  {profileRoute !== "centerStaffs" ? (
                    <th>Actions</th>
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                </tr>
              </thead>
              <tbody>
                {this.state.staffs.map((staff) => {
                  if (user.user_role_name === "Center Manager") {
                    if (this.state.center_id === staff.center_id) {
                      return (
                        <Staff
                          key={staff.staff_id}
                          sendData={sendData}
                          user={user}
                          onProfileRouteChange={onProfileRouteChange}
                          staff={staff}
                          updatelist={this.updatelist}
                          profileRoute={profileRoute}
                        />
                      );
                    } else return null;
                  } else {
                    return (
                      <Staff
                        key={staff.staff_id}
                        sendData={sendData}
                        user={user}
                        onProfileRouteChange={onProfileRouteChange}
                        staff={staff}
                        updatelist={this.updatelist}
                        profileRoute={profileRoute}
                      />
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default ManageStaffs;
