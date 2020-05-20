import React, { Component } from "react";

class LoginAs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      user_role_name: "Government Official",
      password: "",
      invalidLogin: false,
    };
  }

  roledescription = (role) => {
    if (role === "Government Official") {
      return "The user will be able to manage different quarantine centers, staffs and respond to any request from the center.";
    } else if (role === "Center Manager") {
      return "The user will be able to manage the staffs, patients and send requests of his/her center only.";
    } else if (role === "Database Administrator") {
      return "The user will be able to manage the managers, government officials can perform all the CRUD operations on the database.";
    }
  };

  optionSelect = (event) => {
    this.setState({ user_role_name: event.target.value });
  };

  onUpdatePass = (event) => {
    this.setState({ password: event.target.value });
  };

  onLogin = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_role_name: this.state.user_role_name,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user_id) {
          this.props.loadUser(data);
          this.props.onRouteChange("userProfile");
        } else this.setState({ invalidLogin: true });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="flex flex-column items-center br3 shadow-3 pa3">
        <div className="pa2 br3 tc shadow-3">
          <label className="f1 b underline">Login As</label>
        </div>
        <div>
          <div className="pa3 tc">
            <select
              onChange={this.optionSelect}
              name="users"
              id="users"
              className="pa2 f3 br3 dim shadow-3"
            >
              <option value="Government Official">Government Official</option>
              <option value="Center Manager">Center Manager</option>
              <option value="Database Administrator">
                Database Administrator
              </option>
            </select>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="login-pass">
              Login Password
            </label>
            <input
              onChange={this.onUpdatePass}
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
              name="login-password"
              id="login-password"
            />
          </div>
          <div className="tc mt2">
            <input
              onClick={this.onLogin}
              type="button"
              value="Login"
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib shadow-3 br3"
            />
          </div>
        </div>
        {this.state.invalidLogin ? (
          <code className="red mt3">Invalid Password</code>
        ) : (
          ""
        )}
        <div className="ba mt3 mh2 br3 pa2">
          <div className="tc f4 underline">
            <label>Role:</label>
          </div>
          <div className="pa2">
            <code>{this.roledescription(this.state.user_role_name)}</code>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginAs;
