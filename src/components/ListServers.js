import React, { useState, useEffect } from 'react';
import { getAllServers } from '../services/serverService'; // Updated import path



const ListServers = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    // Use the service function to fetch data
    getAllServers()
      .then((data) => {
        setServers(data); // Update the component's state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching servers:', error);
      });
  }, []);

  return (
    <div>
      <h2>List of Servers</h2>
      <ul>
        {servers.map((server) => (
          <li key={server.id}>
            {server.name}
            {/* You can display other server details here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListServers;
