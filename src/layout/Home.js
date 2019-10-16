import React from 'react';
import MovieList from '../components/MovieList'
import ShowList from '../components/ShowList';

export default (props) => {
    return (
        <div>
            <div className="zmovo-new-arrivals arow-icon">
                <div className="container">
                    <MovieList movie_list={props.popular_movies} />
                    <ShowList show_list={props.popular_shows} />
                </div >
            </div >
        </div >
    )
}

