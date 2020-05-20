import React, { Component } from "react";
class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onbuttonedit = () => {
    this.props.sendData(this.props.patient.patient_id);
    this.props.onProfileRouteChange("editPatient");
  };

  onbuttondelete = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/deletePatient", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patient_id: this.props.patient.patient_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 1 || data === "1") {
          window.alert("patient deleted");
          this.props.updatelist();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { patient, profileRoute } = this.props;
    return (
      <React.Fragment>
        <tr className="o-85">
          <td>{`${patient.patient_id}`}</td>
          <td>{`${patient.patient_name}`}</td>
          <td>{`${patient.patient_address}`}</td>
          <td>{`${patient.center_name}`}</td>
          <td>{`${patient.date_of_admission}`}</td>
          <td>{`${patient.stay_duration}`}</td>
          <td>{`${patient.patient_status}`}</td>
          {profileRoute !== "centerPatients" ? (
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

export default Patient;
