import React from "react";
import './ExploreMenu.css';
import { menu_list } from "../../Assets/assets";

export default function ExploreMenu({category, setCategory})
{
    return(
        <div className="explore-menu" id="explore-menu">
            <h1>Explore our Menu</h1>
            <div className="explore-menu-list">
                {menu_list.map((item, index)=>{
                    return(
                        <div key={index} className="explore-menu-item" onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}