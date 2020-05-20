import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import UserInfo from "./UserInfo";
import EditProfile from "./EditProfile";

import ManageCenters from "./Actions/ManageCenters/ManageCenters";
import ManageUsers from "./Actions/ManageUsers/ManageUsers";
import ManageStaffs from "./Actions/ManageStaffs/ManageStaffs";
import ManagePatients from "./Actions/ManagePatients/ManagePatients";
import ManageRequests from "./Actions/ManageRequests/ManageRequests";

import NewCenter from "./Actions/ManageCenters/NewCenter";
import NewStaff from "./Actions/ManageStaffs/NewStaff";
import NewRequest from "./Actions/ManageRequests/NewRequest";
import NewUser from "./Actions/ManageUsers/NewUser";
import NewPatient from "./Actions/ManagePatients/NewPatient";

import EditCenter from "./Actions/ManageCenters/EditCenter";
import EditPatient from "./Actions/ManagePatients/EditPatient";
import EditStaff from "./Actions/ManageStaffs/EditStaff";
import EditUser from "./Actions/ManageUsers/EditUser";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sendData = (data) => {
    this.setState({ data: data });
  };

  render() {
    const { user, profileRoute, onProfileRouteChange } = this.props;
    return (
      <div className="cf ph0-ns">
        <div className="fn fl-ns w-20-ns pr4-ns">
          <Sidebar user={user} onProfileRouteChange={onProfileRouteChange} />
        </div>
        <div className="fn fl-ns w-80-ns">
          {profileRoute === "userInfo" ? (
            <UserInfo user={user} />
          ) : profileRoute === "editProfile" ? (
            <EditProfile
              user={user}
              onProfileRouteChange={onProfileRouteChange}
            />
          ) : profileRoute === "manageCenters" ? (
            <ManageCenters
              sendData={this.sendData}
              user={user}
              onProfileRouteChange={onProfileRouteChange}
            />
          ) : profileRoute === "manageStaffs" ? (
            <ManageStaffs
              sendData={this.sendData}
              user={user}
              onProfileRouteChange={onProfileRouteChange}
            />
          ) : profileRoute === "manageUsers" ? (
            <ManageUsers
              sendData={this.sendData}
              user={user}
              onProfileRouteChange={onProfileRouteChange}
            />
          ) : profileRoute === "manageRequests" ? (
            <ManageRequests
              sendData={this.sendData}
              user={user}
              onProfileRouteChange={onProfileRouteChange}
            />
          ) : profileRoute === "managePatients" ? (
            <ManagePatients
              sendData={this.sendData}
              user={user}
              onProfileRouteChange={onProfileRouteChange}
            />
          ) : profileRoute === "newCenter" ? (
            <NewCenter />
          ) : profileRoute === "newStaff" ? (
            <NewStaff />
          ) : profileRoute === "newRequest" ? (
            <NewRequest />
          ) : profileRoute === "newPatient" ? (
            <NewPatient />
          ) : profileRoute === "newUser" ? (
            <NewUser />
          ) : profileRoute === "centerStaffs" ? (
            <ManageStaffs
              data={this.state.data}
              profileRoute={profileRoute}
              sendData={this.sendData}
              user={user}
              onProfileRouteChange={onProfileRouteChange}
            />
          ) : profileRoute === "centerPatients" ? (
            <ManagePatients
              data={this.state.data}
              profileRoute={profileRoute}
              sendData={this.sendData}
              user={user}
              onProfileRouteChange={onProfileRouteChange}
            />
          ) : profileRoute === "editCenter" ? (
            <EditCenter data={this.state.data} />
          ) : profileRoute === "editPatient" ? (
            <EditPatient data={this.state.data} />
          ) : profileRoute === "editStaff" ? (
            <EditStaff data={this.state.data} />
          ) : profileRoute === "editUser" ? (
            <EditUser data={this.state.data} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default UserProfile;
