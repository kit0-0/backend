var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dummy"
});

con.connect((err)=>{
    if(err)
    {
        console.warn("error in connection");
    }
});

module.exports = con;