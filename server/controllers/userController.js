const connection = require('../config/db')
const bcrypt = require('bcrypt');
const jwtHelper = require('../helpers/jwtHelper');
require('dotenv').config();

  /*
            let aux = jwtHelper.createToken(req.body);
            console.log(aux)
            let aux1 = jwtHelper.decodeToken(aux);

            console.log(aux1)


            console.log(aux)
        */

class userController {

    userRegister = (req, res) => {
        const { userName, email, pass } = req.body; 
        bcrypt.hash(pass, 10, function(err, hash){
            if(err)throw err;
            let sql = `INSERT INTO user (userName, email, password) VALUES ('${userName}', '${email}', '${hash}')`;
            connection.query(sql, (err, result)=>{
                if(err) throw err;
                res.status(200).json(result)
            });
        });
    };
    
    userLogin = (req, res) => {
        const { email, pass } = req.body; 
        let aux = null;
        let sql = `SELECT * FROM user WHERE email = '${email}'`;
        connection.query(sql, (err, result)=>{
            console.log(result)
            if(err) throw err;
            aux = result[0].password
            let compare = bcrypt.compareSync(pass, aux);
            
            res.status(compare ? 200 : 201).json({compare : compare});
        }); 
    };
};


module.exports = new userController;