import React, { Component } from "react";

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };

    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    const name = prompt("What's your name?");
    this.setState({ name: name });
  }

  render() {
    return (
      <div>
        <p>Welcome {this.state.name}</p>
        <button onClick={this.signIn}>Sign In</button>
        <button onClick={() => this.setState({ name: "visitor" })}>
          Logout
        </button>
      </div>
    );
  }
}

export default Member;
