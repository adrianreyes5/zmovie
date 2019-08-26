import React from 'react';
import Logo from '../../img/logo.png';

export default function Header() {
    return (
        <header className="zmovo-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 zmovo-logos">
                        <div className="zmovo-logo">
                            <a href="/"><img src={Logo} alt="" /></a>
                        </div>
                    </div>
                    <div className="col-lg-8 zmovo-menus">
                        <div className="main-menu">
                            <div className="navigation">
                                <div className="menu-container">
                                    <div id="navigation">
                                        <ul>
                                            <li className="active has-sub"><span className="submenu-button"></span><a href="/">Home</a>
                                                <ul>
                                                    <li><a href="/">Home 1</a></li>
                                                    <li><a href="/">Home 2</a></li>
                                                    <li><a href="/">Home 3</a></li>
                                                    <li><a href="/">Home 4</a></li>
                                                    <li><a href="/">Home 5</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/railor.html">Trailor</a></li>
                                            <li><a href="/bout.html">About</a></li>
                                            <li className="has-sub"><span className="submenu-button"></span><a href="/">Product</a>
                                                <ul>
                                                    <li className="has-sub"><span className="submenu-button"></span><a href="/">Grid view</a>
                                                        <ul>
                                                            <li><a href="/">4 column</a></li>
                                                            <li><a href="/">Left Side</a></li>
                                                            <li><a href="/">Right Side</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-sub"><span className="submenu-button"></span><a href="/">List view</a>
                                                        <ul>
                                                            <li><a href="/">one column</a></li>
                                                            <li><a href="/">Left Side</a></li>
                                                            <li><a href="/">Right Side</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/">Single Product</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-sub"><span className="submenu-button"></span><a href="/">Page</a>
                                                <ul>
                                                    <li className="has-sub"><span className="submenu-button"></span><a href="/">Login</a>
                                                        <ul>
                                                            <li><a href="/">Login</a></li>
                                                            <li><a href="/">Register</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-sub"><span className="submenu-button"></span><a href="/">blog</a>
                                                <ul>
                                                    <li className="has-sub"><span className="submenu-button"></span><a href="/">Blog Page</a>
                                                        <ul>
                                                            <li><a href="/">Blog Left</a></li>
                                                            <li><a href="/">Blog Right</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-sub"><span className="submenu-button"></span><a href="/">Blog Single</a>
                                                        <ul>
                                                            <li><a href="/">Blog Single 1</a></li>
                                                            <li><a href="/">Blog Single 2</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="/">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 zmovo-t-right">
                        <div className="zmovo-header-right">
                            <div className="zmovo-top-search">
                                <div className="zmovo-ser-icon" id="clickserch"><span className="fa fa-search"></span></div>
                                <div className="zmovo-hidden-search" id="opensearch">
                                    <input type="text" placeholder="Enter the movie Name" />
                                </div>
                            </div>
                            <div className="zmovo-login">
                                <a href="/" className="btn login-btn"><span className="fa fa-user"></span> Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
