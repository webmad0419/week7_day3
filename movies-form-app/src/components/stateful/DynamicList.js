import React, { Component } from 'react';

import Card from './ImprovedCard'
import AddMovie from './AddMovie'

class DynamicMoviesList extends Component {

    constructor() {

        super()

        this.state = {
            movies: [
                { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
                { title: "Star Wars", director: "Rian Johnson", hasOscars: true, IMDbRating: 8.7 },
                { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 },
                { title: "Campamento Flappy", director: "Almodóvar", hasOscars: true, IMDbRating: 9.9 }
            ]
        }
    }


    deleteMovie = idx => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.splice(idx, 1)
        this.setState({
            movies: moviesCopy
        })
    }


    addMovieHandler = movie => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.push(movie)
        this.setState({
            movies: moviesCopy
        })
    }


    render() {

        return (
            <div>

                <ul className="movies-list row">
                    {
                        this.state.movies.map((movie, idx) => <Card key={idx} {...movie} removeMovieFromState={() => this.deleteMovie(idx)} />)
                    }
                </ul>

                <hr></hr>

                <h2>Nueva película</h2>
                <AddMovie addTheMovie={this.addMovieHandler} />
            </div>
        )
    }
}

export default DynamicMoviesList