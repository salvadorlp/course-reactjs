import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };

        this.loadMovies = this.loadMovies.bind(this);
    }

    componentDidMount(){
        this.loadMovies();
    }

    loadMovies(){
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
        .then( (r) => r.json() )
        .then( (json) => {
            console.log(json);
            this.setState({movies: json});
        })
    }

    render() {
        return (
            <div className="container">
                <div className="movie-list">
                    { this.state.movies.map( (movie) => {
                        return(
                            <article key={movie.id} className="movie">
                                <h2 className="title">{movie.nome}</h2>
                                <img className="img" src={movie.foto} alt="movie"></img>
                                <NavLink className="btn"to={`/movie/${movie.id}`}>Read More</NavLink>
                            </article>
                        )
                    }) }
                </div>
            </div>
        );
    }
}

export default Home;