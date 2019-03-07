const Validator = require("validator");
const validText = require('./valid_text');

module.exports = validateRegisterInput = () => {
    let errors = {};

    data.handle = validText(data.handle) ? data.handle : "";
    data.email = validText(data.email) ? data.email : "";
    data.password = validText(data.password) ? data.password : "";
    data.password2 = validText(data.password2) ? data.password2 : "";

    if(!Validator.isLength(data.handle, { min: 2, max: 30 })){
        errors.handle = "Handle must be between 2-30 characters";
    }

    if(Validator.isEmpty(data.handle)){
        errors.handle = "Handle field is required";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }

    if(!Validator.isEmail(email.handle)){
        errors.email = "Invalid email";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be between 6-30 characters";
    }

    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = "Passwords must match";
    }

    return({
        errors,
        isValid: Object.keys(errors).length == 0
    });
    
};