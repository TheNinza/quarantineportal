import React, { Component } from "react";

class EditPatient extends Component {
  state = {
    patient_id: this.props.data,
    patient_name: "",
    patient_address: "",
    date_of_admission: "",
    stay_duration: "",
    patient_status: "",
    center_id: "",
  };

  onbuttonsubmit = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/editPatient", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.patient_id) {
          window.alert("Patient Edited");
        }
      })
      .catch((err) => console.log("error", err));
  };

  onNameChange = (event) => {
    this.setState({ patient_name: event.target.value });
  };
  onaddressChange = (event) => {
    this.setState({ patient_address: event.target.value });
  };
  onstatusChange = (event) => {
    this.setState({ patient_status: event.target.value });
  };
  ondateofadmissionChange = (event) => {
    this.setState({ date_of_admission: event.target.value });
  };
  ondurationChange = (event) => {
    this.setState({ stay_duration: event.target.value });
  };

  onidchange = (event) => {
    this.setState({ center_id: event.target.value });
  };

  render() {
    return (
      <div className="register-form br3 flex flex-column items-center center shadow-3 mt3">
        <main className="pa4 black-80">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">
                Enter Updated Patient details
              </legend>
              <code>Only non empty fields will be updated</code>

              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  onChange={this.onNameChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="center-address">
                  Address
                </label>
                <input
                  onChange={this.onaddressChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="center-address"
                  id="center-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="centerTypeId">
                  Date of admission
                </label>

                <input
                  onChange={this.ondateofadmissionChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="centerTypeId"
                  id="centerTypeId"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="Phone">
                  Stay Duration (in days)
                </label>
                <input
                  onChange={this.ondurationChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="Phone"
                  id="Phone"
                />
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="status">
                  Patient Status
                </label>
                <input
                  onChange={this.onstatusChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="status"
                  id="status"
                />
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="centerid">
                  Center Id
                </label>
                <code className="red">The center must exist</code>
                <input
                  onChange={this.onidchange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="centerid"
                  id="centerid"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onbuttonsubmit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default EditPatient;
