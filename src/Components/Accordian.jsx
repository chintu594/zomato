import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';

const AccordionIcon = ({ fill = "#1c1c1c", size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill={fill} width={size} height={size} viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 iRDDBk"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0
    .28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>
)

const AcordianItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <span className={`rotatable-icon ${isOpen ? "rotated" : ""}`}>
                    <AccordionIcon />
                </span>
            </div>
            {
                isOpen && (
                    <div className="accordion-content">
                        <ul>
                            {content.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.href}>{item.text}</Link>
                                    </li>)
                            })}
                        </ul>
                    </div>
                )
            }
        </div>
    )
};

const Accordian = () => {
    const data = [
        {
            title: "Popular cuisines near me",
            content: [
                {
                    text: "Bakery near me", href: "#"
                },
                {
                    text: "Beverages near me", href: "#"
                },
                {
                    text: "Biryani near me", href: "#"
                },
                {
                    text: "Burger near me", href: "#"
                },
                {
                    text: "Chinese near me", href: "#"
                },
                {
                    text: "Coffee near me", href: "#"
                },
                {
                    text: "Continental near me", href: "#"
                },
                {
                    text: "Desserts near me", href: "#"
                },
                {
                    text: "Mithai near me", href: "#"
                },
                {
                    text: "Momos near me", href: "#"
                },
                {
                    text: "Mughlai near me", href: "#"
                },
                {
                    text: "North Indian near me", href: "#"
                },
                {
                    text: "Pasta near me", href: "#"
                },
                {
                    text: "Pizza near me", href: "#"
                },
                {
                    text: "Rolls near me", href: "#"
                },
                {
                    text: "Sandwich near me", href: "#"
                },
                {
                    text: "Shake near me", href: "#"
                },
                {
                    text: "South Indian near me", href: "#"
                },
                {
                    text: "Street Food near me", href: "#"
                },
                {
                    text: "Tea near me", href: "#"
                },
            ]
        },
        {
            title: "Popular restaurant types near me",
            content: [
                {
                    text: "Bakeries near me", href: "#"
                },
                {
                    text: "Bars near me", href: "#"
                },
                {
                    text: "Beverage Shops near me", href: "#"
                },
                {
                    text: "Cafés near me", href: "#"
                },
                {
                    text: "Casual Dining near me", href: "#"
                },
                {
                    text: "Dessert Parlors near me", href: "#"
                },
                {
                    text: "Dhabas near me", href: "#"
                },
                {
                    text: "Fine Dining near me", href: "#"
                },
                {
                    text: "Food Courts near me", href: "#"
                },
                {
                    text: "Food Trucks near me", href: "#"
                },
                {
                    text: "Kiosks near me", href: "#"
                },
                {
                    text: "Microbreweries near me", href: "#"
                },
                {
                    text: "Quick Bites near me", href: "#"
                },
                {
                    text: "Sweet Shops near me", href: "#"
                }
            ]
        },
        {
            title: "Explore Dining Cities at Zomato",
            content: [
                {
                    text: "Agartala", href: "#"
                },
                {
                    text: "Agra", href: "#"
                },
                {
                    text: "Ahmedabad", href: "#"
                },
                {
                    text: "Ajmer", href: "#"
                },
                {
                    text: "Akluj", href: "#"
                },
                {
                    text: "Allahabad", href: "#"
                },
                {
                    text: "Alwar", href: "#"
                },
                {
                    text: "Ambasamudram", href: "#"
                },
                {
                    text: "Amli", href: "#"
                },
                {
                    text: "Amritsar", href: "#"
                },
                {
                    text: "Anand Nagar", href: "#"
                },
                {
                    text: "Aurangabad", href: "#"
                },
                {
                    text: "Auroville", href: "#"
                },
                {
                    text: "Ausa", href: "#"
                }
            ]
        }, {
            title: "Restaurants in Popular Locations",
            content: [
                {
                    text: "Hotel Pushp Villa, Tajganj", href: "#"
                },
                {
                    text: "Hotel Yamuna View, Rakabganj", href: "#"
                },
                {
                    text: "Hotel Clarks Shiraz, Agra Cantt", href: "#"
                },
                {
                    text: "ITC Mughal, Tajganj", href: "#"
                },
                {
                    text: "Taj Hotel & Convention Centre, Tajganj", href: "#"
                },
                {
                    text: "Jaypee Palace Hotel, Tajganj", href: "#"
                },
                {
                    text: "The Gateway Hotel, Tajganj", href: "#"
                },
                {
                    text: "Hotel Marina, Civil Lines", href: "#"
                },
                {
                    text: "The Oberoi Amarvilas, Tajganj", href: "#"
                },
                {
                    text: "Hotel Amar, Tajganj", href: "#"
                },
                {
                    text: "Trident Hotel, Tajganj", href: "#"
                },
                {
                    text: "Mansingh Palace, Tajganj", href: "#"
                },
                {
                    text: "Wyndham Grand, Tajganj", href: "#"
                },
                {
                    text: "Hotel Howard Plaza, Tajganj", href: "#"
                }
            ]
        },
    ];

    return (
        <div className="accordion_sec">
            <div className="container">
                <h2>Explore options near me</h2>
                {data.map((item, index) => {
                    return (
                        <AcordianItem
                            key={index}
                            title={item.title}
                            content={item.content}
                        />);
                })}
            </div>
        </div>
    )
}

export default Accordian
