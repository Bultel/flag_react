import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Countries = () => {
    //Hook
    //nom de ma donnée, et element que je vais appeller pour modifier ma données
    const [data, setData] = useState ([]);
    const [sortedData, setSortedData] = useState ([]);
    const [playOnce, setPlayOnce] = useState (true);
    const [rangeValue, setRangeValue] = useState (40);
    const [selectedRadio, setSelectedRadio] = useState ("");
    const radios = ["Africa", "America", "Asia","Europe", "Oceania"]

    // useEffect permet de faire un unique appele API
    useEffect (() => {
        if (playOnce){ // permet de lancer le fetch une fois
        axios.get (
            "https://restcountries.com/v3.1/all")
            .then((resultat) => setData(resultat.data))
            setPlayOnce (false);
        }

        const sortedCountry = () => {
            // transformation de mon array en objet pour utiliser la methode sort()
            const countryObj = Object.keys(data).map ((i) => data[i]); 
            // utilisation de ma methode sort pour tier dans l'ordre croissant
            const sortedArray = countryObj.sort((a,b) => {
                return b.population - a.population;
            });
           sortedArray.length = rangeValue; //limite a 30 l'entrée de mon array
           setSortedData (sortedArray); // place mon array dans mes data
        };
        sortedCountry();
    }, [data, playOnce, rangeValue]);  // si il y a une modif de ma data dans mon appelle API, relance le fetch

    return (
        <div className = "countries">
            <div className = "sort-container">
                {/* change la valeur de rangeValue selon la target */}
                <input type = "range" min = "1" max = "250" value = {rangeValue}
                onChange = {(event)=> (setRangeValue(event.target.value))} />
                <ul>
                    {radios.map((radio) => {
                        return (
                            <li>
                                <input type = "radio" value = {radio} id = {radio} checked = {radio===selectedRadio}
                                onChange = {(event) => setSelectedRadio(event.target.value)}/>
                                <label htmlFor = {radio}>{radio}</label>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className = "cancel">
                {selectedRadio && <h5 onClick = {() => setSelectedRadio ("")} >Annuler recherche</h5>}
                {/* selectedredaio "" sera pas true du coup il disparaitra */}
            </div>
            <ul className = "countries-list">
                {sortedData.filter((country) => country.region.includes(selectedRadio)).map((country) => (
                    // les données de country sont envoyé a cards 
                    <Cards country = {country} key = {country.name}/>  
                ))}
            </ul>
        </div>
        
    );
};

export default Countries;