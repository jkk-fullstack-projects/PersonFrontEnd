import React, { useState } from 'react';
import axios from 'axios';

interface Person {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  identityNumber?: string;
}

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Person[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const isIdentityNumber = /^\d{8}-\d{4}$/.test(searchTerm);
    const params = { [isIdentityNumber ? 'identityNumber' : 'name']: searchTerm };

    try {
      const response = await axios.get('http://localhost:8080/api/search', { params });

      if (response.data.length === 0) {
        setError('No results found.');
      } else {
        setSearchResults(response.data);
        setError(null);
      }
    } catch (error) {
      console.error('API Error:', error);
      setError('An error occurred while fetching the search results.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Search Component</h2>
      <p className="mb-4">Enter a name or an identity number: Clicking empty search field returns all names</p>
      <form onSubmit={handleFormSubmit} className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter name or identity number"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <h3 className="text-xl font-bold mb-4">Search Results</h3>
      {searchResults.length === 0 && !error && <p>No results found.</p>}
      {searchResults.length > 0 && (
        <ul className="divide-y divide-gray-300">
          {searchResults.map((result) => (
            <li key={result.id} className="py-2">
              {result.firstName} {result.middleName || ''} {result.lastName} - {result.identityNumber || 'N/A'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;