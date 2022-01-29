import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(' https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          {countries.length === 0 ? (
            <div className="loading"> Loading...</div>
          ) : (
            <>
              <CountriesList countries={countries} />
              <Routes>
                <Route
                  path="/:id"
                  element={<CountriesDetails countries={countries} />}
                />
              </Routes>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
