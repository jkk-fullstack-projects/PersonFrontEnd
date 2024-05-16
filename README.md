# Front-end README

This README provides an overview of the front-end code for your project.

## AddPerson Component

The `AddPerson` component is responsible for adding a person to the system. It displays a form where the user can enter the person's details such as first name, middle name, last name, and identity number. When the user submits the form, an HTTP POST request is made to the server to add the person.

## SearchComponent

The SearchComponent enables users to search for names and identity numbers. Users can input a name or identity number into the search field,the handleFormSubmit function is triggered with search button clicked. This function sends the API request and updates the displayed search results.

## PersonList

The PersonList component fetches a list of persons from an API using Axios and displays them as PersonItem components. It manages the state of the persons using the useState hook and fetches the data once on component mount using the useEffect hook.

## PersonItem

The PersonItem component displays the details of a person. It takes a person object as a prop: id, firstName, lastName, and identityNumber. The component renders the person's first name, last name and identity number.

## Dependencies

The following dependencies are required to use the front-end code:
React
axios

## Development Setup

To set up the development environment for the front-end code, follow these steps:

1. Install the dependencies:

   ```Javascript
   npm install

   ```

2. Start the development server:
   ```Javascript
   npm start
   ```
