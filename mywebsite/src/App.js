import React, { Component } from "react";
// import "./App.css";

class Students extends Component {
  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <h3>Age: {this.props.age}</h3>
        <AcademicData RA={this.props.ra} COURSE={this.props.studyArea} />
        <hr></hr>
      </div>
    );
  }
}

class AcademicData extends Component {
  render() {
    return (
      <div>
        <u>Academic Data</u>
        <ul>
          <li>RA: {this.props.RA}</li>
          <li>Course: {this.props.COURSE}</li>
        </ul>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>House Students</h1>
      <Students
        name="Salvador"
        age="20"
        ra="769852"
        studyArea="Computer Engineering"
      />
      <Students
        name="Arthur"
        age="22"
        ra="769889"
        studyArea="Mechatronics Engineering"
      />
      <Students
        name="Caio"
        age="25"
        ra="769811"
        studyArea="Civil Engineering"
      />
    </div>
  );
}

export default App;
