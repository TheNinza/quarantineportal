import React, { Component } from "react";

class EditUser extends Component {
  state = {
    role: [],
    user_id: this.props.data,
    user_name: "",
    user_email: "",
    user_phone: "",
    user_role_id: "",
  };

  onbuttonsubmit = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/editUser", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: this.state.user_id,
        user_name: this.state.user_name,
        user_email: this.state.user_email,
        user_phone: this.state.user_phone,
        user_role_id: this.state.user_role_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user_id) {
          window.alert("user updated");
        }
      })
      .catch((err) => console.log("error", err));
  };

  componentDidMount() {
    fetch("https://enigmatic-journey-77724.herokuapp.com/userrole")
      .then((response) => response.json())
      .then((data) => {
        if (data[0].user_role_id) {
          this.setState({ role: data });
        }
      })
      .catch((err) => console.log(err));
  }

  onNameChange = (event) => {
    this.setState({ user_name: event.target.value });
  };
  onuser_emailChange = (event) => {
    this.setState({ user_email: event.target.value });
  };
  oncontact_numberChange = (event) => {
    this.setState({ user_phone: event.target.value });
  };
  onuser_Role_idChange = (event) => {
    this.setState({ user_role_id: event.target.value });
  };

  render() {
    return (
      <div className="register-form br3 flex flex-column items-center center shadow-3 mt3">
        <main className="pa4 black-80">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Enter user details</legend>
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
                <label className="db fw6 lh-copy f6" htmlFor="email">
                  Email
                </label>
                <input
                  onChange={this.onuser_emailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="Role">
                  Role
                </label>
                <div className="flex">
                  {this.state.role.map((type) => {
                    return (
                      <div key={type.user_role_id}>
                        <code>{`${type.user_role_id} : ${type.user_role_name}`}</code>
                      </div>
                    );
                  })}
                </div>
                <input
                  onChange={this.onuser_Role_idChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="Role"
                  id="Role"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="Phone">
                  Phone
                </label>
                <input
                  onChange={this.oncontact_numberChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="Phone"
                  id="Phone"
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

export default EditUser;
