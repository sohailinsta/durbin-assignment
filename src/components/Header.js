import React from 'react'
import "./Header.css";
function Header() {
  return (
    <div className="main-header">
        <div className="logo-title">
            <p className="text-durbin">
             Durbin   
            </p>
            <img className="logo-durbin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxHz60CKTBNILejpnPeuM9cWORr7QVjks_Q&usqp=CAU" alt="durbin"/>
        </div>
        <div className="product-container">
            <p className="products-text">
                Products
            </p>
            <p className="products-text">
                Client
            </p>
            <p className="products-text">
                Partner
            </p>
            <p className="products-text">
                Career
            </p>
            <p className="products-text">
                About
            </p>
            <div className="sign-in">
                <div className="sign-in-text">
                    sign-in
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header