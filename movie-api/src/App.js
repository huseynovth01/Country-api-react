import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() =>{
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response => setCountries (response.data));
  },[]);

  return (
    <div className="App">
      <h1>Countries</h1>
      {countries.map(country => {
        return (
          <div key={country.name.common}>
            <h2>{country.name.common}</h2>
            <h4>{country.capital}</h4>
            <p>
              <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
