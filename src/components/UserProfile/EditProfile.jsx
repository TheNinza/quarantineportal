import React, { Component } from "react";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user.user_id,
      user_name: "",
      user_email: "",
      user_phone: "",
      user_role: "",
      updated: false,
    };
  }

  onNameChange = (event) => {
    this.setState({ user_name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ user_email: event.target.value });
  };

  onPhoneChange = (event) => {
    this.setState({ user_phone: event.target.value });
  };

  onButtonSubmit = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/editProfile", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_name: this.state.user_name,
        user_email: this.state.user_email,
        user_id: this.state.user_id,
        user_phone: this.state.user_phone,
        user_role: this.state.user_role,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user_id) {
          this.setState({ updated: true });
        }
      })
      .catch((err) => console.log("error", err));
  };

  render() {
    return (
      <div>
        <div className="register-form center br3 shadow-2 mt3">
          <main className="pa4 black-80">
            <div className="w-80 center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0 tc">
                  Enter Updated Details
                </legend>
                <code>(Enter the fields that you want to update)</code>
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
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    onChange={this.onEmailChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    onChange={this.onPhoneChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="phone"
                    id="phone"
                  />
                </div>
              </fieldset>
              <div>
                <code className="tc red fw5">
                  {" "}
                  {this.state.updated ? "Updated Successfully" : ""}
                </code>
              </div>
              <div className="flex">
                <input
                  onClick={this.onButtonSubmit}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default EditProfile;
