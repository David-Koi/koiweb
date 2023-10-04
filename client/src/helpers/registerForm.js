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

export const veriPass = (string) =>{
    // console.log(string)

};