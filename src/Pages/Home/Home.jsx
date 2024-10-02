import React from 'react';
import { useState } from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';

export default function Home()
{
    const [category, setCategory] = useState("All");

    return(
        <div className="home">
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
        </div>
    )
}