import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieService from './utils/MovieService';
import ShowService from './utils/ShowService';
import Header from './layout/Header';
import Slide from './layout/Slide';
import Home from './layout/Home';
import Movie from './components/Movie';
import Footer from './layout/Footer';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    }
  }

  componentDidMount() {
    let that = this;
    MovieService.getMovieTrack().then(function (list) {
      let aux = list;
      list.map((movies, i) => {
        MovieService.getMovieDb(movies.movie.ids.tmdb).then(function (movie) {
          aux[i].img = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
          aux[i].genres = movie.genres;
          aux[i].overview = movie.overview;
          aux[i].popularity = movie.popularity;
          aux[i].runtime = movie.runtime;
          // console.log(movie);
          that.setState({
            movieList: aux
          })
        })
      })
    })
    // ShowService.getShowTrack().then(function (list){
    //   let aux = list;
    //   console.log(list);
    //   list.map((shows, i) => {
    //     ShowService.getShowDb(shows.show.ids.tmdb).then(function (show) {

    //     })
    //   })

    // })
  }
  render() {
    return (
      <Router>
        <div className="zmovo-main dark-bg">
          <Header />
          <Slide />
          <Switch>
            <Route exact path="/" render={() => <Home movieList={this.state.movieList} />} />
            <Route exact path="/movie/:movie_id" component={Movie} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }

}

