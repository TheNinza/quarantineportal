import React, { Component } from "react";

class NewService extends Component {
  state = {
    center_id: "",
    request_description: "",
  };

  onbuttonsubmit = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/newRequest", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        center_id: this.state.center_id,
        request_description: this.state.request_description,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.request_id) {
          window.alert("Request created");
        }
      })
      .catch((err) => console.log("error", err));
  };

  onCenterIdChange = (event) => {
    this.setState({ center_id: event.target.value });
  };
  onReqDescriptionChange = (event) => {
    this.setState({ request_description: event.target.value });
  };

  render() {
    return (
      <div className="register-form br3 flex flex-column items-center center shadow-3 mt3">
        <main className="pa4 black-80">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Enter service details</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="center">
                  Center Id
                </label>
                <input
                  onChange={this.onCenterIdChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="center"
                  id="center"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Descreption
                </label>
                <input
                  onChange={this.onReqDescriptionChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
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

export default NewService;
