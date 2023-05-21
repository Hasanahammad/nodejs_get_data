const express = require('express');
const sql = require('mssql');

const app = express();
app.use(express.json()); // Add this line to parse the request body as JSON

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

app.get('/api', (req, res) => {
  res.send('Welcome to the API!');
});

app.post('/api/users', async (req, res) => {
  try {
    await sql.connect(config);

    const { name, email } = req.body; // Ensure the request body is parsed correctly

    const result = await sql.query(
      `INSERT INTO mmpath (ztime,zutime,zauserid,zuuserid,zid,xfdestination,xtdestination) VALUES (getdate(),getdate(),'admin','admin','400010','${name}', '${email}')`
    );

    res.send('User created successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  } finally {
    sql.close();
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
