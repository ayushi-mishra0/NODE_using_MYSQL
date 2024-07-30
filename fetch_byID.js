var express = require("express");
var mysql = require("mysql2");
var app = express();

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',          
    password: 'root',      
    database: 'latest'     
});

con.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected!!");
    }
});

app.get("/fetchbyid/:id", (req, res) => {
    const fetchid = req.params.id;
    con.query('SELECT * FROM mytable WHERE id = ?', [fetchid], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Database query error');
        } else {
            res.send(result);
        }
    });
});

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server running on port 3000");
    }
});
