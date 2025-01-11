import React from "react"
import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className='container flexSB'>
        <div className='legal'>
          <p>
            Developed by <span><b>Rafsan & Asif</b></span>
          </p>
        </div>
        <div className='links flexSB'>
          <li>About Us</li>
          <li>Help</li>
          <li>Contact Us</li>
        </div>
      </div>
    </footer>
  )
}

export default Footer
