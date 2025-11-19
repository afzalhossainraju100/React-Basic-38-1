import React from "react";
import "./country.css";
const Country = ({ country }) => {
  const handleVisited = () => {
    console.log("Visited");
  };
  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>Capital:{country.capital.capital}</p>
      <p>Region:{country.region.region}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Large" : "Small"}
      </p>
      <button onClick={handleVisited}>Not Visited</button>
    </div>
  );
};

export default Country;
