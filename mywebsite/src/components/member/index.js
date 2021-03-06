import React, { Component } from "react";

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      status: false,
    };

    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    const name = prompt("What's your name?");
    this.setState({ name: name, status: true });
  }

  render() {
    return (
      <div>
        <p>Welcome {this.state.name}</p>
        <button onClick={this.signIn}>Sign In</button>

        {this.state.status ? (
          <button
            onClick={() => this.setState({ name: "visitor", status: false })}
          >
            Logout
          </button>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Member;
