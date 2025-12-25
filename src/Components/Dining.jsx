import { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Cards from './Cards';

import Agra_hotel_collection1 from "../assets/agra_hotel_collection1.avif";
import Agra_hotel_collection2 from "../assets/agra_hotel_collection2.avif";
import Agra_hotel_collection3 from "../assets/agra_hotel_collection3.avif";
import Agra_hotel_collection4 from "../assets/agra_hotel_collection4.avif";
import Agra_hotel_collection5 from "../assets/agra_hotel_collection5.avif";
import Agra_hotel_collection6 from "../assets/agra_hotel_collection6.avif";
import Agra_hotel_collection7 from "../assets/agra_hotel_collection7.avif";
import Agra_hotel_collection8 from "../assets/agra_hotel_collection8.avif";

const red_right_arrow = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="12" height="12" viewBox="0 0 20 20" role="img" className="sc-rbbb40-0 ezrcri">
        <title>right-triangle</title>
        <path d="M5 0.42l10 10-10 10v-20z"></path>
    </svg>
);

const collection_img_arrow = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="10" height="10" viewBox="0 0 20 20" role="img" className="sc-rbbb40-0 gvsUip">
        <title>right-triangle</title>
        <path d="M5 0.42l10 10-10 10v-20z"></path>
    </svg>
);

const carData = [
    { img: Agra_hotel_collection1, title: "Taj View Restaurants", places: "8 Places" },
    { img: Agra_hotel_collection2, title: "Romantic Dining", places: "6 Places" },
    { img: Agra_hotel_collection3, title: "Cafes to Chill", places: "10 Places" },
    { img: Agra_hotel_collection4, title: "Top Picks", places: "12 Places" },
    { img: Agra_hotel_collection5, title: "Blissful Breakfast Places", places: "13 Places" },
    { img: Agra_hotel_collection6, title: "Sky High Sips", places: "11 Places" },
    { img: Agra_hotel_collection7, title: "Great Cafes", places: "15 Places" },
    { img: Agra_hotel_collection8, title: "Best Bars & Pubs", places: "9 Places" }
];

const Dining = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const navigate = useNavigate();

    const goToViewPage = (title) => {
        // Convert title to a slug (lowercase and replace spaces with dashes)
        const slug = title.toLowerCase().replace(/\s+/g, '-');
        navigate(`/${slug}/restaurants`);  // Corrected URL for ViewRestaurants
    };

    return (
        <div>
            <div className="collection">
                <div className="container">
                    <h2>Collections</h2>
                    <div className="upper_text">
                        <h6>Explore curated lists of top restaurants, cafes, pubs, and bars in Agra, based on trends</h6>
                        <Link to="/agra/restaurants">
                            <Link to="#">
                                All collections in Agra {red_right_arrow}
                            </Link>
                        </Link>
                    </div>

                    {/* Custom Navigation Buttons */}
                    <div className="slider-nav">
                        <button ref={prevRef} className="nav-arrow prev"></button>
                        <button ref={nextRef} className="nav-arrow next"></button>
                    </div>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={1000}  // Optional: slide transition speed in ms
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            setTimeout(() => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.destroy();
                                swiper.navigation.init();
                                swiper.navigation.update();
                            });
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                        className="slider"
                    >
                        {carData.map((card, index) => (
                            <SwiperSlide key={index}>
                                <Link to="#" className="slide-card" onClick={() => goToViewPage(card.title)}>
                                    <img src={card.img} alt={card.title} />
                                    <div className="content">
                                        <p>{card.title}</p>
                                        <div>
                                            <span>{card.places}</span>
                                            {collection_img_arrow}
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
            <Cards />
        </div>
    );
};

export default Dining;
