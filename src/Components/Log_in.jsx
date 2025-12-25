import { useState } from 'react'
const cross = <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 fJjczH"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg>
import India_flag from '../assets/in.webp'
const bottom_arrow = <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="16" height="16" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 fITwjb"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>
const Email = <svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 fLhyDr"><title>mail-fill</title><path d="M10 9.58c-1.62 0-10-4.76-10-4.76v-0.74c0-0.92 0.74-1.66 1.66-1.66h16.68c0.92 0 1.66 0.74 1.66 1.66l-0.020 0.84c0 0-8.28 4.66-9.98 4.66zM10 11.86c1.78 0 9.98-4.46 9.98-4.46l0.020 10c0 0.92-0.74 1.66-1.66 1.66h-16.68c-0.92 0-1.66-0.74-1.66-1.66l0.020-10c0 0 8.36 4.46 9.98 4.46z"></path></svg>
const Google = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>


const Log_in = ({ Loginshow, Setloginshow, showError, setShowError, phone, setPhone, toggleView }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        if (phone.trim() === '') {
            setShowError(true);
        } else {
            setShowError(false);
        }
    };

    return (
        <div className={`Log_in_sec ${Loginshow ? "Log_in_sec_show" : ""}`}>
            <div className="box">
                <div className="top_row">
                    <h2>Login</h2>
                    <div onClick={() => Setloginshow(false)}>{cross}</div>
                </div>
                <form action="#" className='Login_form' onSubmit={handleSubmit}>
                    <div className="number_sec">
                        <div className="flag">
                            {<img src={India_flag} className='India_flag' alt="" />}
                            <div className="text">
                                <p>+91</p> <i className="ri-arrow-down-s-line"></i>
                            </div>
                        </div>
                        <input type="text" placeholder='Phone' className='phone' onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="error-text" style={{ visibility: showError ? 'visible' : 'hidden' }}>Please enter phone number</div>
                    <input type="submit" className='submit' value='Send One Time Password' />
                    <div className="border-line">
                        <hr />
                        <span>or</span>
                    </div>
                </form>
                <button className='sign_in_with_email'>
                    {Email}
                    <span>Continue with Email</span>
                </button>
                <button className='sign_in_with_google'>
                    {Google}
                    <span>Sign in with Google</span>
                </button>
                <hr></hr>
                <p>New to Zomato? <span onClick={toggleView}>Create account</span></p>
            </div>
        </div>
    )
}

export default Log_in



