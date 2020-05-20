import React, { Component } from "react";
import Center from "../UserProfile/Actions/ManageCenters/center";

class QuarantineCenters extends Component {
  state = {};
  render() {
    return (
      <div className="scroll">
        <table className="mt3">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Total Beds</th>
              <th>Patients</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <Center />
          </tbody>
        </table>
      </div>
    );
  }
}

export default QuarantineCenters;
