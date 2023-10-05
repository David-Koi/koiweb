const  jwt = require('jsonwebtoken');
const moment = require('moment');

const createToken = (obj) => {

    const payload = {
        email : obj.email,
        iat : moment().unix(),
        exp : moment().add(1, 'second').unix(),
    };

    return jwt.sign(payload, process.env.SECRET_TOKEN);
};

const verifyToken = (string) => {
    let res = false;
    try{
        if(jwt.verify(string, process.env.SECRET_TOKEN)){
            res = true
        };
    }catch{
        console.log('error')
    }
    return res;
};

module.exports = {createToken, verifyToken};