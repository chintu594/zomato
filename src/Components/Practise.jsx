import { useState } from 'react'
const Practise = () => {
    /*     const [name, setName] = useState("Chintu mewara");
        const [email, setEmail] = useState("chintumewara816@gmail.com");
        const [password, setPassword] = useState("Chintu@?123"); */

    const [skills, setSkills] = useState([]);

    return (


        <div>
            {/*   <div>
                <h1>Get input text</h1>
                <input type="text" value={name} placeholder='Enter your text' onChange={(event) => setName(event.target.value)} />
                <input type="password" value={email} placeholder='Enter your password' onChange={(event) => setEmail(event.target.value)} />
                <input type="email" value={password} placeholder='Enter your email' onChange={(event) => setPassword(event.target.value)} />
                <h1>{name}</h1>
                <h1>{email}</h1>
                <h1>{password}</h1>
                <button onClick={() => { setName(""); setEmail(""); setPassword(""); }}>Clear Values !</button>
            </div> */}
            <div>
                <h1>Select your Skills</h1>
                <input type="checkbox" id='php' value="php" />
                <label htmlFor="php">Php</label><br />

                <input type="checkbox" id='html5' value="html5" />
                <label htmlFor="html5">html5</label><br />

                <input type="checkbox" id='css3' value="css3" />
                <label htmlFor="css3">css3</label><br />

                <input type="checkbox" id='Javascript' value="Javascript" />
                <label htmlFor="Javascript">Javascript</label><br />
            </div>
        </div>
    )
}

export default Practise
