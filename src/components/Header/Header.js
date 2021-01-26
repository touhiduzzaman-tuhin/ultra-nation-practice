import React from 'react';
import logo from '../../images/country.png'
import './Header.css';

const Header = () => {
    return (
        <div className='countryHeader'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/country">Country</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;