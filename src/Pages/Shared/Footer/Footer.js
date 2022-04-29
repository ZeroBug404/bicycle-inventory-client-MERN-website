import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p className='fw-bold text-center'> Copyright© {year} - All rights reserved</p>
            <div></div>
        </footer>
    );
};

export default Footer;