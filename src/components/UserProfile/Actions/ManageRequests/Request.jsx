import React, { Component } from "react";
class center extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onbuttondelete = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/deleteRequest", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        request_id: this.props.request.request_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 1 || data === "1") {
          window.alert("request deleted");
          this.props.updatelist();
        }
      })
      .catch((err) => console.log(err));
  };

  onbuttonprocess = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/requestActions", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        request_id: this.props.request.request_id,
        user_id: this.props.user.user_id,
        status_id: 2,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 1 || data === "1") {
          window.alert("request processed");
          this.props.updatelist();
        }
      })
      .catch((err) => console.log(err));
  };

  onbuttondiscard = () => {
    fetch("https://enigmatic-journey-77724.herokuapp.com/requestActions", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        request_id: this.props.request.request_id,
        user_id: this.props.user.user_id,
        status_id: 3,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 1 || data === "1") {
          window.alert("request discarded");
          this.props.updatelist();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { user, request } = this.props;
    return (
      <React.Fragment>
        <tr className="o-85">
          <td> {`${request.request_id}`} </td>
          <td> {`${request.center_name}`} </td>
          <td> {`${request.request_description}`} </td>
          <td> {`${request.status_name}`} </td>
          <td>
            {" "}
            {`${
              request.user_id !== null
                ? `${request.user_name}/(${request.user_id})`
                : "Pending"
            }`}{" "}
          </td>

          <td>
            <div className="flex justify-center items-center">
              {user.user_role_name !== "Center Manager" &&
              request.status_id === 1 ? (
                <input
                  onClick={this.onbuttonprocess}
                  type="submit"
                  value="Process"
                  className="grow mh2 pointer shadow-5 b ba b--blue blue bg-transparent f6"
                />
              ) : (
                ""
              )}

              {user.user_role_name !== "Government Official" ? (
                <input
                  onClick={this.onbuttondelete}
                  type="submit"
                  value="Delete"
                  className="grow mh2 pointer shadow-5 b bg-transparent f6 red ba b--red"
                />
              ) : (
                ""
              )}

              {user.user_role_name !== "Center Manager" &&
              request.status_id === 1 ? (
                <input
                  onClick={this.onbuttondiscard}
                  type="submit"
                  value="Discard"
                  className="grow mh2 pointer shadow-5 b bg-transparent f6 yellow ba b--yellow"
                />
              ) : (
                ""
              )}
            </div>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default center;
