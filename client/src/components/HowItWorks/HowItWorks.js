import React from 'react';
import choose from '../../images/choose-food.png';
import delivery from '../../images/delivery.png';
import eat from '../../images/eat.png';
import './works.css';
import Slide from "react-reveal/Slide"

function HowItWorks() {
    return (
        <>
        <Slide right cascade>
        <h1 className='text-center m-4'> How it works</h1>
            <div className='wrk-steps d-flex flex-row'>
                <div className='wrk-card'>
                    <img alt="..." className='wrk-card-img' src={choose} />
                    <div className='wrk-card-txt'>
                        <h3> Choose Your Meals</h3>
                        <p> 20+ meals to choose from</p>
                    </div>
                </div>
                <div className='wrk-card'>
                    <img alt="..." className='wrk-card-img' src={delivery} />
                    <div className='wrk-card-txt'>
                        <h3>We deliver it to you</h3>
                        <p> Choose Your dates for delivery</p>
                    </div>
                </div>
                <div className='wrk-card'>
                    <img alt="..." className='wrk-card-img' src={eat} />
                    <div className='wrk-card-txt'>
                        <h3>Cook & Enjoy</h3>
                        <p> Eat your freshly cooked meal</p>
                    </div>
                </div>
            </div>
        </Slide>
            
        </>
    )
}

export default HowItWorks;