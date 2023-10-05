const connection = require('../config/db')
const bcrypt = require('bcrypt');
const  jwt = require('jsonwebtoken');
const jwtHelper = require('../helpers/jwtHelper');
require('dotenv').config();

class userController {

    userRegister = (req, res) => {
        const { userName, email, pass } = req.body; 

        let aux = jwtHelper.verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhY29AaG90bWFpbC5jb20iLCJpYXQiOjE2OTY1Mjk0ODcsImV4cCI6MTY5NjUyOTQ4OH0.ZwLFRIhPlJWIeTwxMO6cxEM1ElUNElXcEwzbjaoKxDo');



  console.log(aux)
        
        bcrypt.hash(pass, 10, function(err, hash){
            if(err)throw err;
            let sql = `INSERT INTO user (userName, email, password) VALUES ('${userName}', '${email}', '${hash}')`;
            connection.query(sql, (err, result)=>{
                if(err) throw err;
                res.status(200).json(result)
            });
        });
    };
};

module.exports = new userController;