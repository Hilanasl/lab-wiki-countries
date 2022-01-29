import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="countries" />
            <Route
              path=":id"
              element={<CountriesDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
