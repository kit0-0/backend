const express = require("express");
var con = require("./connection");
const app = express();
app.use(express.json());

// app.get("",(req,resp) => {
//     console.log(req.query.name);
//     resp.send("Hi, this is home page2");
// });

app.get("/", (req, res) => {
    con.query("SELECT * FROM student", (err, result) => {
        if (err) {
            res.send("Error in API");
        } else {
            // console.log(result);
            res.send(result);
        }
    });
});

app.post("/", (req,resp) => {
    // const data = {name:'namrta'};
    const data = req.body;
    con.query("INSERT INTO student SET?",data,(error,results,fields) =>{
        if(error) throw error;
        resp.send(results);
    })
});

// app.post("/", (req,resp) => {
//     const data={name:"abc"};
//     con.query("insert into student SET?", data, (error,result,fields)=> {
//         if(error) throw error;
//         resp.send(results);
//     })
    
// });


// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});