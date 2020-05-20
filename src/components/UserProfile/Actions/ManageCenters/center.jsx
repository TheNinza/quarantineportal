import React, { Component } from "react";
class center extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onbuttonedit = () => {
    this.props.sendData(this.props.center.center_id);
    this.props.onProfileRouteChange("editCenter");
  };

  onbuttondelete = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/deleteCenter", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        center_id: this.props.center.center_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 1 || data === "1") {
          window.alert("center deleted");
          this.props.updatelist();
        }
      })
      .catch((err) => console.log(err));
  };

  onbuttonshowstaff = () => {
    this.props.sendData(this.props.center.center_id);
    this.props.onProfileRouteChange("centerStaffs");
  };

  onbuttonshowpatient = () => {
    this.props.sendData(this.props.center.center_id);
    this.props.onProfileRouteChange("centerPatients");
  };

  render() {
    const { center } = this.props;
    return (
      <React.Fragment>
        <tr className="o-85">
          <td>{`${center.center_id}`}</td>
          <td>{`${center.center_name}`}</td>
          <td>{`${center.center_type_description}`}</td>
          <td> {`${center.user_name}`} </td>
          <td> {`${center.user_id}`} </td>
          <td> {`${center.center_address}`} </td>
          <td> {`${center.center_contact_number}`} </td>
          <td> {`${center.number_staffs}`} </td>
          <td> {`${center.number_patients}`} </td>
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
              <div className="flex flex-column">
                <input
                  onClick={this.onbuttonshowstaff}
                  type="submit"
                  value="Show Staffs"
                  className="grow mh2 mv1 pointer shadow-5 b bg-transparent f6 blue ba b--blue"
                />
                <input
                  onClick={this.onbuttonshowpatient}
                  type="submit"
                  value="Show Patients"
                  className="grow mh2 pointer shadow-5 b bg-transparent f6 blue ba b--blue"
                />
              </div>
            </div>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default center;
