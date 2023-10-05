const connection = require('../config/db')
const bcrypt = require('bcrypt');
const  jwt = require('jsonwebtoken');
const jwtHelper = require('../helpers/jwtHelper');
require('dotenv').config();

class userController {

    userRegister = (req, res) => {
        const { userName, email, pass } = req.body; 

        let aux = jwtHelper.createToken(req.body);
console.log(aux)
        let aux1 = jwtHelper.decodeToken(aux);

        console.log(aux1)


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