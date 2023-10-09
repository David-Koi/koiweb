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
            if(err) throw err;
            if(result?.length !== 0){
                aux = result[0].password
                let compare = bcrypt.compareSync(pass, aux);
                if(compare){
                    let token = jwtHelper.createToken(req.body);
                    let sql2 = `UPDATE user SET token = '${token}' WHERE user_id = ${result?.[0]?.user_id}`;
                    connection.query(sql2, (error, tokenResult)=>{
                        if(error) throw error;
                        if(tokenResult?.changedRows !== 0){
                            res.status(200).json({
                                compare : compare, 
                                token : token,
                                userName : result[0].userName,
                                email : result[0].email
                        });
                        }else{
                            res.status(203).json({compare : compare, token : token});
                        };;
                    });
                }else{
                    res.status(202).json({compare : compare, token : null});
                }
            }else{
                res.status(201).json({compare : null, token : null});
            }
        }); 
    };
};


module.exports = new userController;