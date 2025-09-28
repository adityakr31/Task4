import React, { useState } from 'react';
import { addServer } from '../services/serverService'; // Updated import path


const AddServer = () => {
  const [server, setServer] = useState({
    name: '',
    id: '',
    language: '',
    framework: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setServer({ ...server, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the addServer function to send data to the API
    addServer(server)
      .then((response) => {
        console.log('Server added successfully:', response);
        // Optionally, you can reset the form or show a success message
      })
      .catch((error) => {
        console.error('Error adding server:', error);
        // Handle errors or display error messages
      });
  };

  return (
    <div>
      <h2>Add a Server</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={server.name} onChange={handleInputChange} required />
        </div>
        {/* Include input fields for other server details (id, language, framework) */}
        <button type="submit">Add Server</button>
      </form>
    </div>
  );
};

export default AddServer;
