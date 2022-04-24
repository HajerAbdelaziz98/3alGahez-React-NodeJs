import React from 'react';
import './Info.css'

// import salad from '../../images/salad.png'
// import delivery from '../../images/delivery.png'
// import homemadeFood from '../../images/food-image-big.png'
import girlCake from '../../images/girl-cake.png'
import { Link } from 'react-router-dom';
import Slide from "react-reveal/Slide"

const InfoBar = () => {
    return (
        <>
            <Slide left cascade>
                <div>
                    <div className='info-section'>
                        <div className='info-img' >
                            <img alt="..." className='girl-img' src={girlCake} />
                        </div>
                        <div className='info-txt'>
                            <h2> We offer the most delicious homemade food to our beloved customers</h2>
                            <p> Meals everyday, right away</p>
                            <div>
                                <div className='info-now'></div>
                                <Link to="/signup" className='info-btn'>Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </>
    );
}

export default InfoBar;