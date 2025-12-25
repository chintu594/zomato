import React from "react";
import { Link } from "react-router-dom";
import * as images from "../assets";

const RightArrow = ({ fill = "#ffffff", size = 10 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
        width={size}
        height={size}
        viewBox="0 0 20 20"
        role="img"
        className="sc-rbbb40-0 gvsUip"
    >
        <title>right-triangle</title>
        <path d="M5 0.42l10 10-10 10v-20z"></path>
    </svg>
);

export const CollectionCards = () => {
    const titles = [
        "Taj View Restaurants",
        "Romantic Dining",
        "Cafes to Chill",
        "Top Picks",
        "Blissful Breakfast Places",
        "Sky High Sips",
        "Great Cafes",
        "Best Bars & Pubs",
        "Taj View Restaurants",
        "Romantic Dining",
        "Cafes to Chill",
        "Top Picks",
        "Blissful Breakfast Places",
        "Sky High Sips",
        "Great Cafes",
        "Best Bars & Pubs",
        "Taj View Restaurants",
        "Romantic Dining",
        "Top Picks",
        "Blissful Breakfast Places",
    ];

    const places = [
        "8 Places",
        "6 Places",
        "10 Places",
        "12 Places",
        "13 Places",
        "11 Places",
        "15 Places",
        "9 Places",
        "8 Places",
        "6 Places",
        "10 Places",
        "12 Places",
        "13 Places",
        "11 Places",
        "15 Places",
        "9 Places",
        "8 Places",
        "6 Places",
        "12 Places",
        "13 Places",
    ];

    const carData = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        img: images[`Agra_hotel_collection${i + 1}`],
        title: titles[i],
        places: places[i],
    }));

    return (
        <div className="collection view_collection">
            <div className="container">
                <h2>More Collections</h2>

                <div className="card-grid">
                    {carData.map(({ id, img, title, places }) => (
                        <Link
                            to={`/collection/${id}`}
                            key={id}
                            className="slide-card"
                        >
                            <img src={img} alt={title} />

                            <div className="content">
                                <p>{title}</p>
                                <div>
                                    <span>{places}</span>
                                    <RightArrow />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
