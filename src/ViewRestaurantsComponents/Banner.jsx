import React from 'react'
import View_Restaurant_Banner from "../assets/view-restaurant-banner.avif"

const Banner = ({Loginshow, Setloginshow}) => {
    const plus = <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 iwHbVQ"><title>plus</title><path d="M15.5 9.42h-4.5v-4.5c0-0.56-0.44-1-1-1s-1 0.44-1 1v4.5h-4.5c-0.56 0-1 0.44-1 1s0.44 1 1 1h4.5v4.5c0 0.54 0.44 1 1 1s1-0.46 1-1v-4.5h4.5c0.56 0 1-0.46 1-1s-0.44-1-1-1z"></path></svg>
    const link_icon = <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 iwHbVQ"><title>link</title><path d="M10.8,13.4c-0.5,0-1.1-0.1-1.6-0.3c-0.1,0-0.2,0-0.3,0.1L7.1,15c-0.6,0.6-1.5,0.6-2.1,0s-0.6-1.5,0-2.1l3.1-3.1 c0.6-0.6,1.5-0.6,2.1,0c0,0,0,0,0,0c0.4,0.4,1,0.4,1.4,0c0.2-0.2,0.3-0.4,0.3-0.6c0-0.3-0.1-0.6-0.3-0.8C11.4,8.2,11.2,8,11,7.9 c-0.6-0.4-1.2-0.6-1.9-0.6c-0.9,0-1.8,0.3-2.4,1l-3.1,3.1c-0.6,0.6-1,1.5-1,2.4c0,1.9,1.6,3.5,3.5,3.5c0.9,0,1.8-0.4,2.4-1l2.6-2.6 c0-0.1,0.1-0.1,0.1-0.2C11.2,13.5,11.1,13.4,10.8,13.4L10.8,13.4z"></path><path d="M11.5,3.6L8.9,6.2C8.8,6.2,8.8,6.3,8.8,6.4c0,0.1,0.1,0.2,0.2,0.2h0.1c0.5,0,1.1,0.1,1.6,0.3c0.1,0,0.2,0,0.3-0.1L12.9,5 c0.6-0.6,1.5-0.6,2.1,0s0.6,1.5,0,2.1l-2.3,2.3l0,0l-0.8,0.8c-0.6,0.6-1.5,0.6-2.1,0c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0 c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.6,0.3,0.8c0.3,0.3,0.6,0.5,1,0.7l0.1,0.1l0.2,0.1l0.2,0.1H10l0.3,0.1h0.4h0.2H11h0.3h0.2h0.1 h0.1l0,0c0.6-0.1,1.2-0.5,1.6-0.9l3.1-3.1c1.4-1.4,1.4-3.6,0-4.9C15,2.2,12.8,2.2,11.5,3.6z"></path></svg>
    return (
        <div className="res-view-banner-sec">
            <div className="container">
                <div className="banner">
                    <img src={View_Restaurant_Banner} alt="" />
                    <div className="img-overlay"></div>
                    <div className="description-box">
                        <span>ZOMATO COLLECTIONS</span>
                        <h1>Taj View Restaurants</h1>
                        <p>Relish delish meals while enjoying mesmerizing Taj views at these beauteous restaurants.</p>
                        <div className='place'>8 Places</div>
                    </div>
                    <div className="save-btns">
                        <div>
                            <span className="save-btn" onClick={() => Setloginshow(true)}>{plus} <p>Save Collection</p></span>
                            <span className="link-btn">{link_icon}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner