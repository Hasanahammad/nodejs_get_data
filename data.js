const express = require('express');
const sql = require('mssql');

const app = express();

// Database configuration
const config = {
    server: 'localhost',
    port: 1433,
    user: 'sa',
    password: '123456',
    database: 'ZABDB',
    options: {
      encrypt: true, // If encryption is enabled on the server
      trustServerCertificate: true // Disable SSL verification (for self-signed certificates)
    }
  };

// API route to retrieve data from the database
app.get('/api/data', (req, res) => {
  sql.connect(config)
    .then(() => {
      const query = 'SELECT * FROM xusers'; // Replace YourTable with your actual table name

      return new sql.Request().query(query);
    })
    .then((result) => {
      res.json(result.recordset);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    })
    .finally(() => {
      sql.close();
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});