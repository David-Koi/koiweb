const connection = require('../config/db')
const bcrypt = require('bcrypt');
const  jwt = require('jsonwebtoken');
require('dotenv').config();

class userController {

    userRegister = (req, res) => {
        const { userName, mail, pass } = req.body;

        console.log(userName, mail)

        bcrypt.hash(pass, 10, function(err, hash){
            if(err)throw err;
            let sql = `INSERT INTO user (userName, mail, password) VALUES ('${userName}', '${mail}', '${hash}')`;
            connection.query(sql, (err, result)=>{
                if(err) throw err;
                res.status(200).json(result)
            });
        });
    };
};

module.exports = new userController;