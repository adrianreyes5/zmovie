import React from 'react';

export default function Home(props) {
    let movieList = props.movieList;
    let movies = movieList.map((movie) => {
        return (
            <div key={movie.movie.ids.tmdb} className="col-2">
                {/* <!-- ITEM --> */}
                <div className="item">
                    <div className="zmovo-video-item-box">
                        <div className="zmovo-video-box-inner">
                            <div className="zmovo-v-box-img gradient  rounded">
                                <img src={movie.img} alt="" className="w-100" />

                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <a href="/">{movie.movie.title}</a>
                    <div className="zmovo-v-tag c2">
                        <span>{movie.movie.year}</span>
                    </div>
                    <div className="movies-time"><i className="fa fa-clock c1"></i><span>{movie.runtime} Min</span></div>
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
                            <h2><span className="text-uppercase">Movies</span></h2>
                        </div>
                        <div className="row">
                            {movies}
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

