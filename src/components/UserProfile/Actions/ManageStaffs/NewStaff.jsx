import React, { Component } from "react";

class NewStaff extends Component {
  state = {
    role: [],
    staff_name: "",
    working_hours: "",
    staff_contact_number: "",
    role_id: "",
    center_id: "",
  };

  onbuttonsubmit = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/newStaff", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        staff_name: this.state.staff_name,
        working_hours: this.state.working_hours,
        staff_contact_number: this.state.staff_contact_number,
        role_id: this.state.role_id,
        center_id: this.state.center_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.staff_id) {
          window.alert("staff created");
        }
      })
      .catch((err) => console.log("error", err));
  };

  componentDidMount() {
    fetch("https://enigmatic-journey-77724.herokuapp.com/staffrole")
      .then((response) => response.json())
      .then((data) => {
        if (data[0].role_id) {
          this.setState({ role: data });
        }
      })
      .catch((err) => console.log(err));
  }

  onNameChange = (event) => {
    this.setState({ staff_name: event.target.value });
  };
  onWorking_hoursChange = (event) => {
    this.setState({ working_hours: event.target.value });
  };
  oncontact_numberChange = (event) => {
    this.setState({ staff_contact_number: event.target.value });
  };
  onRole_idChange = (event) => {
    this.setState({ role_id: event.target.value });
  };
  onidChange = (event) => {
    this.setState({ center_id: event.target.value });
  };
  render() {
    return (
      <div className="register-form br3 flex flex-column items-center center shadow-3 mt3">
        <main className="pa4 black-80">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Enter staff details</legend>
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
                <label className="db fw6 lh-copy f6" htmlFor="working-hours">
                  Working Hours (eg: 900-1600)
                </label>
                <input
                  onChange={this.onWorking_hoursChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="working-hours"
                  id="working-hours"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="Role">
                  Role_id
                </label>
                <div className="flex">
                  {this.state.role.map((type) => {
                    return (
                      <div key={type.role_id}>
                        <code>{`${type.role_id} : ${type.role_name}`}</code>
                      </div>
                    );
                  })}
                </div>
                <input
                  onChange={this.onRole_idChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="Role"
                  id="Role"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="Contact">
                  Contact Number
                </label>
                <input
                  onChange={this.oncontact_numberChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="Contact"
                  id="Contact"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="Center-id">
                  Center Id (where the staff is going to work)
                </label>
                <code className="red">Make sure that center exists.</code>
                <input
                  onChange={this.onidChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="Center-id"
                  id="Center-id"
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

export default NewStaff;
