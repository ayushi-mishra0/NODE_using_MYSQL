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
        } else {
            var data=JSON.parse(JSON.stringify(result))
            console.log(data[0].name);
            console.log(data[0].mark);

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
