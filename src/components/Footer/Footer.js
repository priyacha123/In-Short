import React from 'react';
import './Footer.css';
  
const Footer = () => {
  return (
    <div className='footer'>
        <span className='name'>
            Inshorts clone made by -{" "}
            <a fref = "" target='_blank'>Priya Kumari</a>
        </span>
      <hr style = {{ width: "90%" }} />
      <div className='iconContainer'>
        <a href='' target='_blank'>
        <i className="fa-brands fa-instagram"></i>
        </a>
        <a href='' target='_blank'>
        <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href='' target='_blank'>
        <i className="fa-brands fa-github"></i>
        </a>
       
      </div>
    </div>
  )
}

export default Footer
