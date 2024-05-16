import React from 'react';
import SearchComponent from './Components/SearchComponent';
import AddPerson from './Components/AddPerson';
// What features and components are needed? 
// Search and 
// >PersonList: Show a list of persons from the backend.
// >AddPerson: Render a form to create a person.
// >SearchComponent: Search a person from the list
// Create the React components?
// Make component logic: form handling, API requests, state management, and user interactions.
// Style the components.
// Connect frontend to backend with API requests.
// Test and debug components and functionalities.
// Document the backend (and possibly frontend)

function App() {
  return (
    <div>
      <AddPerson />
      <SearchComponent />
    </div>  );
}

export default App;
