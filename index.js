const express = require("express");
var con = require("./connection");
const app = express();

app.get("/", (con, resp) => {
    con.query("select * from student", (err, result) => {
        if(err){ resp.send("error in api")}
        else { resp.send(result) }
    })
});

// app.post("/", (req,resp) => {
//     const data={name:"abc"};
//     con.query("insert into student SET?", data, (error,result,fields)=> {
//         if(error) throw error;
//         resp.send(results);
//     })
    
// });


// app.listen("5000");