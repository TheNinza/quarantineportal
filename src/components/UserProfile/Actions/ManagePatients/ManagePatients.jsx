import React, { Component } from "react";
import Patient from "./Patient";

class ManagePatients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
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
    fetch("https://enigmatic-journey-77724.herokuapp.com/patient")
      .then((response) => response.json())
      .then((patients) => {
        this.setState({ patients });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.setCenterId();
    fetch("https://enigmatic-journey-77724.herokuapp.com/patient")
      .then((response) => response.json())
      .then((patients) => {
        if (this.props.profileRoute === "centerPatients") {
          const temp = patients.filter(
            (patient) => patient.center_id === this.props.data
          );
          this.setState({ patients: temp });
        } else {
          this.setState({ patients: patients });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { user, sendData, onProfileRouteChange, profileRoute } = this.props;
    return (
      <div>
        {profileRoute !== "centerPatients" ? (
          <div className="new-Patient">
            <div
              onClick={() => {
                onProfileRouteChange("newPatient");
              }}
              className="w-10 tc pa2 mt3 br3 grow bg-blue white b pointer shadow-5"
            >
              Add New Patient
            </div>
          </div>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        {this.state.patients.length === 0 ? (
          <div className="f3 mt3 fw6 pa2 o-50">Loading...</div>
        ) : (
          <div className="scroll">
            <table className="mt3">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Quarantine Center</th>
                  <th>Date of Admission</th>
                  <th>Stay Duration</th>
                  <th>Status</th>
                  {profileRoute !== "centerPatients" ? (
                    <th>Actions</th>
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                </tr>
              </thead>
              <tbody>
                {this.state.patients.map((patient) => {
                  if (user.user_role_name === "Center Manager") {
                    if (this.state.center_id === patient.center_id) {
                      return (
                        <Patient
                          key={patient.patient_id}
                          sendData={sendData}
                          user={user}
                          onProfileRouteChange={onProfileRouteChange}
                          patient={patient}
                          updatelist={this.updatelist}
                          profileRoute={profileRoute}
                        />
                      );
                    } else return null;
                  } else {
                    return (
                      <Patient
                        key={patient.patient_id}
                        sendData={sendData}
                        user={user}
                        onProfileRouteChange={onProfileRouteChange}
                        patient={patient}
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

export default ManagePatients;
