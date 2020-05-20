import React from "react";

const Sidebar = ({ user, onProfileRouteChange }) => {
  return (
    <div className="sidebar white bg-light-green shadow-3">
      <div className="flex flex-column justify-center tc ">
        <div className="intro fw6">
          <div
            onClick={() => {
              onProfileRouteChange("userInfo");
            }}
            className="w-90 pa3 dim center br3 grow shadow-3 mt2 pointer bg-red"
          >
            <code> {user.user_name} </code>
          </div>
          <div
            onClick={() => {
              onProfileRouteChange("editProfile");
            }}
            className="w-90 pa3 dim br3 center grow shadow-3 mt2 pointer bg-orange"
          >
            <code>Edit Profile</code>
          </div>
        </div>
        <div className="actions fw4 mt4">
          {user.user_role_name !== "Center Manager" ? (
            <div
              onClick={() => {
                onProfileRouteChange("manageCenters");
              }}
              className="w-90 pa3 dim br3 center grow shadow-3 mt2 pointer bg-blue"
            >
              <code>Manage Quarantine Centers</code>
            </div>
          ) : (
            ""
          )}

          <div
            onClick={() => {
              onProfileRouteChange("managePatients");
            }}
            className="w-90 pa3 dim br3 center grow shadow-3 mt2 pointer bg-blue"
          >
            <code>Manage Patients</code>
          </div>
          <div
            onClick={() => {
              onProfileRouteChange("manageStaffs");
            }}
            className="w-90 pa3 dim br3 center grow shadow-3 mt2 pointer bg-blue"
          >
            <code>Manage Staffs</code>
          </div>
          <div
            onClick={() => {
              onProfileRouteChange("manageRequests");
            }}
            className="w-90 pa3 dim br3 center grow shadow-3 mt2 pointer bg-blue"
          >
            <code>Manage Requested Services</code>
          </div>
          {user.user_role_name === "Database Administrator" ? (
            <div
              onClick={() => {
                onProfileRouteChange("manageUsers");
              }}
              className="w-90 pa3 dim br3 center grow shadow-3 mt2 pointer bg-blue"
            >
              <code>Manage Users</code>
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
