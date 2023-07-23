import React from 'react';
import DatabaseInitializer from './DatabaseInitializer';
import Statistics from './Statistics';

const App = () => {
  return (
    <div>
      <h1>Third-Party API App</h1>
      <DatabaseInitializer />
      <Statistics />
    </div>
  );
};

export default App;
