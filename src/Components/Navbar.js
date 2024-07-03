import React, {useState} from 'react';
import './Navbar.css';
import {assets} from '../Assets/assets';

export default function Navbar(){
    const [menu, setMenu] = useState("home");

    return(
        <div className = "navbar">
            <img className="logo" src = {assets.logo} alt = 'logo'/>
            <ul className="navbar-menu">
                <li className={menu==="home"?"active":""} onClick={()=>setMenu("home")}>Home</li>
                <li className={menu==="menu"?"active":""} onClick={()=>setMenu("menu")}>Menu</li>
                <li className={menu==="contact-us"?"active":""} onClick={()=>setMenu("contact-us")}>Contact Us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search" style={{height: "20px"}}/>
                <div className="navbar-cart-icon">
                    <img src={assets.cart_icon} alt="cart" style={{height: "20px"}}/>
                    <div className="dot"></div>
                </div>
                <button className="login">Log In</button>
            </div>
        </div>
    );
}