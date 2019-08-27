import React, { Component } from 'react';
import Header from './layout/components/Header';
import Slide from './layout/components/Slide';
import CenterPanel from './layout/components/CenterPanel';

export default class App extends Component {

  state = {
    movieList: []
  }

   componentDidMount() {
    fetch('https://yts.lt/api/v2/list_movies.json?order_by=desc&limit=50')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.data.movies);
          this.setState({
            movieList: result.data.movies
          })
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render() {

    // const movies = this.state.movieList.map(movie => {
    //   return (
    //     <div className="col-3" key={movie.id}>
    //       <div className="card">
    //         <div className="card-body">
    //           {movie.title}

    //         </div>
    //       </div>
    //     </div>
    //   );
    // });

    return (
      <div className="zmovo-main dark-bg">
        <Header />
        <Slide  />
        <CenterPanel movieList={this.state.movieList} />
      </div>
    );
  }

}

