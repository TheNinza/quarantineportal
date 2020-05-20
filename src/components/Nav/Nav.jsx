import React from "react";

const Nav = ({ isSignedIn, onRouteChange }) => {
  return (
    <nav className="dt w-100 border-box pa3 ph5-ns shadow-5 nav-bar">
      <div className="dtc v-mid mid-gray w-50 f2 white">
        Quarantine Center Management Tool
      </div>
      <div className="dtc v-mid w-75 tr">
        <div
          onClick={() => onRouteChange("home")}
          className="grow link dim light-gray f6 f5-ns dib mr3 mr4-ns pointer"
        >
          {isSignedIn ? "Log Out" : ""}
        </div>
        <div
          onClick={() => onRouteChange("about")}
          className="grow link dim light-gray f6 f5-ns dib mr3 mr4-ns pointer"
        >
          {!isSignedIn ? "About" : ""}
        </div>
        <div
          onClick={() => onRouteChange("home")}
          className="grow link dim light-gray f6 f5-ns dib mr3 mr4-ns pointer"
        >
          {!isSignedIn ? "Home" : ""}
        </div>
        {/* <div className="grow link dim light-gray f6 f5-ns dib mr3 mr4-ns pointer">
          Quarantine Centers
        </div> */}
      </div>
    </nav>
  );
};

export default Nav;
