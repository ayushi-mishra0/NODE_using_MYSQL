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
app.post('/post',(req,res)=>{
    const name = req.body.name;
    const id = req.body.id;
    const mark= req.body.mark;

    con.query('insert into mytable values(?,?,?)',[id,name,mark],(err,result)=>{
        if (err) {
            console.log(err);
        } else {
            res.send("POSTED")
        }
    })
})

app.get("/getmax",(req,res)=>{
    con.query('select max(mark) as maxmark from mytable',
        (err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.send(result)
            }
        })
})

app.listen(3000,(err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("on port 3000");
    }
})
