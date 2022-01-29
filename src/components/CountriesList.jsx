import { Link } from 'react-router-dom';
import React from 'react';

const CountriesList = ({ countries }) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        <ul>
          {countries.map((country) => {
            return (
              <li
                className="list-group-item list-group-item-action"
                key={country.alpha3Code}
              >
                <Link to={country.alpha3Code}>
                  <p>
                    <img
                      src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    />
                  </p>
                  <p>{country.alpha3Code}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CountriesList;
