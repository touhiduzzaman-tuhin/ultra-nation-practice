import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CountryDetails.css';

const CountryDetails = (props) => {
    // console.log(props.handleAddCountry())
    const handleAddCountry = props.handleAddCountry;
    const {name, nativeName, region, subregion, population, area, capital, flag, demonym, borders, languages} = props.country;
    return (
        <div className="country-details-style">
            <div className='left-side-style'>
                <p>Name : {name}</p>
                <p>Native Name : {nativeName}</p>
                <img src={flag} alt=""/>
                <p>Population : {population} People</p>
            </div>
            <div className='middle-side-style'>
                <p>Capital : {capital}</p>
                <p>Area : {area} km²</p>
                <p>Known As - {demonym}</p>
                <button onClick = { () => handleAddCountry(props.country)} className='addCountryButton'>
                    <FontAwesomeIcon icon={ faShoppingCart }></FontAwesomeIcon>
                    &nbsp; Add Country
                </button>

            </div>
            <div className="right-side-style">
                <p>Region : {region}</p>
                <p>Sub-Region : {subregion}</p>
                <p>languages : {languages[0].name} & {languages[0].nativeName}</p>
                <p>Borders : {borders.join('-')}</p>
            </div>
        </div>
    );
};

export default CountryDetails;