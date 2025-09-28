import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/'; // Replace with your API endpoint

// Function to get a list of servers
export const getAllServers = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to add a new server
export const addServer = async (server) => {
  try {
    const response = await axios.post(API_BASE_URL, server);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to delete a server by ID
export const deleteServer = async (serverId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${serverId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
