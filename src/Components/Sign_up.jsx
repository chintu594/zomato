import { useState } from 'react'
import { Link } from 'react-router-dom'
const cross = <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 fJjczH"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg>
const Google = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>

const Sign_up = ({ Signshow, Setsignshow, showError, setShowError, phone, setPhone, toggleView }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        if (phone.trim() === '') {
            setShowError(true);
        } else {
            setShowError(false);
        }
    };

    return (
        <div className={`Sign_in_sec ${Signshow ? "Sign_in_sec_show" : ""}`}>
            <div className="box">
                <div className="top_row">
                    <h2>Sign up</h2>
                    <div onClick={() => Setsignshow(false)} style={{ cursor: "pointer" }}>{cross}</div>
                </div>
                <form action="#" className='Login_form' onSubmit={handleSubmit}>
                    <div className="number_sec">
                        <input type="text" placeholder='Phone' className='phone' onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="error-text" style={{ visibility: showError ? 'visible' : 'hidden' }}>Please enter phone number</div>
                    <div className="number_sec Email_sec">
                        <input type="email" placeholder='Email' className='Email phone' onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="error-text" style={{ visibility: showError ? "visible" : "hidden" }}>Please enter Email</div>
                    <div className="checkbox_sec">
                        <input type="checkbox" id='checkbox' value="checkbox" />
                        <label htmlFor="">I agree to Zomato's <Link to="#">Terms of Service</Link>, <Link to="#">Privacy Policy</Link> and <Link to="#">Content Policies</Link></label></div>
                    <input type="submit" className='submit' value='Create account' />
                    <div className="border-line">
                        <hr />
                        <span>or</span>
                    </div>
                </form>
                <button className='sign_in_with_google'>
                    {Google}
                    <span>Sign in with Google</span>
                </button>
                <hr></hr>
                <p>Already have an account? <span onClick={toggleView}>Log in</span></p>
            </div>
        </div>
    )
}

export default Sign_up



