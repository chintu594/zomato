import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import intro_Zomato_Logo from './assets/8313a97515fcb0447d2d77c276532a511583262271.avif';
import india_flag from './assets/in.webp';
import Log_in from './Components/Log_in.jsx';
import Sign_up from './Components/Sign_up.jsx';

const right_arrow = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#1C1C1C"
        width="15"
        height="15"
        viewBox="0 0 20 20"
        aria-labelledby="icon-svg-title- icon-svg-desc-"
        role="img"
        className="sc-rbbb40-0 jKmKoK"
    >
        <title>chevron-right</title>
        <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
    </svg>
);

// ✅ City list array
const cities = [
    "Agra", "Ahmedabad", "Ajmer", "Alappuzha", "Allahabad", "Amravati", "Amritsar",
    "Aurangabad", "Bengaluru", "Bhopal", "Bhubaneswar", "Chandigarh", "Chennai",
    "Coimbatore", "Cuttack", "Darjeeling", "Dehradun", "Delhi NCR", "Dharamshala",
    "Gangtok", "Goa", "Gorakhpur", "Guntur", "Guwahati", "Gwalior", "Haridwar",
    "Hyderabad", "Indore", "Jabalpur", "Jaipur", "Jalandhar", "Jammu", "Jamnagar",
    "Jamshedpur", "Jhansi", "Jodhpur", "Junagadh", "Kanpur", "Khajuraho", "Khamgaon",
    "Kharagpur", "Kochi", "Kolhapur", "Kolkata", "Kota", "Lucknow", "Ludhiana",
    "Madurai", "Manali", "Mangalore", "Manipal", "Meerut", "Mumbai", "Mussoorie",
    "Mysore", "Nagpur", "Nainital"
];

const Home = () => {
    const [display, Setdisplay] = useState(false);
    const [Loginshow, Setloginshow] = useState(false);
    const [Signshow, Setsignshow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

   

    /* states define karte hai then parent se child ki aur bhejte hai for example here hmne 
    header call ke sath states export kari hai, aur there header.jsx mai function banate time 
    usmai in states ke name import kar lenge aur phir in states ko vha tag ke sath use karenge. */

    const goToCity = (cityName) => {
        navigate(`/${cityName.toLowerCase()}`);
    };

    return (
        <div>
            <Header
                display={display}
                Setdisplay={Setdisplay}
                Loginshow={Loginshow}
                Setloginshow={Setloginshow}
                Signshow={Signshow}
                Setsignshow={Setsignshow}
            />

            <section className="intro_sec">
                <div className="intro-content">
                    <img src={intro_Zomato_Logo} alt="Zomato Logo" />
                    <h1>Find the best restaurants, cafés and bars in India</h1>
                </div>
            </section>

            <section className="restra-list">
                <div className="container">
                    <h2>
                        Popular locations in <img src={india_flag} alt="India Flag" />
                        <span>India</span>
                    </h2>
                    <p>
                        From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all.
                        Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.
                    </p>
                    <ul>
                        {cities.map((city) => (
                            <li key={city}
                                onClick={() => goToCity(city)}
                                style={{ cursor: "pointer" }}>
                                <div className="city-link">
                                    <h5>{city} Restaurants</h5>
                                    {right_arrow}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <Footer />

            <Sign_up
                Signshow={Signshow}
                Setsignshow={Setsignshow}
                showError={showError}
                setShowError={setShowError}
                phone={phone}
                setPhone={setPhone}
                toggleView={() => {
                    Setsignshow(false);
                    Setloginshow(true);
                }}
            />

            <Log_in
                Loginshow={Loginshow}
                Setloginshow={Setloginshow}
                showError={showError}
                setShowError={setShowError}
                phone={phone}
                setPhone={setPhone}
                toggleView={() => {
                    Setsignshow(true);
                    Setloginshow(false);
                }}
            />
        </div>
    );
};

export default Home;
