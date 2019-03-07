const Validator = require('validator');
const validText = require('./valid_text');

module.exports = validTweetInput = (data) => {
    let errors = {};

    data.text = validText(data.text) ? data.text : "";

    if(!Validator.isLength(data.text, {min: 5, max: 140})){
        errors.text = "Tweets must be b/t 5-140 chars";
    }
    if(Validator.isEmpty(data.text)){
        errors.text = "Text field is required";
    }

    return({
        errors,
        isValid: Object.keys(errors).length == 0
    });
};