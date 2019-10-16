import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {

    let movie_list = props.movie_list;
    let popular_movies = movie_list.map((movies) => {
        return (
            <div key={movies.movie.ids.imdb} className="col-2">
                <Link to={"/movie/" + movies.movie.ids.imdb} >
                    <div className="item">
                        <div className="zmovo-video-item-box">
                            <div className="zmovo-video-box-inner">
                                <div className="zmovo-v-box-img gradient  rounded">
                                    <img src={movies.poster_img} alt="" style={{ height: "250px" }} className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                <div className="">
                    <a href="/">{movies.movie.title}</a>
                    <div className="zmovo-v-tag c2">
                        <span>{movies.movie.year}</span>
                    </div>
                    <div className="movies-time"><i className="fa fa-clock c1"></i> <span>{movies.runtime} Min</span></div>
                    <div className="like-icon">
                        <a href="/"><span className="fa fa-heart-o"></span></a>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="zmovo-arrivals-items">
            <div className="zmovo-hadidng pt-50 pb-30">
                <h2><span className="text-uppercase">Trending Movies</span></h2>
            </div>
            <div className="row">
                {popular_movies}
            </div>
            <div className="button pt-50 text-center">
                <a href="/" className="btn btn-radus">view all <span className="fa fa-angle-right"></span></a>
            </div>
        </div>
    )
}