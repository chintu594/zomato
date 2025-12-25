import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import Footer_logo from '../assets/footer_logo.avif'
const browser = <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 iwHbVQ"><title>language-globe</title><path d="M10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.011-5.518-4.482-9.989-9.999-10h-0.001zM17.14 6.18h-3c-0.264-1.393-0.63-2.62-1.107-3.791l0.047 0.131c1.755 0.733 3.161 2.010 4.039 3.618l0.021 0.042zM18.1 10c-0.002 0.676-0.090 1.33-0.252 1.954l0.012-0.054h-3.44c0.059-0.57 0.092-1.231 0.092-1.9s-0.034-1.33-0.099-1.982l0.007 0.082h3.44c0.15 0.57 0.238 1.224 0.24 1.899v0.001zM1.9 10c0.002-0.676 0.090-1.33 0.252-1.954l-0.012 0.054h3.46c-0.059 0.57-0.092 1.231-0.092 1.9s0.034 1.33 0.099 1.982l-0.007-0.082h-3.46c-0.15-0.57-0.238-1.224-0.24-1.899v-0.001zM7.48 8.1h5.040c0.063 0.57 0.099 1.231 0.099 1.9s-0.036 1.33-0.107 1.981l0.007-0.081h-5.040c-0.063-0.57-0.099-1.231-0.099-1.9s0.036-1.33 0.107-1.981l-0.007 0.081zM10.76 1.9c0.603 1.228 1.106 2.657 1.436 4.152l0.024 0.128h-4.44c0.354-1.623 0.857-3.052 1.51-4.395l-0.050 0.115c0.24 0 0.5 0 0.76 0s0.48 0 0.76 0zM6.96 2.48c-0.445 1.051-0.825 2.291-1.079 3.576l-0.021 0.124h-3c0.899-1.65 2.305-2.927 4.007-3.64l0.053-0.020zM2.86 13.8h3c0.262 1.4 0.629 2.634 1.107 3.811l-0.047-0.131c-1.757-0.738-3.165-2.022-4.039-3.637l-0.021-0.043zM9.24 18.1c-0.605-1.234-1.108-2.67-1.437-4.172l-0.023-0.128h4.44c-0.352 1.63-0.855 3.066-1.51 4.415l0.050-0.115c-0.24 0-0.5 0-0.76 0s-0.48 0-0.76 0zM13.040 17.52c0.431-1.046 0.798-2.28 1.041-3.558l0.019-0.122h3.040c-0.902 1.642-2.308 2.912-4.006 3.62l-0.054 0.020z"></path></svg>
const footer_icon_1 = <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="22" height="22" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 cvuzKA"><path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM7.0625 8.375H4.75V15.4375H7.0625V8.375ZM7.25 6.1875C7.25 5.5 6.75 5 5.9375 5C5.125 5 4.5625 5.5 4.5625 6.1875C4.5625 6.875 5.0625 7.4375 5.875 7.4375C6.6875 7.4375 7.25 6.875 7.25 6.1875ZM15.5 11.375C15.5 9.1875 14.3125 8.1875 12.8125 8.1875C11.5625 8.1875 11 8.875 10.6875 9.375V8.375H8.375C8.375 9.0625 8.375 15.4375 8.375 15.4375H10.6875V11.5C10.6875 11.3125 10.6875 11.0625 10.75 10.9375C10.9375 10.5 11.3125 10.0625 11.9375 10.0625C12.75 10.0625 13.125 10.6875 13.125 11.6875V15.4375H15.4375C15.5 15.4375 15.5 11.375 15.5 11.375Z"></path></svg>
const footer_icon_2 = <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="22" height="22" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 cvuzKA"><path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.1875 5C8.8125 5 8.625 5 8.0625 5C7.5 5.0625 7.125 5.125 6.8125 5.25C6.5 5.375 6.1875 5.5625 5.875 5.875C5.5625 6.1875 5.375 6.4375 5.25 6.8125C5.125 7.125 5 7.5 5 8.0625C5 8.625 5 8.75 5 10.1875C5 11.625 5 11.8125 5.0625 12.375C5.0625 12.9375 5.1875 13.3125 5.3125 13.625C5.4375 13.9375 5.625 14.25 5.9375 14.5625C6.1875 14.8125 6.5 15 6.875 15.1875C7.1875 15.3125 7.5625 15.4375 8.125 15.4375C8.6875 15.4375 8.875 15.5 10.25 15.5C11.6875 15.5 11.875 15.5 12.4375 15.4375C13 15.375 13.375 15.3125 13.6875 15.1875C14 15.0625 14.3125 14.875 14.625 14.5625C14.9375 14.25 15.125 14 15.25 13.625C15.375 13.3125 15.5 12.875 15.5 12.375C15.5625 11.8125 15.5625 11.625 15.5625 10.1875C15.5625 8.75 15.5625 8.625 15.5 8.0625C15.5 7.5 15.375 7.125 15.25 6.8125C15.125 6.4375 14.9375 6.1875 14.625 5.875C14.375 5.625 14.0625 5.4375 13.6875 5.25C13.375 5.125 12.9375 5.0625 12.4375 5C11.8125 5 11.625 5 10.1875 5ZM9.75 5.9375C9.875 5.9375 10.0625 5.9375 10.1875 5.9375C11.5625 5.9375 11.75 5.9375 12.3125 5.9375C12.8125 5.9375 13.0625 6.0625 13.25 6.125C13.5 6.25 13.6875 6.375 13.875 6.5C14.0625 6.625 14.1875 6.8125 14.25 7.125C14.3125 7.3125 14.4375 7.5625 14.4375 8.0625C14.5 8.625 14.5 8.8125 14.5 10.1875C14.5 11.5625 14.5 11.75 14.4375 12.3125C14.4375 12.8125 14.3125 13.125 14.25 13.3125C14.1875 13.5625 14.0625 13.6875 13.875 13.9375C13.6875 14.125 13.5 14.1875 13.25 14.3125C13.0625 14.375 12.8125 14.5 12.3125 14.5C11.75 14.5 11.5625 14.5625 10.1875 14.5625C8.8125 14.5625 8.625 14.5625 8.0625 14.5C7.5625 14.5 7.3125 14.375 7.125 14.3125C6.875 14.1875 6.6875 14.125 6.5 13.9375C6.3125 13.75 6.1875 13.5625 6.125 13.3125C6.0625 13.125 6 12.875 5.9375 12.3125C5.9375 11.75 5.9375 11.625 5.9375 10.1875C5.9375 8.8125 5.9375 8.625 5.9375 8.0625C6 7.5625 6.0625 7.3125 6.125 7.125C6.25 6.875 6.375 6.6875 6.5 6.5C6.625 6.3125 6.875 6.1875 7.125 6.125C7.3125 6.0625 7.5625 5.9375 8.0625 5.9375C8.5625 5.9375 8.75 5.9375 9.75 5.9375ZM13 6.8125C12.6875 6.8125 12.375 7.0625 12.375 7.4375C12.375 7.8125 12.625 8.0625 13 8.0625C13.375 8.0625 13.625 7.8125 13.625 7.4375C13.625 7.0625 13.3125 6.8125 13 6.8125ZM10.1875 7.5C8.75 7.5 7.5 8.6875 7.5 10.1875C7.5 11.6875 8.6875 12.875 10.1875 12.875C11.6875 12.875 12.875 11.6875 12.875 10.1875C12.875 8.6875 11.6875 7.5 10.1875 7.5ZM10.1875 8.4375C11.125 8.4375 11.9375 9.1875 11.9375 10.1875C11.9375 11.1875 11.1875 11.9375 10.1875 11.9375C9.25 11.9375 8.4375 11.1875 8.4375 10.1875C8.4375 9.1875 9.25 8.4375 10.1875 8.4375Z"></path></svg>
const footer_icon_3 = <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="22" height="22" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 cvuzKA"><title>twitter-circle</title><svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 512"><path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"></path><path fill="#fff" fillRule="nonzero" d="M318.64 157.549h33.401l-72.973 83.407 85.85 113.495h-67.222l-52.647-68.836-60.242 68.836h-33.423l78.052-89.212-82.354-107.69h68.924l47.59 62.917 55.044-62.917zm-11.724 176.908h18.51L205.95 176.493h-19.86l120.826 157.964z"></path></svg></svg>
const footer_icon_4 = <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="22" height="22" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 cvuzKA"><path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM15.1875 7.4375C15.0625 7 14.6875 6.625 14.25 6.5C13.4375 6.25 10.1875 6.25 10.1875 6.25C10.1875 6.25 6.9375 6.25 6.125 6.5C5.6875 6.625 5.3125 7 5.1875 7.4375C5 8.25 5 10 5 10C5 10 5 11.75 5.25 12.5625C5.375 13 5.75 13.375 6.1875 13.5C7 13.75 10.25 13.75 10.25 13.75C10.25 13.75 13.5 13.75 14.3125 13.5C14.75 13.375 15.125 13 15.25 12.5625C15.5 11.75 15.5 10 15.5 10C15.5 10 15.4375 8.25 15.1875 7.4375ZM9.25 11.75V8.5L11.875 10.125L9.25 11.75Z"></path></svg>
const footer_icon_5 = <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="22" height="22" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 cvuzKA"><path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.75 15.4375V10.1875H12.1875L12.375 8.375H10.75V7.5C10.75 7.0625 10.8125 6.8125 11.5 6.8125H12.375V5H10.9375C9.1875 5 8.625 5.875 8.625 7.3125V8.375H7.5V10.1875H8.5625V15.4375C8.5625 15.4375 10.75 15.4375 10.75 15.4375Z"></path></svg>
import App_store from '../assets/app-store.webp'
import Google_play from '../assets/google-play.webp'

const Footer = () => {
    const [opendropdown, Setdropdown] = useState(false);
    const [openbrowser, Setbrowser] = useState(false);

    return (
        <div>
            <footer className="footer-sec">
                <div className="container">
                    <div className="top-row">
                        <div className="footer-logo">
                            <Link to='/'>
                                <img src={Footer_logo} alt="Footer-logo" style={{ cursor: "pointer" }} /></Link>
                        </div>
                        <div className="drop-sec">
                            <div className="country-sec">
                                <span className={`arrow ${opendropdown ? "dropdown-show" : ""}`}></span>
                                <div className={`dropdown ${opendropdown ? "dropdown-show" : ""}`}>
                                    <div className="part1 part">
                                        <span className='bg'></span>
                                        <span className='text'>India</span>
                                    </div>
                                    <div className="part2 part">
                                        <span className='bg'></span>
                                        <span className='text'>UAE</span>
                                    </div>
                                </div>
                                <div
                                    className="dropdown_point"
                                    onClick={() => {
                                        Setdropdown(!opendropdown);
                                        Setbrowser(false);
                                    }}
                                >
                                    <span className='india'></span>
                                    <span className='con-name'>India</span>
                                    <i className="ri-arrow-down-s-line" size="15"></i></div>
                            </div>
                            <div className="country-sec lang">
                                <span className={`arrow ${openbrowser ? "dropdown-show" : ""}`}></span>
                                <div className={`dropdown ${openbrowser ? "dropdown-show" : ""}`}>
                                    <div className="part">
                                        <span className='text active'>English</span>
                                        <span className='text'>Türkçe</span>
                                        <span className='text'>हिंदी</span>
                                        <span className='text'>Português (BR)</span>
                                        <span className='text'>Indonesian</span>
                                        <span className='text'>Português (PT)</span>
                                        <span className='text'>Español</span>
                                        <span className='text'>Čeština</span>
                                        <span className='text'>Slovenčina</span>
                                        <span className='text'>Polish</span>
                                        <span className='text'>Italian</span>
                                        <span className='text'>Vietnamese</span>
                                    </div>
                                </div>
                                <div className="dropdown_point" onClick={() => {
                                    Setbrowser(!openbrowser);
                                    Setdropdown(false);
                                }}>
                                    {browser}
                                    <span className='con-name'>English</span>
                                    <i className="ri-arrow-down-s-line" size="15"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-row">
                        <div className="column column1">
                            <h6>About Zomato</h6>
                            <ul>
                                <li>
                                    <Link to="#">Who We Are</Link>
                                </li>
                                <li>
                                    <Link to="#">Blog</Link>
                                </li>
                                <li>
                                    <Link to="#">Work With Us</Link>
                                </li>
                                <li>
                                    <Link to="#">Investor Relations</Link>
                                </li>
                                <li>
                                    <Link to="#">Report Fraud</Link>
                                </li>
                                <li>
                                    <Link to="#">Press Kit</Link>
                                </li>
                                <li>
                                    <Link to="#">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="column column2">
                            <h6>Zomaverse</h6>
                            <ul>
                                <li>
                                    <Link to="#">Zomato</Link>
                                </li>
                                <li>
                                    <Link to="#">Blinkit</Link>
                                </li>
                                <li>
                                    <Link to="#">District</Link>
                                </li>
                                <li>
                                    <Link to="#">Feeding India</Link>
                                </li>
                                <li>
                                    <Link to="#">Hyperpure</Link>
                                </li>
                                <li>
                                    <Link to="#">Zomato Live</Link>
                                </li>
                                <li>
                                    <Link to="#">Zomaland</Link>
                                </li>
                                <li>
                                    <Link to="#">Weather Union</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="column column3">
                            <h6>For Restaurants</h6>
                            <ul>
                                <li>
                                    <Link to="#">Partner With Us</Link>
                                </li>
                                <li>
                                    <Link to="#">Apps For You</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="column column4">
                            <h6>Learn More</h6>
                            <ul>
                                <li>
                                    <Link to="#">Privacy</Link>
                                </li>
                                <li>
                                    <Link to="#">Security</Link>
                                </li>
                                <li>
                                    <Link to="#">Terms</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="column column5">
                            <h6>Social links</h6>
                            <ul>
                                <li>
                                    <Link to="#">{footer_icon_1}</Link>
                                </li>
                                <li>
                                    <Link to="#">{footer_icon_2}</Link>
                                </li>
                                <li>
                                    <Link to="#">{footer_icon_3}</Link>
                                </li>
                                <li>
                                    <Link to="#">{footer_icon_4}</Link>
                                </li>
                                <li>
                                    <Link to="#">{footer_icon_5}</Link>
                                </li>
                            </ul>
                            <Link to="#"><img src={App_store} alt="App_store" className='app_store' /></Link>
                            <Link to="#"><img src={Google_play} alt="Google_play" className='google_play' /></Link>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved.</p>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Footer
