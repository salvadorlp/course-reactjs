import React, { Component } from "react";

// StateLess x StateFull
// in the majority of cases, Statefull components will be represented by classes
//
// import React, { Component } from "react";
//
// class App extends Component {
//   render() {
//     return(
//     <h1>Olá ReactJS</h1>
//     );
//   }
// }
//
// export default App;
//
// In this component you must use render() method because it is responsible for show and re-show informations on the screen
//
// The same component can be coded like this:
// import React from "react";

// const App = () => {
//   return(
//     <h1>Olá ReactJS</h1>
//   );
// };

// export default App;

class App extends Component {
  constructor(props) {
    super(props); // use all resources from this component
    this.state = {
      name: "Matheus",
      count: 0,
    };

    this.increase = this.increase.bind(this); // connecting increase function to this class
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    let state = this.state;
    state.count += 1;

    this.setState(state);
  }

  decrease() {
    let state = this.state;
    if (state.count === 0) {
      alert("Can't reduce below zero!");
      return;
    }
    state.count -= 1;

    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h1>
          <button onClick={this.decrease}>-</button>
          {this.state.count}
          <button onClick={this.increase}>+</button>
        </h1>
      </div>
    );
  }
}

export default App;
