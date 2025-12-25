// RestaurantCardPage/InfoHeadSec.js
import React, { useState } from 'react';
import { Link } from "react-router-dom";
/* images */
import Col1 from '../assets/col1.avif'
import Col2a from '../assets/col2a.avif'
import Col2b from '../assets/col2b.avif'
import Col3 from '../assets/col3.webp'

/* css file */
import "../Home.css"
/* svg icons */
const OpenBtnIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="14" height="14" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 kyPUnV"><title>info-line</title><path d="M12.26 15.24c-0.48 0.18-0.88 0.34-1.16 0.44-0.275 0.090-0.592 0.142-0.92 0.142-0.035 0-0.070-0.001-0.105-0.002l0.005 0c-0.042 0.003-0.091 0.005-0.141 0.005-0.469 0-0.901-0.16-1.244-0.428l0.004 0.003c-0.307-0.259-0.501-0.643-0.501-1.073 0-0.017 0-0.033 0.001-0.049l-0 0.002c-0.006-0.078-0.010-0.168-0.010-0.26s0.004-0.182 0.011-0.272l-0.001 0.012c0-0.18 0.060-0.38 0.12-0.62l0.6-2.16c0.060-0.2 0.1-0.4 0.14-0.6 0.034-0.149 0.056-0.321 0.060-0.497l0-0.003c0.004-0.030 0.006-0.064 0.006-0.099 0-0.182-0.063-0.35-0.168-0.483l0.001 0.002c-0.152-0.105-0.339-0.167-0.542-0.167-0.042 0-0.083 0.003-0.123 0.008l0.005-0.001c-0.009-0-0.020-0-0.031-0-0.16 0-0.314 0.022-0.461 0.063l0.012-0.003-0.44 0.16 0.24-0.66c0.4-0.16 0.8-0.3 1.16-0.42 0.311-0.101 0.668-0.159 1.039-0.16h0.001c0.011-0 0.024-0 0.036-0 0.489 0 0.938 0.174 1.287 0.463l-0.003-0.003c0.295 0.261 0.48 0.641 0.48 1.065 0 0.012-0 0.025-0 0.037l0-0.002c0 0.1 0 0.26 0 0.5-0.020 0.243-0.062 0.468-0.126 0.684l0.006-0.024-0.62 2.14c-0.043 0.159-0.085 0.362-0.116 0.568l-0.004 0.032c-0.032 0.153-0.054 0.332-0.060 0.515l-0 0.005c-0.003 0.027-0.005 0.058-0.005 0.090 0 0.188 0.070 0.36 0.186 0.491l-0.001-0.001c0.158 0.093 0.348 0.148 0.55 0.148 0.046 0 0.091-0.003 0.135-0.008l-0.005 0.001c0.014 0 0.031 0.001 0.047 0.001 0.161 0 0.317-0.022 0.465-0.064l-0.012 0.003c0.156-0.041 0.289-0.089 0.416-0.147l-0.016 0.007zM12.16 6.48c-0.27 0.249-0.632 0.402-1.030 0.402s-0.76-0.153-1.031-0.403l0.001 0.001c-0.254-0.238-0.413-0.575-0.413-0.95s0.158-0.712 0.412-0.949l0.001-0.001c0.27-0.249 0.632-0.402 1.030-0.402s0.76 0.153 1.031 0.403l-0.001-0.001c0.254 0.238 0.413 0.575 0.413 0.95s-0.158 0.712-0.412 0.949l-0.001 0.001zM10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c0-5.523-4.477-10-10-10v0zM10 18.58c-4.739 0-8.58-3.841-8.58-8.58s3.841-8.58 8.58-8.58c4.739 0 8.58 3.841 8.58 8.58v0c0 4.739-3.841 8.58-8.58 8.58v0z"></path></svg>
const CallIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="#ef4f5f" width="16px" height="16px" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 dckqXv"><title>call</title><path d="M15.24 13.64c-0.26-0.3-0.64-0.48-1.060-0.48s-0.8 0.18-1.060 0.48v0c-0.5 0.5-0.96 0.96-1.48 1.48-0.060 0.080-0.14 0.14-0.24 0.14-0.060 0-0.12-0.020-0.18-0.060v0c-0.3-0.18-0.64-0.32-0.94-0.5-1.44-0.94-2.66-2.060-3.68-3.34l-0.020-0.040c-0.54-0.62-1-1.32-1.36-2.060l-0.020-0.060c-0.020-0.040-0.040-0.1-0.040-0.16 0-0.1 0.040-0.18 0.12-0.24v0c0.5-0.48 0.94-0.94 1.46-1.46 0.32-0.26 0.5-0.64 0.5-1.080s-0.18-0.82-0.5-1.080v0l-1.16-1.16c-0.4-0.4-0.82-0.82-1.2-1.2-0.26-0.3-0.64-0.48-1.060-0.48s-0.8 0.18-1.060 0.48v0c-0.5 0.5-0.96 0.94-1.48 1.48-0.46 0.4-0.74 0.98-0.78 1.62v0c0 0.080 0 0.18 0 0.28 0 0.98 0.2 1.9 0.56 2.74l-0.020-0.040c0.8 2.040 1.88 3.8 3.24 5.34l-0.020-0.020c1.76 2.12 3.96 3.86 6.44 5.080l0.1 0.060c1.060 0.56 2.3 0.94 3.6 1.060h0.040c0.1 0 0.2 0.020 0.32 0.020 0.78 0 1.48-0.34 1.96-0.88v0c0.42-0.48 0.9-0.92 1.36-1.38 0.3-0.26 0.5-0.64 0.5-1.060s-0.2-0.82-0.5-1.080v0c-0.78-0.82-1.58-1.6-2.34-2.4zM14.68 10.26l1.060-0.18c0.12-0.020 0.2-0.12 0.2-0.24 0-0.020 0-0.040 0-0.060v0c-0.6-2.74-2.76-4.86-5.5-5.36h-0.040c0 0-0.020 0-0.040 0-0.12 0-0.22 0.080-0.24 0.2v0l-0.14 1.080c0 0.020 0 0.020 0 0.040 0 0.1 0.080 0.2 0.18 0.22v0c1.12 0.2 2.080 0.72 2.82 1.48v0c0.7 0.7 1.2 1.6 1.42 2.6l0.020 0.040c0.020 0.1 0.1 0.18 0.22 0.18 0 0 0.020 0 0.040 0v0zM16.86 3.62c-1.64-1.66-3.8-2.8-6.2-3.2h-0.060c0 0-0.020 0-0.040 0-0.12 0-0.22 0.080-0.24 0.2v0l-0.14 1.080c0 0 0 0.020 0 0.020 0 0.12 0.080 0.22 0.2 0.24v0c4.080 0.7 7.26 3.8 8.080 7.78v0.060c0.020 0.12 0.12 0.2 0.22 0.2 0.020 0 0.040 0 0.060-0.020v0l1.060-0.18c0.12-0.020 0.2-0.12 0.2-0.24 0-0.020 0-0.020 0-0.040v0c-0.46-2.32-1.58-4.34-3.14-5.9v0z"></path></svg>
const directionIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="16" height="16" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 kMNrPk"><title>direction-line</title><path d="M19.2 8.44l-7.22-7.22c-0.52-0.48-1.2-0.8-1.98-0.8s-1.46 0.32-1.98 0.8v0l-7.2 7.22c-0.52 0.5-0.82 1.2-0.82 1.98s0.3 1.46 0.82 1.98l7.2 7.2c0.5 0.52 1.2 0.82 1.98 0.82s1.48-0.3 1.98-0.82l7.22-7.2c0.5-0.52 0.8-1.22 0.8-1.98s-0.3-1.48-0.8-1.98v0zM18.16 11.38l-7.2 7.2c-0.24 0.24-0.58 0.38-0.94 0.38s-0.72-0.14-0.96-0.38v0l-7.22-7.2c-0.24-0.24-0.4-0.58-0.4-0.96s0.16-0.7 0.4-0.94v0l7.2-7.22c0.24-0.24 0.58-0.4 0.96-0.4s0.7 0.16 0.94 0.4l7.2 7.2c0.24 0.24 0.4 0.58 0.4 0.94s-0.16 0.72-0.4 0.96v0zM12.2 6.96c-0.040-0.040-0.080-0.060-0.12-0.060-0.1 0-0.18 0.080-0.18 0.18 0 0 0 0 0 0v0 1.66h-3.56c-1.18 0-2.14 0.96-2.14 2.16v0 2.38c0 0.26 0.2 0.46 0.46 0.46v0h0.48c0.26 0 0.48-0.2 0.48-0.46v0-2.38c0-0.4 0.32-0.72 0.72-0.72h3.56v1.66c0 0 0 0 0 0 0 0.1 0.080 0.18 0.18 0.18 0.040 0 0.080-0.020 0.12-0.060v0l2.34-2.32c0.040-0.040 0.080-0.1 0.080-0.18s-0.040-0.12-0.080-0.16v0z"></path></svg>
const shareIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="16" height="16" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 kMNrPk"><title>share</title><path d="M0.72 19.94c-0.020 0-0.060 0-0.080 0s-0.060 0-0.080 0v0c-0.32-0.080-0.56-0.36-0.56-0.7 0 0 0 0 0-0.020v0c0-10.1 6.32-12.92 9.52-13.28v-4.34c0 0 0 0 0 0 0-0.38 0.32-0.7 0.72-0.7 0.18 0 0.36 0.060 0.48 0.18v0l9.060 8.32c0.14 0.14 0.22 0.34 0.22 0.54v0c0 0.2-0.1 0.4-0.24 0.52v0l-9.040 8.12c-0.12 0.1-0.3 0.18-0.46 0.18-0.12 0-0.22-0.040-0.32-0.080h0.020c-0.26-0.1-0.44-0.36-0.44-0.64v-4.3c-3.66 0.22-6.74 2.48-8.12 5.66l-0.020 0.060c-0.1 0.28-0.36 0.48-0.66 0.48v0zM10.24 12.32c0.4 0 0.72 0.32 0.72 0.72v0 3.4l7.26-6.5-7.26-6.66v3.32c0 0.4-0.32 0.72-0.72 0.72v0c-2.18 0-7.48 1.7-8.58 9 2.060-2.46 5.14-4 8.56-4 0.020 0 0.020 0 0.020 0v0z"></path></svg>
const ReviewIcon = <svg width="16" height="16" viewBox="0 0 16 16" fill="#FF7E8B"><g clipPath="url(#clip0_4432_11152)"><path d="M13.328 0H7.504C6.028 0 4.832 1.196 4.832 2.672V5.84H2.336C1.05133 5.84 0.00933333 6.87667 0 8.15933V11.84C0.00933333 13.1233 1.05133 14.16 2.336 14.16H7.248L9.248 15.84C9.36333 15.9387 9.51467 15.9993 9.68 16C10.0513 16 10.352 15.6993 10.352 15.328V10.832C10.3 10.508 10.0227 10.2633 9.688 10.2633C9.35333 10.2633 9.076 10.508 9.02467 10.828L9.024 10.832V13.888L7.952 12.992C7.83667 12.8933 7.68533 12.8327 7.52 12.832H2.336C1.78467 12.832 1.33733 12.39 1.328 11.8407V11.84V8.16C1.33733 7.61 1.78467 7.168 2.336 7.168H4.832V10.496C4.83467 10.7533 4.982 10.976 5.196 11.086L5.2 11.088C5.286 11.1307 5.38733 11.156 5.49467 11.156C5.63533 11.156 5.76667 11.1127 5.87467 11.0387L5.87267 11.04L8.35267 9.168H13.3287C14.8047 9.168 16.0007 7.972 16.0007 6.496V2.672C16.0007 1.196 14.8047 0 13.3287 0L13.328 0ZM14.672 6.496C14.672 6.50067 14.672 6.50667 14.672 6.512C14.672 7.24533 14.0773 7.84 13.344 7.84C13.3387 7.84 13.3327 7.84 13.3273 7.84H13.328H8.16C8.15867 7.84 8.15667 7.84 8.15467 7.84C8.00667 7.84 7.86933 7.888 7.758 7.96933L7.76 7.968L6.16 9.168V2.672C6.16 2.66733 6.16 2.66133 6.16 2.656C6.16 1.92267 6.75467 1.328 7.488 1.328C7.49333 1.328 7.49933 1.328 7.50467 1.328H7.504H13.328C13.3327 1.328 13.3387 1.328 13.344 1.328C14.0773 1.328 14.672 1.92267 14.672 2.656C14.672 2.66133 14.672 2.66733 14.672 2.67267V2.672V6.496ZM9.664 4.592C9.664 5.10467 9.24867 5.52 8.736 5.52C8.22333 5.52 7.808 5.10467 7.808 4.592C7.808 4.07933 8.22333 3.664 8.736 3.664C8.74133 3.664 8.74733 3.664 8.75267 3.664H8.752C9.25733 3.67333 9.664 4.08467 9.664 4.592ZM13.008 4.592C13.008 5.10467 12.5927 5.52 12.08 5.52C11.5673 5.52 11.152 5.10467 11.152 4.592C11.152 4.07933 11.5673 3.664 12.08 3.664C12.5927 3.664 13.008 4.07933 13.008 4.592Z" fill="#FF7E8B" style={{ color: "color(display-p3 0.9216 0.2667 0.4863)", fillOpacity: 1 }}></path></g><defs><clipPath id="clip0_4432_11152"><rect width="16" height="16" fill="white" style={{ fill: "white", fillOpacity: 1 }}></rect></clipPath></defs></svg>
const BookTableIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="16" height="16" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 kMNrPk"><title>table-booking</title><path d="M17.14 1.66h-0.94v1.92h0.94c0 0 0 0 0 0 0.523 0 0.949 0.418 0.96 0.939l0 0.001v11.2c0 1.049-0.851 1.9-1.9 1.9v0h-12.38c-0.006 0-0.013 0-0.020 0-1.049 0-1.9-0.851-1.9-1.9 0-0 0-0 0-0v0-11.2c0.011-0.522 0.437-0.94 0.96-0.94 0 0 0 0 0 0h0.96v-1.92h-0.96c-1.58 0-2.86 1.28-2.86 2.86v0 11.2c0.011 2.101 1.717 3.8 3.82 3.8 0 0 0 0 0 0h12.38c2.094-0.011 3.789-1.706 3.8-3.799v-11.201c0-1.58-1.28-2.86-2.86-2.86v0zM14.28 4.76c0.53 0 0.96-0.43 0.96-0.96v0-2.38c-0.070-0.467-0.469-0.822-0.95-0.822s-0.88 0.354-0.949 0.817l-0.001 0.005v2.38c0 0 0 0 0 0 0 0.523 0.418 0.949 0.939 0.96l0.001 0zM10 4.76c0.53 0 0.96-0.43 0.96-0.96v0-2.38c0-0.53-0.43-0.96-0.96-0.96s-0.96 0.43-0.96 0.96v0 2.38c0 0.53 0.43 0.96 0.96 0.96v0zM5.72 4.76c0.522-0.011 0.94-0.437 0.94-0.96 0-0 0-0 0-0v0-2.38c-0.070-0.467-0.469-0.822-0.95-0.822s-0.88 0.354-0.949 0.817l-0.001 0.005v2.38c0 0.53 0.43 0.96 0.96 0.96v0zM5.16 9.32c-0.174 0.174-0.282 0.414-0.282 0.68s0.108 0.506 0.282 0.68l2.86 2.86c0.173 0.169 0.409 0.272 0.67 0.272s0.497-0.104 0.67-0.273l5.48-5.48c0.174-0.174 0.282-0.414 0.282-0.68s-0.108-0.506-0.282-0.68l-0-0c-0.173-0.169-0.409-0.272-0.67-0.272s-0.497 0.104-0.67 0.273l-4.82 4.82-2.18-2.2c-0.173-0.169-0.409-0.272-0.67-0.272s-0.497 0.104-0.67 0.273l0-0z"></path></svg>
const ratingStar = <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="1rem" height="1rem" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 ffadyU"><title>star-fill</title><path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path></svg>

/* timport tabs file */
import Overview from './InfoOverview'
import OrderLine from './InfoOrderLine'
import Reviews from './InfoReviews'
import Photos from './InfoPhotos'
import Menu from './InfoMenu'
import BookTable from './InfoBookTable'

const InfoHeadSec = () => {
    const [activeTab, setActivetab] = useState("Overview")
    const handleTabClick = (tab) => {
        setActivetab(tab);
    }

    return (
        <div className='infoMainPage'>
            <div className="container">
                <div className='Head-sec'>
                    <div className="info">
                        <div className="description">
                            <h1>The Salt Cafe Kitchen & Bar</h1>
                            <p className='cuison'>North Indian, Continental, Chinese, Italian, Finger Food</p>
                            <p className='location'>1C,3rd Floor, Fatehabad Road, Tajganj, Agra</p>
                            <div className="info-row">
                                <div className="timing">
                                    <span>Open now</span>
                                    <span className='time-text'>12noon – 12midnight (Today)</span>
                                    {OpenBtnIcon}
                                </div>
                                <p className="person">₹1,800 for two</p>
                                <Link to="tel:+919910978774">{CallIcon} +919910978774</Link>
                            </div>
                            <div className="btn-row">
                                <ul>
                                    <li>
                                        <Link to="#">{directionIcon}
                                            Direction</Link>
                                    </li>
                                    <li>
                                        <Link to="#">{shareIcon}
                                            Share</Link>
                                    </li>
                                    <li>
                                        <Link to="#">{ReviewIcon}
                                            Reviews</Link>
                                    </li>
                                    <li>
                                        <Link to="#">{BookTableIcon}
                                            Book a table</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rating">
                            <div className="left">
                                <div className="btn">
                                    4.9 {ratingStar}
                                </div>
                                <div className="rating-text">
                                    <span className='bold'>9,002</span>
                                    <Link to="#">Dining Ratings</Link>
                                </div>
                            </div>
                            <div className="right">
                                <div className="btn">
                                    4.1 {ratingStar}
                                </div>
                                <div className="rating-text">
                                    <span className='bold'>2,829</span>
                                    <Link to="#">Delivery Ratings</Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="img-row">
                    <div className="col Col1">
                        <img src={Col1} alt="" />
                    </div>
                    <div className="col Col2">
                        <div className="img">
                            <img src={Col2a} alt="" />
                        </div>
                        <div className="img">
                            <img src={Col2b} alt="" />
                        </div>
                    </div>
                    <div className="col Col3">
                        <img src={Col3} alt="" />
                        <span>View Gallery</span>
                    </div>
                </div>
                <div className="infoTabSec">
                    <div className="tabRow">
                        <ul>
                            <li className={activeTab === "Overview" ? "tab active" : "tab"} onClick={() => handleTabClick("Overview")}><span>Overview</span><hr /></li>
                            <li className={activeTab === "OrderLine" ? "tab active" : "tab"} onClick={() => handleTabClick("OrderLine")}><span>Order Online</span><hr /></li>
                            <li className={activeTab === "Reviews" ? "tab active" : "tab"} onClick={() => handleTabClick("Reviews")}><span>Reviews</span><hr /></li>
                            <li className={activeTab === "Photos" ? "tab active" : "tab"} onClick={() => handleTabClick("Photos")}><span>Photos</span><hr /></li>
                            <li className={activeTab === "Menu" ? "tab active" : "tab"} onClick={() => handleTabClick("Menu")}><span>Menu</span><hr /></li>
                            <li className={activeTab === "BookTable" ? "tab active" : "tab"} onClick={() => handleTabClick("BookTable")}><span>Book a Table</span><hr /></li>
                        </ul>
                        <hr />
                    </div>
                    <div className="tabContent">
                        {activeTab === "Overview" && <Overview />}
                        {activeTab === "OrderLine" && <OrderLine />}
                        {activeTab === "Reviews" && <Reviews />}
                        {activeTab === "Photos" && <Photos />}
                        {activeTab === "Menu" && <Menu />}
                        {activeTab === "BookTable" && <BookTable />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoHeadSec;