var express = require("express");
var mysql = require("mysql2");
var app = express();
app.use(express.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'newdb'
}); 

con.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected!!");
    }
})