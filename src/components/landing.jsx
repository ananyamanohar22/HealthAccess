import React from 'react'
import './landing.css'
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div>
    <div className='home'>
        <div className='home_details'>
            <h1>Preview 2024 plans & prices now!</h1>
            <p>Check out plans now. Enroll or renew from November 1 to december 25 for coverage to start January 1</p>
            <button className='home_btn'><b>Preview health plans and prices</b></button>
            <p>Looking for coverage for a small business</p>
        </div>
        
    </div>
    <div className='serviceContainer'>
<h2 className='heading'>Our Services</h2>
<div className="options2">
  <div className='service'>TeleMedicine</div>
  <div className='service'>24/7 Support</div>
  <button onClick={()=>navigate("/bookingPage") } className='service'>Appointment Booking</button>
  <div onClick={()=>navigate("/medicine")}  className='service'>Order Medicine </div>
  <div onClick={()=>navigate("/Edu")}  className='service'>Information and Education </div>
</div>

    </div>
    </div>
  )
}