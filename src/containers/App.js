import React, { Component } from "react";
import "./App.css";
import Nav from "../components/Nav/Nav";
import About from "../components/About/About";
import Home from "./home";
import UserProfile from "../components/UserProfile/UserProfile";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        area: 300,
      },
    },
  },
};

const initialState = {
  user: {},
  isSignedIn: false,
  route: "home",
  profileRoute: "userInfo",
};

class App extends Component {
  state = initialState;

  loadUser = (data) => {
    this.setState({
      user: data,
    });
  };

  onRouteChange = (route) => {
    if (route === "home") {
      this.setState(initialState);
    } else if (route === "userProfile") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route });
  };

  onProfileRouteChange = (profileRoute) => {
    this.setState({ profileRoute });
  };

  render() {
    const { isSignedIn, user, route, profileRoute } = this.state;
    return (
      <div>
        <Particles className="particles" params={particlesOptions} />
        <Nav isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />

        {route === "home" ? (
          <Home onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : route === "about" ? (
          <About />
        ) : (
          <UserProfile
            user={user}
            profileRoute={profileRoute}
            onProfileRouteChange={this.onProfileRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
