import { useState } from 'react'
import Dining from './Dining'
import Delivery from './Delivery'
import Nightlife from './Nightlife'

import DiningImg from '../assets/tab_btn1_default.avif'
import DiningImgActive from '../assets/tab_btn1_active.avif'

import DeliveryImg from '../assets/tab_btn2_default.webp'
import DeliveryImgActive from '../assets/tab_btn2_active.webp'

import NightlifeImg from '../assets/tab_btn3_default.webp'
import NightlifeImgActive from '../assets/tab_btn3_active.webp'

const Tab = () => {
    const [activeTab, setActiveTab] = useState('dining');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div>
            <div className="tab-container">
                <div className="tabs-btns">
                    <div className="container">
                        <ul className="tabs">
                            <li className={activeTab === 'dining' ? 'tab active' : "tab"} onClick={() => handleTabClick('dining')}>
                                <div className="bg">
                                    <img src={activeTab === 'dining' ? DiningImgActive : DiningImg} alt="" loading="lazy" />
                                </div>
                                <span>Dining Out</span>
                            </li>
                            <li className={activeTab === 'delivery' ? 'tab active' : "tab"} onClick={() => handleTabClick('delivery')}>
                                <div className="bg">
                                    <img src={activeTab === 'delivery' ? DeliveryImgActive : DeliveryImg} alt="" loading="lazy" />
                                </div>
                                <span>delivery</span>
                            </li>
                            <li className={activeTab === 'nightlife' ? 'tab active' : "tab"} onClick={() => handleTabClick('nightlife')}>
                                <div className="bg">
                                    <img src={activeTab === 'nightlife' ? NightlifeImgActive : NightlifeImg} alt="" loading="lazy" />
                                </div>
                                <span>nightlife</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    {activeTab === "dining" && <Dining />}
                    {activeTab === 'delivery' && <Delivery />}
                    {activeTab === 'nightlife' && <Nightlife />}
                </div>
            </div>
        </div>
    )
}

export default Tab