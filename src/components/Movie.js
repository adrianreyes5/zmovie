import React, { Component } from 'react';
import MovieService from '../utils/MovieService';
import Image1 from '../img/1.jpg';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 350);
        let that = this;
        const movie_id = this.props.match.params.movie_id;
        MovieService.getMovieOMDB(movie_id).then(function (movie) {
            console.log(movie);
            that.setState({
                movie: movie
            })
        })
    }

    render() {
        let title = this.state.movie.title;
        let poster = this.state.movie.Poster;
        let director = this.state.movie.Director;
        let actors = this.state.movie.Actors;
        let genres = this.state.movie.Genre;
        let released = this.state.movie.Released;
        let languague = this.state.movie.Language;
        let plot = this.state.movie.Plot;

        return (
            <div className="zmoto-inner-page">
                <div className="zmovo-blog-details pt-50">
                    <div className="container">
                        <div className="zmovo-blog-contents">
                            <div className="row">
                                <div className="col-12">
                                    <div className="zmovo-product-with-sedbar">
                                        <div className="row">
                                            {/* <!-- Left --> */}
                                            <div className="col-lg-3">
                                                <div className="zmovo-blog-dec-contents">
                                                    <div className="items">
                                                        <div className="item">
                                                            <img src={poster} alt="" style={{ height: "400px", width: "720px" }} />
                                                            <div className="zmovo-slide-ply-btn">
                                                                <a href="/" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" className="video-popup"><img src="image/play-button.png" alt="" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Left --> */}
                                            {/* <!-- Right --> */}
                                            <div className="col-lg-9">
                                                <div className="zmovo-blog-dec-contents">
                                                    <div className="zmovo-blog-dec-content pt-30">
                                                        <div className="movie-info">
                                                            <a href="/">{title}</a>
                                                            <div className="zmovo-slide-cat">
                                                                <div className="zmovo-trailor-meta-info">
                                                                    <div className="dec-review-dec">
                                                                        <div className="ratting">
                                                                            <span className="fa fa-star"></span>
                                                                            <span className="fa fa-star"></span>
                                                                            <span className="fa fa-star"></span>
                                                                            <span className="fa fa-star"></span>
                                                                            <span className="fa fa-star"></span>
                                                                            <a href="/">6/5 ratitng</a>
                                                                        </div>
                                                                        <div className="dec-review-meta">
                                                                            <ul>
                                                                                <li><span>Director <label>:</label></span><a href="/">{director}</a></li>
                                                                                <li><span>Actors <label>:</label></span><a href="/">{actors}</a></li>
                                                                                <li><span>Genre <label>:</label></span><a href="/">{genres}</a></li>
                                                                                <li><span>releace <label>:</label></span><a href="/">{released}</a></li>
                                                                                <li><span>languase <label>:</label></span><a href="/">{languague}</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="trailer">
                                                            
                                                        </div>
                                                        <div className="movie-story">
                                                            <h2>Movie Story</h2>
                                                            <div className="zmovo-blog-d-p">
                                                                <p>{plot}</p>
                                                            </div>
                                                            <div className="social-links">
                                                                <strong>Share :</strong>
                                                                <a href="/" className="socila-fb"><span className="fab fa-facebook"></span></a>
                                                                <a href="/" className="socila-tw"><span className="fab fa-twitter"></span></a>
                                                                <a href="/" className="socila-sk"><span className="fab fa-skype"></span></a>
                                                                <a href="/" className="socila-pin"><span className="fab fa-pinterest"></span></a>
                                                                <a href="/" className="socila-ins"><span className="fab fa-instagram"></span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="comment-area pt-50">
                                                        {/* <h2 className="title">comment's(10)</h2>
                                                    <ol className="comment-list">
                                                        <li className="single-comment">
                                                            <div className="comment-body">
                                                                <div className="comment-img">
                                                                    <img src="image/author/1.png" alt="" />
                                                                </div>
                                                                <div className="comment-content">
                                                                    <div className="comment-header">
                                                                        <h3 className="comment-title">Kosmi Kotalia</h3>
                                                                    </div>
                                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                                    <div className="blog-details-reply-box">
                                                                        <div className="comment-time">30 minits ago</div>
                                                                        <div className="comment-reply">
                                                                            <a href="/" className="Repost">Repost</a>
                                                                            <a href="/" className="reply">reply</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                    <ol className="comment-list-reply">
                                                        <li className="single-comment">
                                                            <div className="comment-body">
                                                                <div className="comment-img">
                                                                    <img src="image/author/2.png" alt="" />
                                                                </div>
                                                                <div className="comment-content">
                                                                    <div className="comment-header">
                                                                        <h3 className="comment-title">Kosmi Kotalia</h3>
                                                                    </div>
                                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                                                    <div className="blog-details-reply-box">
                                                                        <div className="comment-time">30 minits ago</div>
                                                                        <div className="comment-reply">
                                                                            <a href="/" className="Repost">Repost</a>
                                                                            <a href="/" className="reply">reply</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                    <ol className="comment-list">
                                                        <li className="single-comment">
                                                            <div className="comment-body">
                                                                <div className="comment-img">
                                                                    <img src="image/author/3.png" alt="" />
                                                                </div>
                                                                <div className="comment-content">
                                                                    <div className="comment-header">
                                                                        <h3 className="comment-title">Kosmi Kotalia</h3>
                                                                    </div>
                                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                                    <div className="blog-details-reply-box">
                                                                        <div className="comment-time">30 minits ago</div>
                                                                        <div className="comment-reply">
                                                                            <a href="/" className="Repost">Repost</a>
                                                                            <a href="/" className="reply">reply</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol> */}
                                                        {/* <!-- COMMENT RESPOND --> */}
                                                        {/* <div className="comment-respond">
                                                        <h2 className="title">Leave a Comment</h2>
                                                        <div className="respons-box">
                                                            <div className="form">
                                                                <form>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label for="name">Nick Name :</label>
                                                                                <input id="name" className="form-control form-mane" required="" type="text" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label for="email">E-mail :</label>
                                                                                <input id="email" className="form-control form-email" required="" type="email" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label for="message">Write a Message :</label>
                                                                        <textarea id="message" className="form-control form-comment" cols="10" rows="8" name="comment" required=""></textarea>
                                                                    </div>
                                                                    <div className="buttons">
                                                                        <a href="/" className="btn btn-buttons">Submit</a>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                        {/* <!-- END COMMENT RESPOND --> */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Right --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movie;
