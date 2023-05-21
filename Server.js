const sql = require('mssql');

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

async function connectAndQuery() {
  try {
    // Create a new connection pool
    const pool = await sql.connect(config);
    console.log('Connected to SQL Server');

    // Execute a query
    const result = await pool.request().query('SELECT * FROM xusers');
    console.log('Query result:', result.recordset);

    // Close the connection pool
    await pool.close();
    console.log('Connection closed');
  } catch (error) {
    console.error('Error:', error);
  }
}

connectAndQuery();