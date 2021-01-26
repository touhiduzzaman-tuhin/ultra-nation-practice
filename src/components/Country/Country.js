import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import CountryCart from '../CountryCart/CountryCart';
import CountryDetails from '../CountryDetails/CountryDetails';
import './Country.css';

const Country = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => {
            setCountries(data)
        })
    }, [])

    const handleAddCountry = (country) => {
        // console.log('Adding Country', country)
        const newCountry = [...selectedCountry, country];
        setSelectedCountry(newCountry);
;    }
    return (
        <div className='mainCountryArea'>
            <div className='countryInputArea'>
                <h3>
                    <input autoFocus class type="text" name="" id=""/>
                    &nbsp;&nbsp;&nbsp;<FontAwesomeIcon className='cartStyle' icon = {faShoppingCart}></FontAwesomeIcon>
                    <span className='cartLength'>{selectedCountry.length}</span>
                </h3>
            </div>
            <div className="country-area">
                <div className="country-details">
                    {
                        countries.map(country => <CountryDetails key={country.alpha3Code} handleAddCountry = {handleAddCountry} country={country}></CountryDetails>)
                    }
                </div>
                <div className="country-cart">
                    <CountryCart key={selectedCountry.alpha3Code} cart = {selectedCountry}></CountryCart>
                </div>
            </div>
        </div>
    );
};

export default Country;