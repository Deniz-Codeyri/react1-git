import React from 'react'
import "./css/style.css"
import sekil from '/logo.svg'
import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav>
        
        <div className="logo">
          <img src={sekil} alt="" />

          <h1>
          food<span>wagon</span>
          </h1>

        </div>

        <p>
          Deliver to:<FaLocationDot/> Current Location Mohammadpur Bus Stand,Dhaka
        </p>

    </nav>
  )
}

export default Navbar