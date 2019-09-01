import React from 'react';
import ImageSlide1 from '../img/1.jpg';
import ImageSlide2 from '../img/avengers_endgame.jpg';
import ImageSlide3 from '../img/lion_king.jpeg';
import Playbutton from '../img/play-button.png';

export default function Slide() {
    return (
        <div>
            <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="4000">
                        <img src={ImageSlide1} className="d-block w-100" alt="1..." />
                        <div className="zmovo-slide-content ml-3">
                            <div className="container">
                                <div className="zmovo-slider-contetn">
                                    <div className="zmovo-slider-premium-tag">
                                        <span className="c2-bg">premium</span>
                                        <label>Period Adventure</label>
                                    </div>
                                    <a href="/">IT: Chapter Two</a>
                                    <div className="zmovo-slide-cat">
                                        <ul>
                                            <li><span>Category : </span>English Movies - 2019</li>
                                            <li><span>Genre : </span>Terror</li>
                                        </ul>
                                    </div>
                                    <div className="zmovo-slide-ply-btn">
                                        <a href="/" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" className="video-popup"><img src={Playbutton} alt="" />Play Trailer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="4000">
                        <img src={ImageSlide2} className="d-block w-100" height="200px" alt="1..." />
                        <div className="zmovo-slide-content ml-3">
                            <div className="container">
                                <div className="zmovo-slider-contetn">
                                    <div className="zmovo-slider-premium-tag">
                                        <span className="c2-bg">premium</span>
                                        <label>Period Adventure</label>
                                    </div>
                                    <a href="/">Avengers End Game</a>
                                    <div className="zmovo-slide-cat">
                                        <ul>
                                            <li><span>Category : </span>English Movies - 2019</li>
                                            <li><span>Genre : </span>Action</li>
                                        </ul>
                                    </div>
                                    <div className="zmovo-slide-ply-btn">
                                        <a href="/" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" className="video-popup"><img src={Playbutton} alt="" />Play Trailer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="4000">
                        <img src={ImageSlide3} className="d-block w-100" height="200px" alt="1..." />
                        <div className="zmovo-slide-content ml-3">
                            <div className="container">
                                <div className="zmovo-slider-contetn">
                                    <div className="zmovo-slider-premium-tag">
                                        <span className="c2-bg">premium</span>
                                        <label>Period Adventure</label>
                                    </div>
                                    <a href="/">The Lion King</a>
                                    <div className="zmovo-slide-cat">
                                        <ul>
                                            <li><span>Category : </span>English Movies - 2019</li>
                                            <li><span>Genre : </span>Aventure</li>
                                        </ul>
                                    </div>
                                    <div className="zmovo-slide-ply-btn">
                                        <a href="/" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" className="video-popup"><img src={Playbutton} alt="" />Play Trailer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}