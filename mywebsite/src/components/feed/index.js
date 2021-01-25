import React, { Component } from "react";

class Feed extends Component {
  render() {
    return (
      <div key={this.props.id}>
        <h3>{this.props.username}</h3>
        <p>
          Likes: {this.props.likes} / Comments: {this.props.comments}
        </p>
      </div>
    );
  }
}

export default Feed;
