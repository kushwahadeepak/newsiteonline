import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    <h2>Company</h2>
                                    <ul>
                                        <li>
                                            <NavLink to="/">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">About</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <h2>Supports</h2>
                                    <ul>
                                    <li>
                                            <NavLink to="/">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">About</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <h2>Services</h2>
                                    <ul>
                                    <li>
                                            <NavLink to="/">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">About</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <h2>Follow Us</h2>
                                    <div className="row">
                                        <div className="col-3 mx-auto">
                                            <NavLink to="/">
                                                <i className="fab fa-instagram fontawesome-style"></i>
                                            </NavLink>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <NavLink to="/">
                                                <i className="fab fa-facebook fontawesome-style"></i>
                                            </NavLink>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <NavLink NavLink to="/">
                                                <i className="fab fa-youtube fontawesome-style"></i>
                                            </NavLink>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <NavLink to="/">
                                                <i className="fab fa-twitter fontawesome-style"></i>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-5">
                                <p className="main-hero-para text-center w-100">
                                    copyright @ 2022 . All Language Online.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
