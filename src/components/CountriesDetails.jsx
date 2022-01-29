import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CountriesDetails = ({ countries }) => {
  const [country, setCountry] = useState({});
  const params = useParams();
  const oneCountry = countries.find(
    (country) => country.alpha3Code === params.id
  );
  //   console.log('one country:', oneCountry);
  //   const currentCountry = oneCountry[0];

  return (
    <div className="col-7">
      <img
        style={{ width: '40%' }}
        src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`}
      />
      <h1>{oneCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{oneCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {oneCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {oneCountry.borders.map((border) => {
                  const borderCountry = countries.filter(
                    (country) => country.alpha3Code === border
                  );
                  return (
                    <li key={borderCountry[0].alpha3Code}>
                      <Link to={`/countries/${borderCountry[0].alpha3Code}`}>
                        {borderCountry[0].flag} {borderCountry[0].name.common}
                      </Link>{' '}
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountriesDetails;
