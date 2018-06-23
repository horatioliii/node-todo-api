const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

let UserSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        minLength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{value} is not a valid email address'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }, 
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123');

    user.tokens = user.tokens.concat([{access, token}]);

    return user.save().then(() => {
        return token;
    });
};

let User = mongoose.model('User', UserSchema);

module.exports = {User};