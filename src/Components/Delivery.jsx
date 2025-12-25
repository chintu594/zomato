import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Cards from './Cards';

import * as images from "../assets"
const Delivery = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const navigate = useNavigate();

    const goToCardPage = (restaurantName) => {
        const slug = restaurantName.toLowerCase().replace(/\s+/g, '-'); // space ko hyphen me convert
        navigate(`/${slug}/restaurants`);
    };

    const title = ["Pizza", "Biryani", "Veg Meala", "Cake", "Burger", "Chicken", "North Indian", "Thali", "Paneer", "Rolls", "Sweets", "Dosa"]
    const carData = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        img: images[`Delivery_first_slider_item${i + 1}`],
        title: title[i],
    }));

    return (
        <div>
            {/* .filter-btns */}
            <div className="filter-btns">
                <div className="container">
                    <div className="btn_row">
                        <Link to="#" className="btn">Filters</Link>
                        <Link to="#" className="btn">Open Now</Link>
                        <Link to="#" className="btn">Rating: 4.5+</Link>
                    </div>
                </div>
            </div>
            <div className="banner-sec">
                <div className="container">

                    <Link to="#" className="banner_img">{/* Optional banner image here */}</Link>
                </div>
            </div>
            <div className="collection delivery">
                <div className="container">
                    <h2>Inspiration for your first order</h2>
                    <div className="slider-nav">
                        <button ref={prevRef} className="nav-arrow prev"></button>
                        <button ref={nextRef} className="nav-arrow next"></button>
                    </div>
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={6}
                        modules={[Navigation, Autoplay]}
                        /*   speed={800}  */
                        loop={true}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}

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
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}

                        breakpoints={{
                            320: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1200: { slidesPerView: 6 },
                        }}
                        className="slider"
                    >
                        {carData.map(({ id, img, title }, index) => (
                            <SwiperSlide key={id}>
                                <Link to="#" className="slide-card" onClick={() => goToCardPage(title)}>
                                    <img
                                        src={img}
                                        loading="lazy"
                                        alt={title}
                                    />
                                    <h3>{title}</h3>
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

export default Delivery;
