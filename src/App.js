import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieService from './utils/MovieService';
import ShowService from './utils/ShowService';
import Header from './layout/Header';
import Slide from './layout/Slide';
import Home from './layout/Home';
import Movie from './components/Movie';
import Show from './components/Show';
import Footer from './layout/Footer';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      popular_movies: [],
      popular_shows: []
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let that = this;
    // MovieService.getMovieTrack().then(function (list) {
    //   let aux = list;
    //   list.map((movies, i) => {
    //     MovieService.getMovieDb(movies.movie.ids.tmdb).then(function (movie) {
    //       aux[i].poster_img = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    //       aux[i].genres = movie.genres;
    //       aux[i].overview = movie.overview;
    //       aux[i].popularity = movie.popularity;
    //       aux[i].runtime = movie.runtime;
    //       // console.log(movie);
    //       that.setState({
    //         popular_movies: aux
    //       })
    //     })
    //   })
    // })
    MovieService.getMovieTrack().then(function (list) {
      let aux = list;
      list.map((movies,i) => {
        MovieService.getMovieOMDB(movies.movie.ids.imdb).then(function (movie) {
          aux[i].poster_img = movie.Poster;
          aux[i].genres = movie.Genre;
          aux[i].plot = movie.Plot;
          aux[i].popularity = movie.imdbRating;
          aux[i].runtime = movie.Runtime;
          aux[i].released = movie.Released;
          aux[i].director = movie.Director;
          aux[i].actors = movie.Actors;
          // console.log(aux);
          that.setState({
            popular_movies: aux
          })
        })
      })
    })
    ShowService.getShowTrack().then(function (list_show) {
      let aux_show = list_show;
      list_show.map((shows, i) => {
        ShowService.getShowDb(shows.show.ids.tmdb).then(function (show) {
          // console.log(aux_show);
          aux_show[i].poster_img = "https://image.tmdb.org/t/p/w500" + show.poster_path;
          aux_show[i].episodie_run_time = show.episodie_run_time;
          aux_show[i].first_air_date = show.first_air_date;
          aux_show[i].first_air_date = show.first_air_date;
          aux_show[i].genres = show.genres;
          aux_show[i].genres = show.genres;
          aux_show[i].genres = show.genres;
          that.setState({
            popular_shows: aux_show
          })
        })
      })
    })
  }
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="zmovo-main dark-bg">
          <Header />
          <Slide popular_movies={this.state.popular_movies} />
          <Switch >
            <Route
              exact
              path="/"
              render={() => <Home
                popular_movies={this.state.popular_movies}
                popular_shows={this.state.popular_shows}
              />}
            />
            <Route exact path="/movie/:movie_id" render={props => <Movie {...props} />} />
            <Route exact path="/show/:show_id" render={props => <Show {...props} />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }

}

