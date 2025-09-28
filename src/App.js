import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './components/Header';
import ServerList from './components/ServerList';
import ServerForm from './components/ServerForm';

function App() {
  const [servers, setServers] = useState([]);
  
  // Function to add a new server
  const handleAddServer = (newServer) => {
    setServers([...servers, newServer]);
  };

  // Function to delete a server by ID
  const handleDeleteServer = (serverId) => {
    const updatedServers = servers.filter((server) => server.id !== serverId);
    setServers(updatedServers);
  };

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md">
        <Header />
        <ServerForm onSubmit={handleAddServer} />
        <ServerList servers={servers} onDelete={handleDeleteServer} />
      </Container>
    </div>
  );
}

export default App;
