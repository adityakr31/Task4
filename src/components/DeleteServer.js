import React from 'react';
import { deleteServer } from '../services/serverService'; // Updated import path


const DeleteServer = ({ serverId }) => {
  const handleDelete = () => {
    // Call the deleteServer function to delete the server by ID
    deleteServer(serverId)
      .then(() => {
        console.log('Server deleted successfully');
        // Optionally, you can update the UI or show a success message
      })
      .catch((error) => {
        console.error('Error deleting server:', error);
        // Handle errors or display error messages
      });
  };

  return (
    <button onClick={handleDelete}>Delete Server</button>
  );
};

export default DeleteServer;
