import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
    identityNumber?: string;
}

const AddPerson = () => {
    const [person, setPerson] = useState<Person>({
        firstName: '',
        middleName: '',
        lastName: '',
        identityNumber: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPerson((prevPerson) => ({
            ...prevPerson,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/person', person);
            if (response.status === 201) {
                alert('Person added successfully!');
                setPerson({
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    identityNumber: '',
                });
            }
        } catch (error) {
            console.error('Error adding person:', error);
            alert('An error occurred while adding the person.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4 bg-gray-100 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Add Person</h2>
            <p className="mb-4">Enter name fields and an identity number:</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                        First Name:
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={person.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="middleName">
                        Middle Name:
                    </label>
                    <input
                        type="text"
                        name="middleName"
                        id="middleName"
                        value={person.middleName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                        Last Name:
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={person.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="identityNumber">
                        Identity Number:
                    </label>
                    <input
                        type="text"
                        name="identityNumber"
                        id="identityNumber"
                        value={person.identityNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add Person
                </button>
            </form>
        </div>
    );
};

export default AddPerson;