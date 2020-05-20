import React, { Component } from "react";

class CovidApi extends Component {
  state = {
    confirmed: -1,
    recovered: -1,
    deaths: -1,
  };

  componentDidMount() {
    fetch("https://api.covid19india.org/data.json")
      .then((response) => response.json())
      .then((data) => {
        const element = data.statewise[0];
        this.setState({
          confirmed: element.confirmed,
          recovered: element.recovered,
          deaths: element.deaths,
        });
      });
  }

  render() {
    const api = (
      <div className="pa2 f3 fw4">
        <div className="shadow-3 mt3 br3 pa2 pointer grow hover-bg-gold">
          Confirmed:{` ${this.state.confirmed}`}
        </div>
        <div className="shadow-3 mt3 br3 pa2 pointer grow hover-bg-green">
          Recovered:{` ${this.state.recovered}`}
        </div>
        <div className="shadow-3 mt3 br3 pa2 pointer grow hover-bg-red">
          Deaths:{` ${this.state.deaths}`}
        </div>
      </div>
    );

    return (
      <div className="flex flex-column justify-center items-center shadow-3 pa2 br3">
        <div className="f3 underline shadow-3 br3 pa2 pointer grow">
          India's Current Covid-19 Updates
        </div>
        <div>
          {this.state.confirmed === -1 ? (
            <div className="tc o-30">
              <h1>Loading...</h1>
              <div>Connect to the internet for the results</div>
            </div>
          ) : (
            api
          )}
        </div>
      </div>
    );
  }
}

export default CovidApi;
