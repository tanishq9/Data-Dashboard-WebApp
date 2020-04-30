const sequelize = require('sequelize');

/*
// Get the mysql service
var mysql = require('mysql');

// Add the credentials to access your database
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : null,
    database : 'tspep'
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});
*/

const db = new sequelize({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "tspep",
    dialect : "mysql", 
    pool : {
        min : 0,
        max : 20
    }
});

const Student = db.define('datas',{
    Name:{
        type:sequelize.STRING
    },
    College:{
        type:sequelize.STRING
    },
    Branch:{
        type:sequelize.STRING
    },
    Batch:{
        type:sequelize.STRING
    },
    Email:{
        type:sequelize.STRING
    },
    Phone:{
        type:sequelize.INTEGER
    }
})

// db.sync() returns a promise function
db.sync().then(function(){
    console.log("Database has been synced.")
}).catch(function(err){
    console.log("Error creating database.")
    console.log(err);
});


exports = module.exports = {
    Student
}
