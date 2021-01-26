import React, { Component } from "react";

class Feed extends Component {
  render() {
    return (
      <div key={this.props.id}>
        <h3>{this.props.username}</h3>
        <p>
          {this.props.likes > 1 ? this.props.likes + ' Likes' : this.props.likes + ' Like'} /
          {this.props.comments > 1 ? ' ' + this.props.comments + ' Comments' : this.props.comments + ' Comment'} 
        </p>
        <hr/>
      </div>
    );
  }
}

export default Feed;
