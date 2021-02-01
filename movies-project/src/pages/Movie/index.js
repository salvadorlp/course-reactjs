import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './movie.css'

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        };

        this.movieInfo = this.movieInfo.bind(this);
    }

    componentDidMount(){
        this.movieInfo();
    }

    movieInfo(){
        const { id } = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(url)
        .then( (r) => r.json() )
        .then( (json) => {
            this.setState({movie: json});
        })
    }

    render() {
        return (
            <div className="containerW">
                <article key={this.state.movie.id} className="movieW">
                    <h2 className="title">{this.state.movie.nome}</h2>
                    <img className="imgW" src={this.state.movie.foto} alt="movie-photo"></img>
                    {this.state.movie.lenght !== 0 && <h3>Sinopse</h3>}
                    <p className="synopsis">{this.state.movie.sinopse}</p>
                </article>
            </div>
        );
    }
}

export default Movie;