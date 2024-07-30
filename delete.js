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

app.delete('/deletedata/:id',(req,res)=>{
    const delid = req.params.id;
    con.query('delete from mytable where id=?',delid,(err,result)=>{
        if (err) {
            console.log(err);
        } else {
            if(result.affectedRows==0){
                res.send("id not present");
            }else{
                res.send("deleted")
            }
        } 
    })
})
app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("on port 3000!")
    }

})
