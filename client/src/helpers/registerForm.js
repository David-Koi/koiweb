export const veriName = (string) =>{
    let spChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ]/;
    if(spChars.test(string)){
      return true;
    } else {
      return false;
    }
};

export const veriMail = (string) =>{
    let spChars = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(spChars.test(string)){
      return true;
    } else {
      return false;
    }
};

const passLength = (num) => {
    let res = false;
    if(num >= 8){res = true;};
    return res;
};

const capitalNumber = (string) => {
    let res = false;
    if(string.match(/[A-Z]/) !== null 
        && string.match(/\d/) !== null){
            return true;
    };
    return res;
};

const passSymbol = (string) => {
    let res = false;
    if(string.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)){
        res = true;
    }
    return res;
};

const inwhite = (string) => {
    let res = false;
    if(string.match(/[ ]/)){
        res = true;
    }
    return res;
};


export const veriPass = (string) =>{
    let res = {
        value : false,
        message: '',
    };
    if(!inwhite(string)){
        if(passLength(string?.length)){
            if(capitalNumber(string)){
                if(passSymbol(string)){
                    res.value = true;
                    res.message = '';
                }else{
                    res.message = 'debe tener al menos un símbolo especial.'
                };
            }else{
                res.message = 'debe tener al menos una mayúscula y un número.'
            };
        }else{
            res.message = 'debe tener 8 caracteres al menos.'
        };
    }else{
        res.message = 'no puede contener espacios en blanco.'
    }
    return res;
};