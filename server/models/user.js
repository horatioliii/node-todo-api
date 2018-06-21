let mongoose = require('mongoose');

let User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        required: true,
        minLength: 1
    }
});

module.exports = {User};