const express = require("express");
const mysql = require("mysql");

// Create a MySQL connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysqlDB' 
});

con.connect((err) => {  
    if (err) {
        console.log("Error connecting to the database:", err);
    } else {
        console.log("Connected to the database!");

        // Create table query
        const sql = "CREATE TABLE mytable (id INT, name VARCHAR(10))";
        con.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating table:", err);
            } else {
                console.log("Table created successfully");
            }
        });
    }
});
