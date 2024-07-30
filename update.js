var express = require("express");
var mysql = require("mysql2");
var app = express();
app.use(express.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'newdb'
})

con.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected!!");
    }
})

app.put("/update/:id",(req,res)=>{
    const upid=req.params.id;
    const name=req.body.name;
    const mark=req.body.mark;

    con.query('UPDATE mytable SET name=?,mark=? WHERE id=?',[name,mark,upid],(err,result)=>{
        if (err) {
            console.log(err);
        } else {
            res.send("UPDATED!!");
        }
    })
 })
 app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("on port 3000")
    }
 })
