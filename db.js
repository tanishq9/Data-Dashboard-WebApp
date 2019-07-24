const sequelize = require('sequelize');

const db = new sequelize('pep','tspep','tspep',{
    host : 'localhost',
    dialect : 'mysql',
    pool : {
        min : 0,
        max : 20
    }
});

const Student = db.define('datas',{
    index :{
        type:sequelize.INTEGER,
        primaryKey:true,

    },
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
});

exports = module.exports = {
    Student
}
