import React from 'react';
import banner from '../../../images/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='banner-container'>
                <img className='bannerimage' src={banner} alt="" />
                <h2 className='banner-title'>Life is Better On the Bike</h2>
                <div className='banner-btn'>
                    <button className='banner-btn-1'>Discover Our Services</button>
                    <button className='banner-btn-2'>Discover Our Bikes</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;