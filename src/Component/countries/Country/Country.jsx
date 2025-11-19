import React, { useState } from "react";
import "./country.css";
const Country = ({ country, handleVisitedCountry }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // if(visited){
    //     setVisited(false);
    // }else{
    //     setVisited(true);
    // }
    // setVisited(visited? false:true);
    setVisited(!visited);
    handleVisitedCountry(country.name.common);
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>Capital:{country.capital.capital}</p>
      <p>Region:{country.region.region}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Large" : "Small"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
