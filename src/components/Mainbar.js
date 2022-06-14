import React from 'react'
import "./Mainbar.css";
function Mainbar() {
  return (
    <div className="main-bar">
        <div className="lng-x-text-flex">
        <div className="x-text">
            X
        </div>
        <div className="lng-text">
            lngest
        </div>
        </div>
        <div  className="your-device-text">
            Your devices on a single pane of glasss
        </div>
        <img className="laptop-img" src="https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-laptop-icon-png-image_1871608.jpg" alt="laptop"/>
        <div className="contact-us-text">
            <div className="contact-text">
                Contact Us
            </div>
        </div>
    </div>

  )
}

export default Mainbar