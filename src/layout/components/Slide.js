import React from 'react';
import ImageSlide from '../../img/1.jpg';
import Playbutton from '../../img/play-button.png';

export default function Slide() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ImageSlide} className="d-block w-100" alt="1..." />
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
                </div>
                <a className="carousel-control-prev" href="#" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}