import React, { Component } from 'react'
import cookie from './assets/cookie.png';
import './style.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      phrase: ''
    };

    this.breakCookie = this.breakCookie.bind(this);

    this.phrases = [
      'Siga os bons e aprenda com eles.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'];
  }

  breakCookie(){
    let state = this.state;
    let randomNumber = Math.floor(Math.random() * this.phrases.length);

    state.phrase = '" ' + this.phrases[randomNumber] + ' "';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img className="img" src={cookie}></img>
        <Button btnaction={this.breakCookie}/>
        <h2 className="phraseText">{this.state.phrase}</h2>
      </div>
    )
  }
}

class Button extends Component{
  render(){
    return(
        <button onClick={this.props.btnaction}> Break Fortune Cookie </button>
    );
  }
}

export default App;
