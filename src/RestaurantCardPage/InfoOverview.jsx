import React, { useState, useRef, useEffect } from "react";
import InfoDescription from "./infoDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faDiamondTurnRight } from "@fortawesome/free-solid-svg-icons";

import Menu1 from "../assets/menu1.avif";
import Menu2 from "../assets/menu2.avif";
import Menu3 from "../assets/menu3.avif";

/* ------------------ icons (kept from your original) ------------------ */
const seeMenuIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="12" height="12" viewBox="0 0 20 20" role="img">
        <title>right-triangle</title>
        <path d="M5 0.42l10 10-10 10v-20z"></path>
    </svg>
);

const cuisinesMenuStar = (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
            d="M1.88799 4.62511C3.49582 3.86648 4.66941 2.31573 5.00063 0.445557C5.33184 2.31573 6.50413 3.86648 8.11196 4.62511C8.42492 4.77323 9.2034 4.99991 9.2034 4.99991C9.2034 4.99991 8.42492 5.2266 8.11196 5.37472C6.50413 6.13335 5.33054 7.6841 5.00063 9.55427C4.66941 7.6841 3.49712 6.13335 1.8893 5.37472C1.57634 5.2266 0.797852 4.99991 0.797852 4.99991C0.797852 4.99991 1.57634 4.77323 1.8893 4.62511H1.88799Z"
            fill="#D6A600"
        ></path>
    </svg>
);

const Check = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#108145" width="20" height="20" viewBox="0 0 20 20" role="img">
        <g clipPath="url(#clip0)">
            <path d="M14.75 8.3125L9.25 13.8125C9.125 13.9375 8.9375 14.0625 8.75 14.0625C8.5625 14.0625 8.375 14 8.1875 13.8125L5.1875 10.8125C4.875 10.5 4.875 10.0625 5.1875 9.75C5.5 9.4375 5.9375 9.4375 6.25 9.75L8.75 12.1875L13.6875 7.25C14 6.9375 14.4375 6.9375 14.75 7.25C15.0625 7.5625 15.0625 8 14.75 8.3125ZM17.0625 2.9375C13.125 -1 6.8125 -1 2.9375 2.9375C-0.9375 6.8125 -0.9375 13.1875 2.9375 17.0625C6.875 21 13.1875 21 17.125 17.0625C21.0625 13.125 21 6.8125 17.0625 2.9375Z"></path>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="20" height="20"></rect>
            </clipPath>
        </defs>
    </svg>
);

const flatIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 16 17" fill="none">
        <path d="M9.04079 1.18164C8.64572 0.270833 7.35428 0.270833 6.95921 1.18164C6.66851 1.85182 5.82962 2.07664 5.24284 1.64163..." />
    </svg>
);

const optionTagIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#B5B5B5" width="14" height="14" viewBox="0 0 20 20" role="img">
        <title>down-triangle</title>
        <path d="M20 5.42l-10 10-10-10h20z"></path>
    </svg>
);



const directionIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="20" height="20" viewBox="0 0 20 20" role="img">
        <title>direction</title>
        <path d="M19.2 8.44l-7.22-7.22c-0.52-0.48-1.2-0.8-1.98-0.8s-1.46 0.32-1.98 0.8v0l-7.2 7.22..." />
    </svg>
);

/* ------------------ end icons ------------------ */

/* ------------------ Reusable accessible custom dropdown ------------------ */
const CustomDropdown = ({ options = [], value, onChange, width = {}, id }) => {
    const [open, setOpen] = useState(false);
    const rootRef = useRef(null);

    // close on outside click
    useEffect(() => {
        function onDocClick(e) {
            if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, []);

    // keyboard support for header (toggle) and items
    const handleHeaderKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((v) => !v);
        } else if (e.key === "Escape") {
            setOpen(false);
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
            // focus first item shortly after opening
            setTimeout(() => {
                const first = rootRef.current?.querySelector(".dropdown-list li");
                first?.focus();
            }, 0);
        }
    };

    const handleItemKeyDown = (e, option) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onChange(option);
            setOpen(false);
        } else if (e.key === "Escape") {
            setOpen(false);
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            e.target.nextElementSibling?.focus();
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            e.target.previousElementSibling?.focus();
        }
    };

    return (
        <div
            className="custom-dropdown"
            style={{ width }}
            ref={rootRef}
            id={id}
        >
            <button
                type="button"
                className={`dropdown-selected ${open ? "open" : ""}`}
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                onKeyDown={handleHeaderKeyDown}
            >
                <span className="dropdown-selected-text">{value}</span>
                <span className="dropdown-icon">{optionTagIcon}</span>
            </button>

            {open && (
                <ul className="dropdown-list" role="listbox" tabIndex={-1}>
                    {options.map((opt, idx) => (
                        <li
                            key={idx}
                            role="option"
                            tabIndex={0}
                            className={`dropdown-item ${opt === value ? "selected" : ""}`}
                            onClick={() => {
                                onChange(opt);
                                setOpen(false);
                            }}
                            onKeyDown={(e) => handleItemKeyDown(e, opt)}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

/* ------------------ end CustomDropdown ------------------ */

const InfoOverview = () => {
    const More_Info = [
        "Lunch", "Dinner", "Full bar available", "DJ", "Nightlife", "Live entertainment",
        "Vegetarian friendly", "Romantic dining", "Dance floor", "City view", "Rooftop",
        "Wifi", "Live sports screening", "Live music", "Smoking area", "Outdoor seating",
        "Kid friendly", "Table reservation recommended", "Indoor seating", "Family friendly"
    ];

    const ReviewHighLights = [
        "Paneer Lahori Masala", "Dragon Bowl", "Szechwan Chicken", "Dragon Rolls",
        "Dahi Ke Sholey", "Mezze Platter", "Love the Food Love the Service",
        "Courteous Service", "Romantic Place", "Great Host", "Live Band", "Superb Ambience"
    ];

    const schedual = ["Today", "Tomorrow", "Thu, 04 Sep", "Fri, 05 Sep", "Sat, 06 Sep", "Sun, 07 Sep", "Mon, 08 Sep"];
    const guests = Array.from({ length: 30 }, (_, i) => `${i + 1} guests`);

    const [selectedDate, setSelectedDate] = useState(schedual[0]);
    const [selectedGuests, setSelectedGuests] = useState(guests[0]);

    return (
        <div className="overviewPage">
            <div className="parts">
                <div className="left">
                    {/* Dining Offers (same structure as your original; kept concise here) */}
                    <div className="dinning_offers">
                        <h2>Dining Offers</h2>
                        <p>Tap on any offer to know more</p>
                        <ul>
                            <li>
                                <h3>INSTANT OFFER</h3>
                                <div>
                                    <h4>Flat 15% OFF</h4>
                                    <p>on bill payments</p>
                                </div>
                            </li>
                            <li>
                                <h3>SURPRISE</h3>
                                <div>
                                    <h4>Get a scratch card</h4>
                                    <p>after every transaction</p>
                                </div>
                            </li>
                            <li>
                                <h3>EXCLUSIVE OFFER</h3>
                                <div>
                                    <h4>Flat 10% OFF</h4>
                                    <p>valid on your next dining payment</p>
                                </div>
                            </li>
                            <li>
                                <h3>BANK OFFER</h3>
                                <div>
                                    <h4>20% OFF up to ₹5000 on Solitaire Credit Cards</h4>
                                    <p>and more with other banks</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Menu Section */}
                    <div className="overview-menu">
                        <div className="top">
                            <h2>Menu</h2>
                            <a href="#">See all menus {seeMenuIcon}</a>
                        </div>

                        <div className="cuisines-menu">
                            <span>Cuisines</span>
                            <ul>
                                <li><a href="#">{cuisinesMenuStar}<span>North Indian</span>{cuisinesMenuStar}</a></li>
                                <li><a href="#">{cuisinesMenuStar}<span>Continental</span>{cuisinesMenuStar}</a></li>
                                <li><a href="#">{cuisinesMenuStar}<span>Chinese</span>{cuisinesMenuStar}</a></li>
                                <li><a href="#">{cuisinesMenuStar}<span>Italian</span>{cuisinesMenuStar}</a></li>
                                <li><a href="#">{cuisinesMenuStar}<span>Finger Food</span>{cuisinesMenuStar}</a></li>
                            </ul>
                        </div>

                        <div className="top-dishes">
                            <span>Top dishes</span>
                            <ul>
                                {ReviewHighLights.slice(0, 6).map((dish, idx) => (
                                    <li key={idx}>
                                        <a href="#">{cuisinesMenuStar}<span>{dish}</span>{cuisinesMenuStar}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

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
                                    <p>1 pages</p>
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

                    {/* People Say */}
                    <div className="what-people-say">
                        <div>
                            <h2>People Say This Place Is Known For</h2>
                            <p>Love the Food Love the Service, Courteous Service, Romantic Place, Great Host, Live Band, Superb Ambience</p>
                        </div>
                        <h2>Average Cost</h2>
                        <h5>₹1,800 for two people (approx.) Without alcohol</h5>
                        <p>Exclusive of applicable taxes and charges, if any</p>
                        <h5>₹250 for a pint of beer (approx.)</h5>
                        <p className='last-para'>How do we calculate cost for two?</p>
                        <div>
                            <span>Cash and Cards accepted</span>
                            <span>Digital payments accepted</span>
                        </div>
                    </div>

                    {/* More Info */}
                    <div className="more_info">
                        <h2>More Info</h2>
                        <ul>
                            {More_Info.map((item, index) => (
                                <li key={index}>{Check}{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Review Highlights */}
                    <div className="review-highlights">
                        <h2>Review Highlights</h2>
                        <ul>
                            {ReviewHighLights.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="line"></div>

                    {/* Report Section */}
                    <div className="report">
                        <div>HELP US MAKE ZOMATO BETTER</div>
                        <h4>Report an error in this listing</h4>
                        <p>Help us make Zomato more updated and relevant for everyone</p>
                        <span>Report now {seeMenuIcon}</span>
                    </div>
                </div>

                {/* Right side */}
                <div className="right">
                    <div className="table-reservation">
                        <div className="top">
                            <div>Table reservation</div>
                            <div>{flatIcon}<span>Flat 15% OFF + 2 more offers</span></div>
                        </div>

                        <div className="middle">
                            {/* custom dropdowns */}
                            <CustomDropdown
                                options={schedual}
                                value={selectedDate}
                                onChange={(v) => setSelectedDate(v)}
                                id="date-dropdown"
                            />

                            <CustomDropdown
                                options={guests}
                                value={selectedGuests}
                                onChange={(v) => setSelectedGuests(v)}
                                id="guests-dropdown"
                            />
                        </div>

                        <div className="table-btn">
                            <button type="button" onClick={() => console.log({ selectedDate, selectedGuests })}>
                                Book a Table
                            </button>
                        </div>
                    </div>

                    <div className="direction">
                        <h3>Direction</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.9299627130717!2d78.0475324760075!3d27.15849374948403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974714543cf50ef%3A0x77f2b4cf53a60622!2sAgra%20uttar%20pradesh!5e0!3m2!1sen!2suk!4v1757398593533!5m2!1sen!2suk"
                            width="318"
                            height="150"
                            style={{ border: "none" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="map"
                        />
                        <span>1C,3rd Floor, Fatehabad Road, Tajganj, Agra</span>
                        <div className="direction-btns">
                            <a className="copy-btn" href="#">
                                <FontAwesomeIcon icon={faCopy} style={{ color: "rgb(156,156,156)" }} />
                                <span>Copy</span>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faDiamondTurnRight} style={{ color: "rgb(239,79,95)" }} />
                                <span>Direction</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <InfoDescription />
        </div>
    );
};

export default InfoOverview;
