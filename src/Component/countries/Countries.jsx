import React, { use } from "react";
import Country from "./Country/Country";



const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;


  return (
    <div>
      <h3>In the countries: {countries.length}</h3>
      {
        countries.map(country=> <Country country={country}></Country> )
      }
    </div>
  );
};

export default Countries;
