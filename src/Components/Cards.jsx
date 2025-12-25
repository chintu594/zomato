import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DinningBanner from "../assets/dinning_banner.avif"
import Flat_off_icon from "../assets/flat_off_icon.webp"
import * as images from '../assets';

const RatingStar = ({ fill = "#ffffff", size = 8 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill={fill} width={size} height={size} viewBox="0 0 20 20">
        <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 
        0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 
        0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.
        060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
    </svg>
);

const FilterIcon = ({ fill = "#9c9c9c", size = 18 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill={fill} width={size} height={size} viewBox="0 0 20 20">
        <path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.
        71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.
        343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.
        42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.
        001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-
        0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.
        074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84
         15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 
         0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path>
    </svg>
);

// -- restaurantData array same as your original --
const Cards = () => {
    const navigate = useNavigate();

    const goToCardPage = () => {
        navigate('/cardPage');
        window.scrollTo(0, 0);
    };

    const names = [
        "The Salt Cafe Kitchen & Bar", "Ivoryy - Cocktail Garden", "Pind Balluchi", "Kebab - E - Que - Doubletree By Hilton",
        "Punjabi By Nature", "Incanto", "My Bar Headquarters", "Qairo", "Two Saints Bar & Kitchen", "The Escape",
        "LONDON COFFEE CLUB", "Palm Burj", "Biryani By Kilo", "Altitude Rooftop Restaurant & Lounge", "Unplugged Courtyard",
        "Karchi", "Cosmos Cafe & Bar - Fairfield By Marriott", "The Nawaabs", "Hotel Moti Palace - Pankhuri Restaurant",
        "North 27 - Doubletree By Hilton", "Mansion- Tapas & CL Club", "Hichkee", "Barbeque Nation", "Molecule Air Bar",
        "Beep", "Berco's - If You Love Chinese", "Beep 2.0 Gastro Pub", "Hotel Orange", "Cafe G - Holiday Inn", "MoMo Cafe - Courtyard By Marriott"
    ];

    const ratings = [4.4, 4.1, 3.9, 4.2, 4.4, 4.5, 4.4, 4.4, 4.5, 4.3, 4.9, 4.5, 4.6, 3.6, 4.3, 4.5, 4.0, 4.3, 4.1, 4.2, 4.0, 4.2, 4.4,
        4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5];

    const locations = [
        "Tajganj, Agra", "Tajganj, Agra", "Tajganj, Agra", "Tajganj, Agra",
        "Tajganj, Agra", "Civil Lines, Agra", "Khandari, Agra", "Tajganj, Agra", "Tajganj, Agra", "Khandari, Agra",
        "Tajganj, Agra", "Rakabganj, Agra", "Civil Lines, Agra", "Shahganj, Agra", "Tajganj, Agra",
        "Kamla Nagar, Agra", "Civil Lines, Agra", "Tajganj, Agra", "Rakabganj, Agra", "Tajganj, Agra",
        "Rakabganj, Agra", "Civil Lines, Agra", "Civil Lines, Agra", "Tajganj, Agra",
        "Tajganj, Agra", "Tajganj, Agra", "Tajganj, Agra", "Tajganj, Agra", "Tajganj, Agra", "Tajganj, Agra"
    ];

    const Distance = [
        "3.8km", "2.8km", "1.8km", "3.1km", "2.1km", "10.8km", "8.8km", "7.8km", "6.8km", "5.8km", "4.8km", "1.8km", "2.8km", "3.9km", "3.8km", "5.7km",
        "7.5km", "4.3km", "4.9km", "3.4km", "6.2km", "1.3km", "7.5km", "6.5km", "4.3km", "7.2km", "3.7km", "4.6km", "7.3km", "7.0km",
    ]
    const prices = [
        "₹1,800 for two", "₹1,400 for two", "₹900 for two", "₹2,900 for two", "₹1,000 for two", "₹1,500 for two",
        "₹1,200 for two", "₹1,800 for two", "₹1,800 for two", "₹1,000 for two", "₹1,000 for two", "₹1,500 for two",
        "₹1,000 for two", "₹1,000 for two", "₹1,600 for two", "₹600 for two", "₹2,400 for two", "₹1,100 for two",
        "₹1,000 for two", "₹3,800 for two", "₹3,500 for two", "₹1,700 for two", "₹1,800 for two", "₹1,700 for two",
        "₹1,700 for two", "₹1,700 for two", "₹1,700 for two", "₹1,700 for two", "₹1,700 for two", "₹1,700 for two"
    ];

    const offers = [
        "Flat 15% OFF", "Flat 15% OFF", "Flat 15% OFF", "Flat 15% OFF", "Flat 15% OFF", "Flat 10% OFF",
        "Flat 10% OFF", "Flat 10% OFF", "Flat 15% OFF", "Flat 15% OFF", "Flat 10% OFF", "Flat 10% OFF",
        "Flat 20% OFF", "Flat 10% OFF", "Flat 15% OFF", "Flat 10% OFF", "Flat 15% OFF", "Flat 10% OFF",
        "Flat 10% OFF", "Flat 15% OFF", "Flat 15% OFF", "Flat 15% OFF", "Flat 15% OFF", "Flat 15% OFF",
        "Flat 15% OFF", "Flat 15% OFF", "Flat 15% OFF", "Flat 15% OFF", "Flat 15% OFF", "Flat 15% OFF"
    ];

    const restaurantData = Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        name: names[i],
        rating: ratings[i],
        location: locations[i],
        distance: Distance[i],
        price: prices[i],
        cuisine: "North Indian, Asian, Italian, Chinese, Sushi, Biryani, Desserts, Beverages",
        img: images[`Agra_card_${i + 1}`],
        isPromoted: i < 5 || i === 13 || i === 20 || i === 24 || i === 29,
        hasOffer: !([2, 4, 8, 12, 24, 28].includes(i + 1)),
        offerText: offers[i + 1],
    }));

    return (
        <div>
            {/* Filter Buttons */}
            <div className="filter-btns">
                <div className="container">
                    <div className="btn_row">
                        <Link className="btn"><FilterIcon /> Filters</Link>
                        <Link className="btn">Open Now</Link>
                        <Link className="btn">Offers</Link>
                        <Link className="btn">Rating: 4.5+</Link>
                        <Link className="btn">Pet friendly</Link>
                        <Link className="btn">Outdoor seating</Link>
                        <Link className="btn">Serves Alcohol</Link>
                    </div>
                </div>
            </div>

            {/* Banner Section */}
            <div className="banner-sec">
                <div className="container">
                    <Link to="#" className="banner_img">
                        <img src={DinningBanner} alt="Dining-Banner" />
                    </Link>
                </div>
            </div>

            {/* Cards Section */}
            <div className="cards-sec">
                <div className="container">
                    <h2>Best Food in Agra</h2>
                    <div className="cards_grid">
                        {restaurantData.map(({ id, name, rating, location, distance, price, cuisine, img, isPromoted, hasOffer, offerText }, index) => (
                            <div key={id} className="card" onClick={() => goToCardPage(name)} style={{ cursor: 'pointer' }}>
                                <div className="img-sec">
                                    {isPromoted && (
                                        <div className="promoted">
                                            <span>Promoted</span>
                                        </div>
                                    )}
                                    <img src={img} alt={name} />
                                    {hasOffer && (
                                        <div className="flat_off">
                                            <img src={Flat_off_icon} alt="offer-icon" />
                                            <span>{offerText}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="content">
                                    <div className="row row1">
                                        <h4>{name}</h4>
                                        <span>
                                            {rating}<RatingStar />
                                        </span>
                                    </div>
                                    <div className="row row2">
                                        <p>{cuisine}</p>
                                        <p>{price}</p>
                                    </div>
                                    <div className="row row3">
                                        <p>{location}</p>
                                        <p>{distance}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Cards;