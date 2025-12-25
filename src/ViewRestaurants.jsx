import React, { useState } from 'react';


import Header from './Components/Header';
import Log_in from './Components/Log_in';
import Sign_up from './Components/Sign_up';
import Banner from './ViewRestaurantsComponents/Banner'
import './ViewRestaurantsComponents/ViewRestaurantStyle.css';
import { ViewRestaurantsCards } from './ViewRestaurantsComponents/ViewRestaurantsCards';
import { CollectionCards } from './ViewRestaurantsComponents/CollectionCards';
import Accordion from './Components/Accordian'
import Footer from './Components/Footer'

const ViewRestaurants = () => {
    const [display, Setdisplay] = useState(false);
    const [Loginshow, Setloginshow] = useState(false);
    const [Signshow, Setsignshow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [phone, setPhone] = useState("");

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);


    return (
        <div className="view-restaurants">
            <Header className="tab_page"
                display={display}
                Setdisplay={Setdisplay}
                Loginshow={Loginshow}
                Setloginshow={Setloginshow}
                Signshow={Signshow}
                Setsignshow={Setsignshow}
            />

            {/* 👇 Add these modals so they show when triggered */}
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
            <Banner Loginshow={Loginshow}
                Setloginshow={Setloginshow} />
            <ViewRestaurantsCards open={open}
                setOpen={setOpen}
                index={index}
                setIndex={setIndex}
            />
            <CollectionCards />
            <Accordion />
            <Footer />
        </div>
    );
};

export default ViewRestaurants;