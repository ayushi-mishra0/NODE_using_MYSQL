const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());

// Create a MySQL connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'newdb'
});

// Connect to the MySQL database
con.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database!');
});

// POST route to insert data into the database
app.post('/post', (req, res) => {
    const name = req.body.name;
    const id = req.body.id;
    const mark = req.body.mark;

    // Insert data into the table
    con.query('INSERT INTO mytable (id, name, mark) VALUES (?, ?, ?)', [id, name, mark], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
        } else {
            res.status(200).send('Data posted successfully');
        }
    });
});

// Start the server
app.listen(3000, (err) => {
    if (err) {
        console.error('Error starting server:', err);
        return;
    }
    console.log('Server is running on port 3000');
});
