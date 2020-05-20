import React, { Component } from "react";

class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onbuttonedit = () => {
    this.props.sendData(this.props.staff.staff_id);
    this.props.onProfileRouteChange("editStaff");
  };

  onbuttondelete = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/deleteStaff", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        staff_id: this.props.staff.staff_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 1 || data === "1") {
          window.alert("staff deleted");
          this.props.updatelist();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { staff, profileRoute } = this.props;
    return (
      <React.Fragment>
        <tr className="o-85">
          <td>{`${staff.staff_id}`}</td>
          <td>{`${staff.staff_name}`}</td>
          <td>{`${staff.staff_contact_number}`}</td>
          <td>{`${staff.center_name}`}</td>
          <td>{`${staff.role_name}`}</td>
          <td>{`${staff.working_hours}`}</td>
          {profileRoute !== "centerStaffs" ? (
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
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </tr>
      </React.Fragment>
    );
  }
}

export default Staff;
