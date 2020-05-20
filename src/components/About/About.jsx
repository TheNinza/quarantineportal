import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex flex-column justify-center items-center pa2">
        <div className="intro pa2 mv2 mh2 shadow-3 br3 w-90">
          <div className="fw6 f2 tc"> About The Project</div>
          <div className="f4 mt3 shadow-3 br3 pa3">
            This project demonstrates a Quarantine Center Management Portal for
            covid-19 patients. You can login as a user having one of the three
            roles given on the homepage. The Project uses mysql database for all
            the data storage and NodeJS for the backend and React for the
            frontend. For more information, kindly refer to the project report.
          </div>
        </div>
        <div className="contributers pa2 mt2 mh2 shadow-3 br3 w-90">
          <div className="fw6 f2 tc"> Project Contributers </div>
          <div className="flex justify-center items-center">
            <div className="pa2 mt2 mh2 shadow-3 br3 grow">
              <div className="f3 fw6">Nikhil Kumar Gupta</div>
              <div className="f4 fw4">2019BCS-036</div>
              <div className="f5 fw4">
                Created and deployed this website (full-stack).
              </div>
            </div>
            <div className="pa2 mt2 mh2 shadow-3 br3 grow">
              <div className="f3 fw6">Aditi Singh</div>
              <div className="f4 fw4">2019BCS-001</div>
              <div className="f5 fw4">
                Created the database, ER Diagram and normalised the tables.
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="pa2 mt2 mh2 shadow-3 br3 grow">
              <div className="f3 fw6">Harshit Singh</div>
              <div className="f4 fw4">2019BCS-025</div>
              <div className="f5 fw4">
                Written all the queries for the functioning of database system.
              </div>
            </div>
            <div className="pa2 mt2 mh2 shadow-3 br3 grow">
              <div className="f3 fw6">Yahspal Parmar</div>
              <div className="f4 fw4">2019BCS-073</div>
              <div className="f5 fw4">
                Created and formated the project report and tested the website
                for bugs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
