import React from 'react';

const Footer = () => {
    return (
        <div className="text-center text-white bg-light text-dark">
            <p className='m-0 '>&copy; All rights reserved Geo sports {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;