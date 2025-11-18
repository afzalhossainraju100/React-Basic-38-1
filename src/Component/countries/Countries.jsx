import React from "react";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <h3>In the countries: {countries.length}</h3>
    </div>
  );
};

export default Countries;
