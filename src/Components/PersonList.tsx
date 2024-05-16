import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonItem from './PersonItem';

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  identityNumber: string;
}

const PersonList = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/persons');
        setPersons(response.data);
      } catch (error) {
        console.error('Error fetching persons:', error);
      }
    };

    fetchPersons();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Person List</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        {persons.map((person) => (
          <PersonItem key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PersonList;