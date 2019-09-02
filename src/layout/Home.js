import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
    let movie_list = props.popular_movies;
    let movies = movie_list.map((movie) => {
        return (
            <div key={movie.movie.ids.imdb} className="col-2">
                <Link to={"/movie/" + movie.movie.ids.imdb} >
                    <div className="item">
                        <div className="zmovo-video-item-box">
                            <div className="zmovo-video-box-inner">
                                <div className="zmovo-v-box-img gradient  rounded">
                                    <img src={movie.poster_img} alt="" style={{ height: "250px" }} className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                <div className="">
                    <a href="/">{movie.movie.title}</a>
                    <div className="zmovo-v-tag c2">
                        <span>{movie.movie.year}</span>
                    </div>
                    <div className="movies-time"><i className="fa fa-clock c1"></i> <span>{movie.runtime} Min</span></div>
                    <div className="like-icon">
                        <a href="/"><span className="fa fa-heart-o"></span></a>
                    </div>
                </div>
            </div>
        )
    })

    let show_list = props.popular_shows;
    let shows = show_list.map(show => {
        return (
            <div key={show.show.ids.tmdb} className="col-2">
                {/* <!-- ITEM --> */}
                <div className="item">
                    <div className="zmovo-video-item-box">
                        <div className="zmovo-video-box-inner">
                            <div className="zmovo-v-box-img gradient  rounded">
                                <img src={show.poster_img} alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <a href="/">{show.show.title}</a>
                    <div className="zmovo-v-tag c2">
                        <span>{show.show.year}</span>
                    </div>
                    <div className="movies-time"><span>{show.first_air_date}</span></div>
                    <div className="like-icon">
                        <a href="/"><span className="fa fa-heart-o"></span></a>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="zmovo-new-arrivals arow-icon">
                <div className="container">
                    <div className="zmovo-arrivals-items">
                        <div className="zmovo-hadidng pt-50 pb-30">
                            <h2><span className="text-uppercase">Trending Movies</span></h2>
                        </div>
                        <div className="row">
                            {movies}
                        </div>
                        <div className="button pt-50 text-center">
                            <a href="/" className="btn btn-radus">view all <span className="fa fa-angle-right"></span></a>
                        </div>
                    </div>
                    <div className="zmovo-arrivals-items">
                        <div className="zmovo-hadidng pt-50 pb-30">
                            <h2><span className="text-uppercase">Trending Shows</span></h2>
                        </div>
                        <div className="row">
                            {shows}
                        </div>
                        <div className="button pt-50 text-center">
                            <a href="/" className="btn btn-radus">view all <span className="fa fa-angle-right"></span></a>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

