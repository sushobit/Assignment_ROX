const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.get('/api/initialize-database', async (req, res) => {
  try {
    const response = await axios.get(
      'https://s3.amazonaws.com/roxiler.com/product_transaction.json'
    );

    
    console.log('Seed data:', response.data);

    res.json({ message: 'Database initialized successfully' });
  } catch (error) {
    console.error('Error initializing database:', error);
    
    res.status(500).json({ error: 'Error initializing database' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
