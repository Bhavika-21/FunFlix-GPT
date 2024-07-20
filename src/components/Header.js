import LOGO from "../assets/Netflix_Logo.png"
import React from 'react'

const Header = () => {
  return (
    <div className="z-10 absolute px-8 py-4 bg-gradient-to-b from-black w-full">
        <img
        className="w-[195px]"
        src={LOGO}
        alt="logo"
        
        />
        
    </div>
  )
}

export default Header