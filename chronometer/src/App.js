import React, { Component } from 'react'
import chronometerIMG from './assets/chronometer.png'
import './style.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      time: 0,
      startPause: 'Start',
      timer: null,
      timerList: []
    };

    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
  }

  start(){
    let state = this.state;

    if(state.timer === null){
      state.timer = setInterval( () => {
        state.time += 0.1;
        this.setState(state);
      }, 100)
      state.startPause = 'Pause';
    }else{
      clearInterval(state.timer);
      state.timer = null;
      state.startPause = 'Start';
      this.setState(state);
    }

  }

  clear(){
    let state = this.state;
    if (state.time !== 0){
      clearInterval(state.timer);
      let lenght = state.timerList.push(state.time);
      state.time = 0;
      state.timer = null;
      state.startPause = 'Start';
      this.setState(state);
    }
  }

  clearHistory(){
    let state = this.state;
    state.timerList = [];
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img className="img" src={chronometerIMG} alt="chronometer"></img>
        <a className="timer">{this.state.time.toFixed(1)}</a>
        <div className="btnArea">
          <button className="btn" onClick={this.start}>{this.state.startPause}</button>
          <button className="btn" onClick={this.clear}>Clear</button>
        </div>
        <div className="listArea">
          <button className="btn" onClick={this.clearHistory}>Clear History</button>
          {this.state.timerList !== null && 
              this.state.timerList.map( (element, index) => {
                return (
                  <PrintList element={element} index={index}/>
                )
              } )
          }
        </div>
      </div>
    );
  }
}

class PrintList extends Component{
  render(){
    return(
      <div key={this.props.index}>
        <p>{this.props.index+1}°: {this.props.element.toFixed(1)} </p>
        <hr/>
      </div>
    );
  }
}

export default App;
