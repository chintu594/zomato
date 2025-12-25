import React from "react";
import { useNavigate } from "react-router-dom";
import "./ViewRestaurantStyle.css";

import ViewRestaurantImg1 from "../assets/View-Restaurant-Img1.avif";
import ViewRestaurantImg2 from "../assets/View-Restaurant-Img2.avif";
import ViewRestaurantImg3 from "../assets/View-Restaurant-Img3.avif";
import ViewRestaurantImg4 from "../assets/View-Restaurant-Img4.avif";
import ViewRestaurantImg5 from "../assets/View-Restaurant-Img5.avif";
import ViewRestaurantImg6 from "../assets/View-Restaurant-Img6.webp";
import ViewRestaurantImg7 from "../assets/View-Restaurant-Img7.avif";
import ViewRestaurantImg8 from "../assets/View-Restaurant-Img8.avif";
import ViewRestaurantImg9 from "../assets/View-Restaurant-Img9.avif";
import ViewRestaurantImg10 from "../assets/View-Restaurant-Img10.avif";
import ViewRestaurantImg11 from "../assets/View-Restaurant-Img11.avif";
import ViewRestaurantImg12 from "../assets/View-Restaurant-Img12.avif";

import FlatDiscount from "../assets/flat_off_icon.webp";
const viewCards = [
  { id: 1, name: "Taj Mahal Restaurant", rating: 3.1, cuisine: "North Indian, Mughlai, Chinese, BBQ", location: "Tajganj, Agra", discount: "10% OFF", image: ViewRestaurantImg1 },
  { id: 2, name: "The Salt Cafe Kitchen & Bar", rating: 4.9, cuisine: "North Indian, Continental, Chinese", location: "Tajganj, Agra", discount: "15% OFF", image: ViewRestaurantImg2 },
  { id: 3, name: "Skydeck - The Gateway Hotel", rating: 3.7, cuisine: "North Indian, Chinese, Continental", location: "Tajganj, Agra", image: ViewRestaurantImg3 },
  { id: 4, name: "Taj Terrace - Hotel Taj Resorts", rating: 4.1, cuisine: "North Indian, Continental, Chinese", location: "Tajganj, Agra", image: ViewRestaurantImg4 },
  { id: 5, name: "Esphahan - The Oberoi Amarvilas", rating: 4.9, cuisine: "North Indian, Biryani, Desserts", location: "Tajganj, Agra", image: ViewRestaurantImg5 },
  { id: 6, name: "Masala Bistro", rating: 3.9, cuisine: "Chinese, North Indian, Rolls, Kebab", location: "Tajganj, Agra", discount: "10% OFF", image: ViewRestaurantImg6 },
  { id: 7, name: "Qairo", rating: 4.4, cuisine: "North Indian, Italian, Asian, Continental", location: "Tajganj, Agra", discount: "10% OFF", image: ViewRestaurantImg7 },
  { id: 8, name: "Shankara Vegis Restaurant", rating: 3.1, cuisine: "North Indian, Fast Food, Desserts", location: "Tajganj, Agra", image: ViewRestaurantImg8 },
  { id: 9, name: "Taj Mahal Restaurant", rating: 3.1, cuisine: "North Indian, Mughlai, Chinese, BBQ", location: "Tajganj, Agra", discount: "10% OFF", image: ViewRestaurantImg9 },
  { id: 10, name: "The Salt Cafe Kitchen & Bar", rating: 4.9, cuisine: "North Indian, Continental, Chinese", location: "Tajganj, Agra", discount: "15% OFF", image: ViewRestaurantImg10 },
  { id: 11, name: "Skydeck - The Gateway Hotel", rating: 3.7, cuisine: "North Indian, Chinese, Continental", location: "Tajganj, Agra", image: ViewRestaurantImg11 },
  { id: 12, name: "Taj Terrace - Hotel Taj Resorts", rating: 4.1, cuisine: "North Indian, Continental, Chinese", location: "Tajganj, Agra", image: ViewRestaurantImg12 },
];

export const ViewRestaurantsCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    navigate("/cardPage", { state: { card } });
  }
  return (
    <div>
      <div className="cards-sec">
        <div className="container">
          <div className="card-grid">
            {viewCards.map((card) => (
              <div key={card.id} className="restaurant-card" onClick={() => handleCardClick(card)} style={{ cursor: "pointer" }}>
                <div className="card-img">
                  <img src={card.image} alt={card.name} />
                  {card.discount && (
                    <span className="discount-badge">
                      <img src={FlatDiscount} alt="discount" /> Flat {card.discount}
                    </span>
                  )}
                  <div className="img-overlay"></div>
                </div>

                <div className="card-content">
                  <h3>{card.name}</h3>
                  <div className="rating-dining">
                    <span
                      className={`rating-badge ${card.rating >= 4 ? "high" : card.rating >= 3.5 ? "medium" : "low"
                        }`}
                    >
                      {card.rating} ★
                    </span>
                    <span className="dining-label">DINING</span>
                  </div>
                  <div className="cuisin">
                    <p>{card.cuisine}</p>
                  </div>
                  <p className="location">{card.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
