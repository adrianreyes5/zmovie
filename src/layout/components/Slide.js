import React from 'react';
import ImageSlide from '../../img/1.jpg';
// import 'react-owl-carousel2/style.css';

export default function Slide() {
    return (
        // <div className="zmovo-slider-area">
        //     <div className="items" id="slider">
        //         <div className="item">
        //             <div className="zmovo-slider-contents">
        //                 <img src={ImageSlide} alt="imageSlide" />
        //                 <div className="zmovo-slide-content">
        //                     <div className="container">
        //                         <div className="zmovo-slider-contetn">
        //                             <div className="zmovo-slider-premium-tag">
        //                                 <span className="c2-bg">premium</span>
        //                                 <label>Period Adventure</label>
        //                             </div>
        //                             <a href="#">Action Hindi Rebort Story</a>
        //                             <div className="zmovo-slide-cat">
        //                                 <ul>
        //                                     <li><span>Category : </span>English Movies - 2019</li>
        //                                     <li><span>Genre : </span>Action, Drama </li>
        //                                 </ul>
        //                             </div>
        //                             <div className="zmovo-slide-ply-btn">
        //                                 <a href="#" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" className="video-popup"><img src="image/play-button.png" alt="" />Play Trailer</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="item">
        //             <div className="zmovo-slider-contents">
        //                 <img src={ImageSlide} alt="" />

        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-interval="5000">
                    <img src={ImageSlide} class="d-block w-100" alt="1..." />
                    <div className="zmovo-slide-content ml-3">
                        <div className="container">
                            <div className="zmovo-slider-contetn">
                                <div className="zmovo-slider-premium-tag">
                                    <span className="c2-bg">premium</span>
                                    <label>Period Adventure</label>
                                </div>
                                <a href="#">Rebort Action Story 1</a>
                                <div className="zmovo-slide-cat">
                                    <ul>
                                        <li><span>Category : </span>English Movies - 2019</li>
                                        <li><span>Genre : </span>Action, Drama </li>
                                    </ul>
                                </div>
                                <div className="zmovo-slide-ply-btn">
                                    <a href="#" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" className="video-popup"><img src="image/play-button.png" alt="" />Play Trailer</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="carousel-item" data-interval="5000">
                    <img src={ImageSlide} class="d-block w-100" alt=".2.." />
                    <div className="zmovo-slide-content">
                        <div className="container">
                            <div className="zmovo-slider-contetn">
                                <div className="zmovo-slider-premium-tag">
                                    <span className="c2-bg">premium</span>
                                    <label>Period Adventure</label>
                                </div>
                                <a href="#">Rebort Action Story 2</a>
                                <div className="zmovo-slide-cat">
                                    <ul>
                                        <li><span>Category : </span>English Movies - 2019</li>
                                        <li><span>Genre : </span>Action, Drama </li>
                                    </ul>
                                </div>
                                <div className="zmovo-slide-ply-btn">
                                    <a href="#" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" className="video-popup"><img src="image/play-button.png" alt="" />Play Trailer</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="carousel-item" data-interval="5000">
                    <img src={ImageSlide} class="d-block w-100" alt="..3." />
                    <div className="zmovo-slide-content">
                        <div className="container">
                            <div className="zmovo-slider-contetn">
                                <div className="zmovo-slider-premium-tag">
                                    <span className="c2-bg">premium</span>
                                    <label>Period Adventure</label>
                                </div>
                                <a href="#">Rebort Action Story 3</a>
                                <div className="zmovo-slide-cat">
                                    <ul>
                                        <li><span>Category : </span>English Movies - 2019</li>
                                        <li><span>Genre : </span>Action, Drama </li>
                                    </ul>
                                </div>
                                <div className="zmovo-slide-ply-btn">
                                    <a href="#" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" className="video-popup"><img src="image/play-button.png" alt="" />Play Trailer</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}