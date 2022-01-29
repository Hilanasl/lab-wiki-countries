import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CountriesDetails = ({ countries }) => {
  const [country, setCountry] = useState({});
  const [borders, setBorders] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/' + params.id)
      .then(({ data }) => {
        setCountry(data);
      })
      .catch((e) => console.log(e));
  });

  useEffect(() => {
    if (!country.borders) return;
    const bordersToAdd = country.borders.map((countryCode) => {
      const foundCountry = countries.find(
        (country) => country.alpha3Code === countryCode
      );
      return foundCountry.name.common;
    });
    setBorders(bordersToAdd);
  }, [country]);

  if (!country.name) return <div>Loading</div>;
  return (
    <div className="col-7">
      <img
        style={{ width: '40%' }}
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt={country.name}
      />
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borders.length === 0 ? (
                  <p>{country.name.common} has no bordering countries</p>
                ) : (
                  borders.map((c, i) => {
                    console.log(country.borders);
                    return (
                      <li key={c}>
                        <Link to={`/${country.borders[i]}`}>{c}</Link>
                      </li>
                    );
                  })
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountriesDetails;
