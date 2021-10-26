import React from "react";

const Cards = (props) => {
    const {country} = props;    // destructuring
    
 //regex pour formater ma population, separe les chiffres
    const numberFormat = (x) => {
        return x.toString ().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        // recuperation des donnees de l'API
        <li className="card">
            <img src={country.flags.svg} alt= "flag"/> 
            <div className = "data-container">
                <ul>
                    <li>{country.name.common}</li>
                    <li>{country.capital}</li>
                    <li>Pop. {numberFormat(country.population)}</li>
                </ul>

            </div>
        </li>
    );
};

export default Cards;