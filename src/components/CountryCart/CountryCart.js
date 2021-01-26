import React from 'react';
import './CountryCart.css';

const CountryCart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce( ((total, country) => total + country.population), 0);
    return (
        <div className="country-cart-style">
            <h1>Country Cart</h1>
            <hr/>
            <h3>Total Selected Country {cart.length} </h3>
            <h3>Total Population {totalPopulation}</h3>
            <hr/>
            <h3>Added Country List</h3>
            <hr/>
            <div className='cartAddedCountry'>
                {
                    cart.map(country => 
                        <div> 
                            <p className='countryCart'>
                                {country.name} - <img src={country.flag} alt=""/>
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CountryCart;