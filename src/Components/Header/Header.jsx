import React from 'react';
import './Header.css';

export default function Header()
{
    return(
        <div className="header">
            <div className="header-content">
                <h1>Order Food Conveniently</h1>
                <p>Place your order from the comfort of your seats while browsing through our various selections of food items from different cuisines.</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}