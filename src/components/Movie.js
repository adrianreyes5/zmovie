import React, { Component } from 'react';

class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: []
        }
    }

    componentDidMount() {
        fetch('https://yts.lt/api/v2/movie_details.json?movie_id=' + this.props.match.params.movie_id)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.data.movie)
                    this.setState({ movie: result.data.movie })
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    render() {
        const movies = this.state.movie;
        const movieList = movies.lenght ?
        (
            movies.map(movie => {
                return (
                    <div>
                        {movie.title}
                    </div>
                )
            })
        )
        :
        (
            <div>
                No movie Yet
            </div>
        )

        return (
            <div>
                {movieList}
            </div>
        )
    }
}

export default Movie;
