function validatePassword(p) {
 
      let  errors = [];
    if (p.length < 6) {
        errors.push("Your password must be at least 6 characters"); 
    }
    if (p.search(/[A-Z]/)<0 ) {
        errors.push("Your password must contain at least one upper  case letter.");
    }
    if (p.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one lower case letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit."); 
    }
    if(!p.match(/[!@#$%^&*()-+]+/)){
        console.log("here")
        errors.push("Your password must contain at least one special char."); 
    }
    if (errors.length > 0) {
        console.log(errors.join("\n"));
        return false;
    }
    return true;
}

validatePassword("aaaad3@")