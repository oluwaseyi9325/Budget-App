import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading countries...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">🌍 Country Explorer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {countries.map((country) => (
          <div
            key={country.cca3}
            className="bg-white rounded-2xl shadow-md p-5 transition-transform hover:scale-105 border border-gray-200"
          >
            <img
              src={country.flags?.png || country.flags?.svg}
              alt={`${country.name.common} flag`}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{country.name.common}</h2>
            <p className="text-gray-600 mt-1">
              <span className="font-medium">Capital:</span>{' '}
              {country.capital?.join(', ') || 'N/A'}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Region:</span> {country.region}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
