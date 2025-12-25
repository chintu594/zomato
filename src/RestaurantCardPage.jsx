import React, { useState } from 'react';
import Header from './Components/Header';
import Log_in from './Components/Log_in';
import Sign_up from './Components/Sign_up';
import InfoHeadSec from './RestaurantCardPage/InfoHeadSec';

/* import './ViewRestaurantsComponents/ViewRestaurantStyle.css'; */

import './Home.css'

import Footer from './Components/Footer'

export const RestaurantCardPage = () => {
    const [display, Setdisplay] = useState(false);
    const [Loginshow, Setloginshow] = useState(false);
    const [Signshow, Setsignshow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [phone, setPhone] = useState("");

    return (
        <div>
            <Header className="tab_page"
                display={display}
                Setdisplay={Setdisplay}
                Loginshow={Loginshow}
                Setloginshow={Setloginshow}
                Signshow={Signshow}
                Setsignshow={Setsignshow}
            />

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
            <InfoHeadSec />
          
            <Footer />
        </div>
    );
};
