import React, { Component } from 'react'
import './style.css'

// https://sujeitoprogramador.com/rn-api/?api=posts

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
    fetch(url)
    .then((r) => r.json())
    .then((json) => {
      let state = this.state;
      state.posts = json;
      console.log(state.posts)
      this.setState(state);
    })
  }

  render(){
    return(
      <div className="container">
        <header className ="header">
          React Health Blog
        </header>
        {this.state.posts.map( (post) => {
          return (
            <article className="post" key={post.id}>
              <h1 className="title">{post.titulo}</h1>
              <p className="category">Categoria: {post.categoria}</p>
              <img className="img" src={post.capa}></img>
              <p className="subtitulo">{post.subtitulo}</p>
              <a className="btn" href='#'>Acessar</a>
            </article>
          )
        })}
      </div>
    );
  }
}

export default App;