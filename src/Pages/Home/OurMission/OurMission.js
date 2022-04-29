import React from 'react';
import bestCycling from '../../../images/best-cycling.jpg';
import './OurMission.css'
 
const OurMission = () => {
    return (
        <div style={{backgroundColor: '#f0f2f2'}} className=''>
            <div className='container d-flex align-items-center justify-content-between py-5'>
                <div >
                    <h2 style={{color: '#1b3e41', fontSize: '50px', fontWeight: 'bold'}} className='my-4'>The best bicycling experience</h2>
                    <p style={{color: '#1b3e41', fontSize: '17px'}} className='lh-lg my-5 '>Welcome to Yokoo! We are one of the biggest bicycle-families in the world. Our services include all types of repair, search of a perfect bike for every customer, sport events organization and much more. Join our community and become a part of the bike-family.</p>

                    <button className='ourMission-btn'>More about our mission</button>
                </div>
                <div className='d-flex align-items-center justify-content-end'>
                    <img width={'90%'} src={bestCycling} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurMission;