const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'david',
    password : 'root',
    database : 'portFolioDDBB',
    //port: si es distinto al 3306
});

connection.connect(function(err){
    if(err){
        console.error('error connecting' + err.stack);
        return;
    }else{
        console.log('connected to BBDD')
    }
});

module.exports = connection;