import React from 'react'
import axios from 'axios'
function ApiTest() {
    // Define the API endpoint URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Make a GET request using Axios
axios.get(apiUrl)
  .then((response) => {
    // Handle the successful response here
    console.log('Data:', response.data);
  })
  .catch((error) => {
    // Handle any errors here
    console.error('Error:', error);
  });

  return (
    <div>ApiTest</div>
  )
}

export default ApiTest