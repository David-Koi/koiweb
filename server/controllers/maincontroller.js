const connection = require("../config/db");

class mainController {

    checkDataBase = (req, res) => {

        let sql = 'SELECT * FROM user WHERE user_id = 0;'
        connection.query(sql, (err, result)=>{
            if(err){
               return res.status(400).json({
                    "status" : 400,
                    "error" : err
                })
            };
            if(result){
                return res.status(200).json({
                    "status" : 200,
                    "message" : 'Correctly connected to data base',
                });
            };
        });
       

    };

};

module.exports = new mainController;