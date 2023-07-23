import React from 'react';
import axios from 'axios';

const DatabaseInitializer = () => {
  const initializeDatabase = async () => {
    try {
      // Call the backend API to initialize the database
      const response = await axios.get('/api/initialize-database');
      console.log(response.data.message);
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  };

  return (
    <div>
      <button onClick={initializeDatabase}>Initialize Database</button>
    </div>
  );
};

export default DatabaseInitializer;
