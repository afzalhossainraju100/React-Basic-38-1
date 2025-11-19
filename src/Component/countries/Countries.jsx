import React, { use, useState } from "react";
import Country from "./Country/Country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountry = (Country) => {
    const newvisitedCountries = [...visitedCountries, Country];
    setVisitedCountries(newvisitedCountries);
    console.log(newvisitedCountries);
  }
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h2>In the countries: {countries.length}</h2>
      <h3>Total Country Visited: {visitedCountries.length} </h3>
      <ol>
        {
          visitedCountries.map(country => <li>{country}</li>)
        }
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            Key={country.ccn3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
