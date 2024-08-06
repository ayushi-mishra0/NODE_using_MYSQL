const express = require("express")
const mysql = require("mysql2");

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'mysqlDB'
})

con.connect(function(err){
    if(err){
        console.log(err);
    }else{
        var sql="CREATE TABLE mytable(id int , name varchar(10))";
        con.query(sql,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log("table created");
            }
        })
    }
})