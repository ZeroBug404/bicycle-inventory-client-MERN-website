import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className=''>
            <p className='fw-bold text-center'> CopyrightÂ© {year} - All rights reserved</p>
            <div></div>
        </footer>
    );
};

export default Footer;