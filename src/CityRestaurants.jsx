import { useState } from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Sign_up from './Components/Sign_up.jsx'
import Log_in from './Components/Log_in.jsx'
import Accordian from './Components/Accordian.jsx'
import Tab from './Components/Tab.jsx'

const Agra = () => {
    const [display, Setdisplay] = useState(false)
    const [Loginshow, Setloginshow] = useState(false)
    const [Signshow, Setsignshow] = useState(false)
    const [showError, setShowError] = useState(false);
    const [phone, setPhone] = useState("");

    return (
        <div>
            <Header className="tab_page" display={display} Setdisplay={Setdisplay} Loginshow={Loginshow} Setloginshow={Setloginshow} Signshow={Signshow} Setsignshow={Setsignshow} />
            <Tab />
            <Accordian />
            <Footer />
            <Sign_up Signshow={Signshow} Setsignshow={Setsignshow} showError={showError} setShowError={setShowError} phone={phone} setPhone={setPhone} toggleView={() => {
                Setsignshow(false);
                Setloginshow(true);
            }} />
            <Log_in Loginshow={Loginshow} Setloginshow={Setloginshow} showError={showError} setShowError={setShowError} phone={phone} setPhone={setPhone} toggleView={() => {
                Setsignshow(true);
                Setloginshow(false);
            }} />
        </div>
    )
}

export default Agra
