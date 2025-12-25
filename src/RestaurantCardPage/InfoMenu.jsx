import React from 'react'
import { Link } from "react-router-dom";
import Menu1 from "../assets/menu1.avif";
import Menu2 from "../assets/menu2.avif";
import Menu3 from "../assets/menu3.avif";
const InfoMenu = () => {

    const cuisinesMenuStar = (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
                d="M1.88799 4.62511C3.49582 3.86648 4.66941 2.31573 5.00063 0.445557C5.33184 2.31573 6.50413 3.86648 8.11196 4.62511C8.42492 4.77323 9.2034 4.99991 9.2034 4.99991C9.2034 4.99991 8.42492 5.2266 8.11196 5.37472C6.50413 6.13335 5.33054 7.6841 5.00063 9.55427C4.66941 7.6841 3.49712 6.13335 1.8893 5.37472C1.57634 5.2266 0.797852 4.99991 0.797852 4.99991C0.797852 4.99991 1.57634 4.77323 1.8893 4.62511H1.88799Z"
                fill="#D6A600"
            ></path>
        </svg> 
    );

    const More_Info = [
        "Lunch", "Dinner", "Full bar available", "DJ", "Nightlife", "Live entertainment",
        "Vegetarian friendly", "Romantic dining", "Dance floor", "City view", "Rooftop",
        "Wifi", "Live sports screening", "Live music", "Smoking area", "Outdoor seating",
        "Kid friendly", "Table reservation recommended", "Indoor seating", "Family friendly"
    ];
    return (

        <div>
            {/* ------------------ Menu Section ------------------ */}
            <div className="overview-menu">
                <div className="top">
                    <h2 style={{ marginTop: "10px" }}>Menu</h2>
                    <Link to="#">See all menus
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="12" height="12" viewBox="0 0 20 20" role="img">
                            <title>right-triangle</title>
                            <path d="M5 0.42l10 10-10 10v-20z"></path>
                        </svg>
                    </Link>
                </div>

                {/* Cuisines */}
                <div className="cuisines-menu">
                    <span>Cuisines</span>
                    <ul>
                        <li><Link to="#">{cuisinesMenuStar}<span>North Indian</span>{cuisinesMenuStar}</Link></li>
                        <li><Link to="#">{cuisinesMenuStar}<span>Continental</span>{cuisinesMenuStar}</Link></li>
                        <li><Link to="#">{cuisinesMenuStar}<span>Chinese</span>{cuisinesMenuStar}</Link></li>
                        <li><Link to="#">{cuisinesMenuStar}<span>Italian</span>{cuisinesMenuStar}</Link></li>
                        <li><Link to="#">{cuisinesMenuStar}<span>Finger Food</span>{cuisinesMenuStar}</Link></li>
                    </ul>
                </div>

                {/* Top Dishes */}
                <div className="top-dishes">
                    <span>Top dishes</span>
                    <ul>
                        {["Paneer Lahori Masala", "Dragon Bowl", "Szechwan Chicken", "Dragon Rolls", "Dahi Ke Sholey", "Mezze Platter"].map((dish, idx) => (
                            <li key={idx}>
                                <Link to="#"><span>{cuisinesMenuStar}</span>{dish}<span>{cuisinesMenuStar}</span></Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Menu Images */}
                <div className="bottom-menu">
                    <ul>
                        <li>
                            <div className="border1"></div>
                            <div className="border2"></div>
                            <div className="img">
                                <div className="menu-overlay"></div>
                                <img src={Menu1} alt="Menu1" />
                            </div>
                            <h4>Food Menu</h4>
                            <p>20 pages</p>
                        </li>
                        <li>
                            <div className="border1"></div>
                            <div className="border2"></div>
                            <div className="img">
                                <div className="menu-overlay"></div>
                                <img src={Menu2} alt="Menu2" />
                            </div>
                            <h4>Beverages</h4>
                            <p>1 page</p>
                        </li>
                        <li>
                            <div className="border1"></div>
                            <div className="border2"></div>
                            <div className="img">
                                <div className="menu-overlay"></div>
                                <img src={Menu3} alt="Menu3" />
                            </div>
                            <h4>Bar Menu</h4>
                            <p>5 pages</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default InfoMenu