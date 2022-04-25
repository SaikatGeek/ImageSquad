import React from 'react'
import { Link } from "react-router-dom";

const HeaderLink = () => {
  return (
    <>
        <li className="nav-item">
            <Link 
                className="nav-link " 
                to="#"
                onClick={() => {
                    window.open('https://github.com/SaikatGeek/ImageSquad', '_blank');
                }}
            >
                Project Code
            </Link>
        </li>

        <li className="nav-item">
            <Link 
                to="about" 
                className="nav-link" 
                aria-current="page" 
            >
                About
            </Link>
        </li>
        
        <li className="nav-item">
            <Link 
                to="credit" 
                className="nav-link " 
                aria-current="page" 
            >
                Credit
            </Link>
        </li>
    </>
  )
}

export default HeaderLink