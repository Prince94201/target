const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Prince#123',
  database: 'Target'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

// Middleware to parse JSON requests
app.use(express.json());

// Define a route to fetch data
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM Target_Data';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Define a route to insert data
app.post('/api/data', (req, res) => {
  const { column1, column2, column3 } = req.body;
  const query = 'INSERT INTO Target_Data (name, email, query) VALUES (?, ?, ?)';
  connection.query(query, [column1, column2, column3], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send(err);
    } else {
      res.status(201).send('Data inserted successfully.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
