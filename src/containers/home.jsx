import React from "react";
import "tachyons";
import LoginAs from "../components/LoginAs/LoginAs";
import CovidApi from "../components/CovidApi/CovidApi";

const Home = ({ onRouteChange, loadUser }) => {
  return (
    <div className="cf ph3 ph5-ns pv5">
      <div className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="mb3 mt0 lh-title">
          Welcome to the Quarantine Center Management Center
        </h1>
        <div>
          <CovidApi />
        </div>
      </div>
      <div className="fn fl-ns w-50-ns">
        <LoginAs onRouteChange={onRouteChange} loadUser={loadUser} />
      </div>
    </div>
  );
};

export default Home;
