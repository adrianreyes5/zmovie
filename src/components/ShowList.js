import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => {
    let show_list = props.show_list;
    // console.log(show_list);
    let popular_shows = show_list.map(shows => {
        return (
            <div key={shows.show.ids.tmdb} className="col-2">
                {/* <!-- ITEM --> */}
                {/* <Link to={"/show/" + shows.show.ids.imdb} > */}
                    <div className="item">
                        <div className="zmovo-video-item-box">
                            <div className="zmovo-video-box-inner">
                                <div className="zmovo-v-box-img gradient  rounded">
                                    <img src={shows.poster_img} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </Link> */}
                <div className="">
                    <a href="/">{shows.show.title}</a>
                    <div className="zmovo-v-tag c2">
                        <span>{shows.show.year}</span>
                    </div>
                    <div className="movies-time"><span>{shows.first_air_date}</span></div>
                    <div className="like-icon">
                        <a href="/"><span className="fa fa-heart-o"></span></a>
                    </div>
                </div>
            </div >
        )
    })
    return (
        <div>
            <div className="zmovo-arrivals-items">
                <div className="zmovo-hadidng pt-50 pb-30">
                    <h2><span className="text-uppercase">Trending Shows</span></h2>
                </div>
                <div className="row">
                    {popular_shows}
                </div>
                <div className="button pt-50 text-center">
                    <a href="/" className="btn btn-radus">view all <span className="fa fa-angle-right"></span></a>
                </div>
            </div>
        </div>
    )
}