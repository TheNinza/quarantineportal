import React from "react";

const UserInfo = ({ user }) => {
  return (
    <div className="">
      <div className="tc f1 mt2 fw6 underline">
        <code>User Profile</code>
      </div>
      <div className="flex flex-column justify-center shadow-3 w-50 center pa2 br3 mt3">
        <div className="f2 mt2 fw3">
          <code>Name:{` ${user.user_name}`} </code>
        </div>
        <div className="f3 mt2 fw2">
          <code>User Id: {`${user.user_id}`}</code>
        </div>
        <div className="f3 mt2 fw2">
          <code>Role: {`${user.user_role_name}`}</code>
        </div>
        <div className="f3 mt2 fw2">
          <code>Email: {`${user.user_email}`}</code>
        </div>
        <div className="f3 mt2 fw2">
          <code>Phone: {`${user.user_phone}`}</code>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
