import React from 'react';
import './HomeHeader.css';
import { Link } from 'react-router-dom';
import Slide from "react-reveal/Slide"

function HomeHeader() {
    return (
        <>
            <div className='home-header'>
                <Slide left>
                    <div className="hero-text">
                        <div className='w-50'>
                            <h2> Your homemade food is here</h2>
                        </div>
                        <p> Explore it </p>
                        <div>
                            <div className='explore-now'></div>
                            {/* <a className='exp-btn' href='/menu'> Explore Now </a> */}
                            <Link className='exp-btn' to='/menu'> Order Now !!! </Link>
                        </div>
                    </div>
                </Slide>
            </div>
        </>
    )
}

export default HomeHeader;